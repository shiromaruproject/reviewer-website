#!/usr/bin/env python3
"""Convert a reviewer PDF to structured HTML without altering its wording.

Headings, paragraphs, bullet/numbered lists, ruled tables and monospace
(code / ASCII tree) blocks are rebuilt from font and position data.
Page headers/footers added by the PDF renderer are dropped.
"""
import sys, re, html, json
import pdfplumber

def esc(s): return html.escape(s, quote=False)

def style_of(w):
    f = w['fontname'].split('+')[-1]
    return dict(bold=('Semibold' in f or 'Bold' in f), ital='Italic' in f,
                mono='Mono' in f, serif='Serif' in f, bullet=('DejaVu' in f and round(w['size'], 1) == 6.0))

def inline(words, mono_cell=False):
    """words (sorted by x) -> inline html with <strong>/<em>/<code> runs.
    A space is only emitted where there is a real gap between words."""
    runs = []   # [key, [texts], space_before_first]
    prev = None
    for w in words:
        s = style_of(w)
        k = (s['bold'], s['ital'], s['mono'])
        sp = prev is not None and (w['x0'] - prev['x1']) >= 2.0
        if runs and runs[-1][0] == k and sp:
            runs[-1][1].append(w['text'])
        elif runs and runs[-1][0] == k and not sp:
            runs[-1][1][-1] += w['text']
        else:
            runs.append([k, [w['text']], sp])
        prev = w
    out = ''
    for i, (k, toks, sp) in enumerate(runs):
        t = esc(' '.join(toks))
        b, it, m = k
        if m: t = f'<code>{t}</code>'
        if b: t = f'<strong>{t}</strong>'
        if it: t = f'<em>{t}</em>'
        out += (' ' if (sp and i > 0) else '') + t
    return out

def lines_of(words, tol=3.5):
    words = sorted(words, key=lambda w: ((w['top'] + w['bottom']) / 2, w['x0']))
    lines = []
    for w in words:
        mid = (w['top'] + w['bottom']) / 2
        if lines and abs(lines[-1]['mid'] - mid) <= tol:
            lines[-1]['w'].append(w)
        else:
            lines.append({'mid': mid, 'w': [w]})
    for l in lines:
        l['w'].sort(key=lambda w: w['x0'])
        l['top'] = min(w['top'] for w in l['w']); l['bottom'] = max(w['bottom'] for w in l['w'])
        l['x0'] = l['w'][0]['x0']; l['size'] = max(w['size'] for w in l['w'])
    return lines

def convert(path, running_header_prefix):
    blocks = []   # dicts: kind, html/rows, page
    with pdfplumber.open(path) as pdf:
        for pno, page in enumerate(pdf.pages, 1):
            tables = [t for t in page.find_tables() if t.bbox[0] >= 0 and t.bbox[2] <= page.width + 1]
            def _overlap(a, b): return not (a[2] <= b[0] or b[2] <= a[0] or a[3] <= b[1] or b[3] <= a[1])
            tables = [t for t in tables if not any(o is not t and _overlap(t.bbox, o.bbox) and
                      (o.bbox[2]-o.bbox[0])*(o.bbox[3]-o.bbox[1]) < (t.bbox[2]-t.bbox[0])*(t.bbox[3]-t.bbox[1]) for o in tables)]
            tb = [t.bbox for t in tables]
            def in_table(w):
                cx, cy = (w['x0'] + w['x1']) / 2, (w['top'] + w['bottom']) / 2
                return any(b[0] - 1 <= cx <= b[2] + 1 and b[1] - 1 <= cy <= b[3] + 1 for b in tb)
            words = page.extract_words(x_tolerance=1.6, y_tolerance=2, keep_blank_chars=False,
                                       extra_attrs=['fontname', 'size'])
            words = [w for w in words if not in_table(w)]
            H = page.height
            # drop page footer and running header
            def is_chrome(l):
                txt = ' '.join(w['text'] for w in l['w'])
                if re.fullmatch(r'Page \d+ of \d+', txt): return True
                if l['size'] <= 6.1 and (l['top'] < 30 or l['top'] > H - 45): return True
                if pno > 1 and l['top'] < 70 and txt.startswith(running_header_prefix): return True
                return False
            lines = [l for l in lines_of(words) if not is_chrome(l)]
            dots = [c for c in page.curves if c['width'] < 6 and c['height'] < 6 and not in_table({'x0': c['x0'], 'x1': c['x1'], 'top': c['top'], 'bottom': c['bottom']})]
            for l in lines:
                l['bullet'] = None
                for c in dots:
                    cy = (c['top'] + c['bottom']) / 2
                    if l['top'] - 2 <= cy <= l['bottom'] + 2 and 0 < l['x0'] - c['x1'] < 22:
                        l['bullet'] = 1 if c['x0'] < 70 else 2
            items = [('L', l['top'], l) for l in lines]
            for t in tables:
                rows = []
                for r in t.rows:
                    row = []
                    for c in r.cells:
                        if c is None: row.append(''); continue
                        cw = [w for w in page.extract_words(x_tolerance=1.6, y_tolerance=2, extra_attrs=['fontname', 'size'])
                              if c[0] - 1 <= (w['x0'] + w['x1']) / 2 <= c[2] + 1 and c[1] - 1 <= (w['top'] + w['bottom']) / 2 <= c[3] + 1]
                        cl = lines_of(cw)
                        row.append(' '.join(inline(l['w']) for l in cl))
                    rows.append(row)
                items.append(('T', t.bbox[1], rows))
            items.sort(key=lambda x: x[1])
            blocks += [(pno, k, v) for k, _, v in items]
    return build(blocks)

def build(blocks):
    out = []            # list of dict(tag, html, ...)
    prev = None         # previous text line info
    code_base = None
    def close_prev(): pass
    for pno, kind, v in blocks:
        if kind == 'T':
            rows = v
            if out and out[-1]['tag'] == 'table' and out[-1]['rows'] and rows and out[-1]['rows'][0] == rows[0]:
                rows = rows[1:]          # repeated header row on a new page
                out[-1]['rows'] += rows
            else:
                out.append({'tag': 'table', 'rows': rows})
            prev = None
            continue
        l = v
        ws = l['w']
        sts = [style_of(w) for w in ws]
        txt = ' '.join(w['text'] for w in ws)
        gap = (l['top'] - prev['bottom']) if prev and prev['pno'] == pno else 99
        # headings
        if sts[0]['serif']:
            tag = {24.0: 'h1', 16.5: 'h2', 13.5: 'h3'}.get(round(l['size'], 1), 'h3')
            if out and out[-1]['tag'] == tag and gap < 8 and prev and prev['kind'] == 'h':
                out[-1]['html'] += ' ' + esc(txt)
            else:
                out.append({'tag': tag, 'html': esc(txt)})
            prev = dict(pno=pno, bottom=l['bottom'], kind='h'); continue
        # monospace code / ascii art
        if all(s['mono'] for s in sts) and l['size'] >= 10:
            cw = l['size'] * 0.6
            if out and out[-1]['tag'] == 'pre' and prev and prev['kind'] == 'code' and (gap < 30 or prev['pno'] != pno):
                pre = out[-1]
            else:
                pre = {'tag': 'pre', 'lines': []}; out.append(pre)
            if prev and prev['kind'] == 'code' and prev['pno'] == pno and gap > l['size'] * 0.9:
                pre['lines'].append((None, ''))     # blank line preserved
            pre['lines'].append((ws[0]['x0'], ws, cw))
            prev = dict(pno=pno, bottom=l['bottom'], kind='code'); continue
        # bullet / numbered
        first = ws[0]
        if l.get('bullet'):
            body = inline(ws)
            lv = l['bullet']
            if out and out[-1]['tag'] == 'ul' and prev and prev['kind'] in ('li', 'liC', 'p') and (prev['kind'] != 'p' or out[-1]['items']):
                out[-1]['items'].append((lv, body))
            else:
                out.append({'tag': 'ul', 'items': [(lv, body)]})
            prev = dict(pno=pno, bottom=l['bottom'], kind='li', x0=l['x0']); continue
        m = re.fullmatch(r'(\d+)\.', first['text'])
        if m and len(ws) > 1 and not sts[0]['serif']:
            body = inline(ws[1:])
            n = int(m.group(1))
            if out and out[-1]['tag'] == 'ol' and prev and prev['kind'] in ('ol', 'olC'):
                out[-1]['items'].append((n, body))
            else:
                out.append({'tag': 'ol', 'items': [(n, body)]})
            prev = dict(pno=pno, bottom=l['bottom'], kind='ol', x0=l['x0']); continue
        # sub-heading: whole line semibold
        if all(s['bold'] for s in sts) and len(txt) < 90 and (gap > 6 or prev is None or prev['kind'] != 'p') and not txt.endswith(('.', ';', ',')) or \
           (all(s['bold'] for s in sts) and len(txt) < 70 and txt.endswith(':') and gap > 6):
            out.append({'tag': 'h4', 'html': inline(ws)})
            prev = dict(pno=pno, bottom=l['bottom'], kind='h'); continue
        body = inline(ws)
        # continuation lines
        if prev and prev['pno'] == pno and gap <= 7.5 and prev['kind'] in ('li', 'ol', 'p', 'liC', 'olC'):
            if prev['kind'] in ('li', 'liC') and out[-1]['tag'] == 'ul':
                out[-1]['items'][-1] = (out[-1]['items'][-1][0], out[-1]['items'][-1][1] + ' ' + body); prev['bottom'] = l['bottom']; prev['kind'] = 'liC'; continue
            if prev['kind'] in ('ol', 'olC') and out[-1]['tag'] == 'ol':
                n, b = out[-1]['items'][-1]; out[-1]['items'][-1] = (n, b + ' ' + body); prev['bottom'] = l['bottom']; prev['kind'] = 'olC'; continue
            if prev['kind'] == 'p' and out[-1]['tag'] == 'p':
                out[-1]['html'] += ' ' + body; prev['bottom'] = l['bottom']; continue
        # list items that wrap across a page break
        if prev and prev['pno'] != pno and prev['kind'] in ('li', 'liC', 'ol', 'olC') and l['x0'] > 60 and not sts[0]['bullet']:
            pass
        out.append({'tag': 'p', 'html': body})
        prev = dict(pno=pno, bottom=l['bottom'], kind='p')
    return render(out)

def render(out):
    h = []
    for b in out:
        t = b['tag']
        if t in ('h1', 'h2', 'h3', 'h4', 'p'):
            h.append(f"<{t}>{b['html']}</{t}>")
        elif t == 'ul':
            h.append('<ul>' + ''.join(f'<li class="lv{lv}">{i}</li>' for lv, i in b['items']) + '</ul>')
        elif t == 'ol':
            h.append('<ol>' + ''.join(f'<li value="{n}">{i}</li>' for n, i in b['items']) + '</ol>')
        elif t == 'table':
            rows = b['rows']
            head = ''.join(f'<th>{c}</th>' for c in rows[0])
            body = ''.join('<tr>' + ''.join(f'<td>{c}</td>' for c in r) + '</tr>' for r in rows[1:])
            h.append(f'<div class="table-wrap"><table><thead><tr>{head}</tr></thead><tbody>{body}</tbody></table></div>')
        elif t == 'pre':
            L = [x for x in b['lines'] if x[0] is not None]
            base = min(x[0] for x in L)
            lines = []
            for x in b['lines']:
                if x[0] is None: lines.append(''); continue
                x0, ws, cw = x
                s = ' ' * round((x0 - base) / cw)
                lastx = None
                for w in ws:
                    if lastx is not None: s += ' ' * max(1, round((w['x0'] - lastx) / cw))
                    s += w['text']; lastx = w['x1']
                lines.append(s)
            h.append('<pre class="code"><code>' + esc('\n'.join(lines)) + '</code></pre>')
    return '\n'.join(h)

if __name__ == '__main__':
    path, prefix, outp = sys.argv[1:4]
    open(outp, 'w', encoding='utf-8').write(convert(path, prefix))
