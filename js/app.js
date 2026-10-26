/* UI layer: dashboard, reviewer, exam, results. Dynamic text is inserted with textContent only. */
(function () {
  'use strict';
  const { SUBJECTS, Store, score, summary } = Exam;
  const $ = (s, r) => (r || document).querySelector(s);
  const main = $('#main');
  let state = null, timer = null;

  function el(tag, props, ...kids) {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(props || {})) {
      if (v == null) continue;
      if (k === 'class') e.className = v; else if (k === 'text') e.textContent = v;
      else if (k.startsWith('on')) e.addEventListener(k.slice(2), v); else e.setAttribute(k, v);
    }
    kids.flat().forEach(c => c != null && e.append(c.nodeType ? c : document.createTextNode(c)));
    return e;
  }
  function toast(m) { const t = $('#toast'); t.textContent = m; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2200); }
  function confirmDlg(title, msg, yesLabel) {
    return new Promise(res => {
      const d = $('#dlg'); $('#dlgTitle').textContent = title; $('#dlgMsg').textContent = msg; $('#dlgYes').textContent = yesLabel || 'Confirm';
      const done = v => { d.close(); res(v); $('#dlgYes').onclick = $('#dlgNo').onclick = null; };
      $('#dlgYes').onclick = () => done(true); $('#dlgNo').onclick = () => done(false); d.showModal();
    });
  }
  const subj = id => SUBJECTS.find(s => s.id === id);
  function go(fn) { clearInterval(timer); document.querySelector('.readprog')?.remove(); window.removeEventListener('scroll', onScroll); main.replaceChildren(); fn(); window.scrollTo(0, 0); main.focus(); }

  /* ---------- Dashboard ---------- */
  function dashboard() {
    const at = Store.attempts();
    const best = id => Math.max(0, ...at.filter(a => a.subject === id).map(a => a.score));
    main.append(el('section', { class: 'hero' }, el('h1', { text: 'Welcome back, student' }),
      el('p', { text: 'Study your reviewers, then test yourself with a 60-item practice exam for each subject.' }),
      el('div', { class: 'stats' }, stat(at.length, 'tests completed'), stat(4, 'subjects'), stat(240, 'questions'))));
    const grid = el('div', { class: 'grid' });
    SUBJECTS.forEach(s => {
      const mine = at.filter(a => a.subject === s.id), last = mine[mine.length - 1];
      const prog = Store.get('sh_prog_' + s.id, null);
      grid.append(el('article', { class: 'card', style: '--ac:' + s.accent },
        el('h2', { text: s.icon + ' ' + s.name }), el('span', { class: 'meta', text: s.code }), el('p', { text: s.desc }),
        el('div', { class: 'row' }, el('span', { class: 'pill', text: '60 questions' }),
          el('span', { class: 'pill', text: last ? 'Latest ' + last.score + '/60' : 'Not taken yet' }),
          el('span', { class: 'pill', text: mine.length ? 'Best ' + best(s.id) + '/60' : 'Best –' })),
        el('div', { class: 'row' },
          el('button', { class: 'btn', onclick: () => go(() => reviewer(s.id)) }, 'Study Reviewer'),
          el('button', { class: 'btn ghost', onclick: () => startExam(s.id) }, prog ? 'Resume Test' : 'Take Practice Test'),
          mine.length ? el('button', { class: 'btn ghost', onclick: () => go(() => history(s.id)) }, 'Past results') : null)));
    });
    main.append(grid, el('div', { class: 'row end', style: 'margin-top:1.5rem' },
      el('button', { class: 'btn ghost', onclick: async () => { if (await confirmDlg('Reset progress?', 'This permanently deletes all saved scores and in-progress tests.', 'Delete everything')) { Store.reset(); toast('Progress reset'); go(dashboard); } } }, 'Reset saved progress')));
  }
  const barEl = p => { const i = document.createElement('i'); i.style.width = (p * 100) + '%'; return el('div', { class: 'bar' }, i); };
  const stat = (n, l) => el('div', { class: 'stat' }, el('b', { text: String(n) }), l);

  /* ---------- Reviewer ---------- */
  function onScroll() { const b = $('.readprog'); if (!b) return; const h = document.documentElement; b.style.width = (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight) * 100) + '%'; }
  function reviewer(id) {
    const s = subj(id), r = REVIEWERS[id];
    document.body.append(el('div', { class: 'readprog', 'aria-hidden': 'true' })); window.addEventListener('scroll', onScroll);
    const content = el('article', { class: 'content', id: 'content' });
    content.innerHTML = r.html; // static, build-time converted reviewer content (trusted)
    const toc = el('nav', { class: 'toc', 'aria-label': 'Table of contents' }, el('strong', { text: 'Contents' }));
    content.querySelectorAll('h1,h2,h3').forEach((h, i) => { h.id = 'sec' + i; toc.append(el('a', { href: '#sec' + i, class: 'l' + h.tagName[1], onclick: e => { e.preventDefault(); h.scrollIntoView({ behavior: 'smooth' }); } }, h.textContent)); });
    const info = el('span', { class: 'meta' });
    const search = el('input', { type: 'search', placeholder: 'Search this reviewer…', 'aria-label': 'Search reviewer' });
    search.addEventListener('input', () => { highlight(content, search.value.trim(), info); });
    main.append(el('div', { class: 'row' }, el('button', { class: 'btn ghost', onclick: () => go(dashboard) }, '← Dashboard'), el('h2', { text: s.name, style: 'margin:0' }), el('span', { class: 'sp' }),
      el('button', { class: 'btn', onclick: () => startExam(id) }, 'Take Practice Test')),
      r.notice ? el('div', { class: 'notice', role: 'note', text: r.notice }) : null,
      el('div', { class: 'row', style: 'margin:.6rem 0' }, search, info),
      el('div', { class: 'readerwrap' }, toc, content));
  }
  function highlight(root, q, info) {
    root.querySelectorAll('mark').forEach(m => m.replaceWith(document.createTextNode(m.textContent))); root.normalize();
    if (q.length < 2) { info.textContent = ''; return; }
    const re = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), nodes = [], w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (w.nextNode()) if (re.test(w.currentNode.nodeValue)) nodes.push(w.currentNode); re.lastIndex = 0;
    let n = 0;
    nodes.forEach(t => { const f = document.createDocumentFragment(); let last = 0, m; const txt = t.nodeValue; re.lastIndex = 0;
      while ((m = re.exec(txt))) { f.append(txt.slice(last, m.index)); const mk = document.createElement('mark'); mk.textContent = m[0]; f.append(mk); last = m.index + m[0].length; n++; if (!m[0].length) re.lastIndex++; }
      f.append(txt.slice(last)); t.replaceWith(f); });
    info.textContent = n + (n === 1 ? ' match' : ' matches');
    root.querySelector('mark')?.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }

  /* ---------- Exam ---------- */
  function startExam(id) {
    const qs = QUESTION_BANKS[id], saved = Store.get('sh_prog_' + id, null);
    state = { id, qs, idx: 0, answers: new Array(qs.length).fill(null), start: Date.now() };
    if (saved && saved.answers && saved.answers.length === qs.length) { state.answers = saved.answers; state.idx = saved.idx || 0; state.start = Date.now() - (saved.elapsed || 0); }
    go(examView);
  }
  function persist() { Store.set('sh_prog_' + state.id, { answers: state.answers, idx: state.idx, elapsed: Date.now() - state.start }); }
  function examView() {
    const s = subj(state.id), q = state.qs[state.idx], n = state.qs.length;
    const clock = el('span', { class: 'meta' }); const tick = () => { const t = Math.floor((Date.now() - state.start) / 1000); clock.textContent = '⏱ ' + String(Math.floor(t / 60)).padStart(2, '0') + ':' + String(t % 60).padStart(2, '0'); }; tick(); timer = setInterval(tick, 1000);
    const bar = el('div', { class: 'progress', role: 'progressbar', 'aria-valuemin': '0', 'aria-valuemax': String(n), 'aria-valuenow': String(state.answers.filter(Boolean).length) }, el('i'));
    bar.firstChild.style.width = (state.answers.filter(Boolean).length / n * 100) + '%';
    const opts = el('div', { role: 'radiogroup', 'aria-label': 'Answer choices' });
    q.options.forEach((o, i) => { const k = 'ABCD'[i];
      opts.append(el('button', { class: 'opt', role: 'radio', 'aria-checked': String(state.answers[state.idx] === k), onclick: () => { state.answers[state.idx] = k; persist(); go(examView); } }, el('span', { class: 'k', text: k }), el('span', { text: o }))); });
    const nums = el('div', { class: 'qnums' });
    state.qs.forEach((_, i) => nums.append(el('button', { class: 'qn' + (state.answers[i] ? ' ans' : '') + (i === state.idx ? ' cur' : ''), 'aria-label': 'Question ' + (i + 1) + (state.answers[i] ? ', answered' : ', unanswered'), onclick: () => { state.idx = i; persist(); go(examView); } }, String(i + 1))));
    main.append(el('div', { class: 'row' }, el('button', { class: 'btn ghost', onclick: () => { persist(); go(dashboard); toast('Progress saved'); } }, '← Save & exit'), el('h2', { text: s.name, style: 'margin:0' }), el('span', { class: 'sp' }), clock),
      el('div', { class: 'examgrid', style: 'margin-top:.8rem' },
        el('div', {}, el('div', { class: 'row meta' }, el('strong', { text: 'Question ' + (state.idx + 1) + ' of ' + n }), el('span', { class: 'sp' }), el('span', { text: state.answers.filter(Boolean).length + ' answered' })), bar,
          el('div', { class: 'qbox', style: 'margin-top:.7rem' }, el('p', { class: 'qtext', text: q.question }), opts),
          el('div', { class: 'row', style: 'margin-top:.8rem' },
            el('button', { class: 'btn ghost', disabled: state.idx === 0 ? 'disabled' : null, onclick: () => { state.idx--; persist(); go(examView); } }, '← Previous'),
            el('button', { class: 'btn ghost', disabled: state.idx === n - 1 ? 'disabled' : null, onclick: () => { state.idx++; persist(); go(examView); } }, 'Next →'),
            el('span', { class: 'sp' }), el('button', { class: 'btn danger', onclick: finish }, 'Finish Test'))),
        el('aside', { class: 'nav' }, el('strong', { text: 'Questions' }), nums)));
  }
  async function finish() {
    const un = state.answers.filter(a => !a).length;
    if (!await confirmDlg('Submit your test?', un ? 'You still have ' + un + ' unanswered question(s). They will count as incorrect.' : 'You answered every question. Submit now?', 'Submit')) return;
    const r = score(state.qs, state.answers);
    const att = { subject: state.id, date: new Date().toISOString(), score: r.correct, total: r.total, pct: r.pct, answers: state.answers.slice(), seconds: Math.round((Date.now() - state.start) / 1000) };
    Store.addAttempt(att); Store.del('sh_prog_' + state.id);
    go(() => results(att));
  }

  /* ---------- Results ---------- */
  function results(att) {
    const s = subj(att.subject), qs = QUESTION_BANKS[att.subject], r = score(qs, att.answers);
    const topics = Object.entries(r.topics).map(([t, v]) => ({ t, ...v, p: v.correct / v.total })).sort((a, b) => a.p - b.p);
    main.append(el('div', { class: 'row' }, el('button', { class: 'btn ghost', onclick: () => go(dashboard) }, '← Dashboard'), el('h2', { text: s.name + ' – Results', style: 'margin:0' })),
      el('section', { class: 'qbox', style: 'margin-top:.8rem' },
        el('div', { class: 'score', text: r.correct + ' / ' + r.total }), el('p', { text: r.pct + '% – ' + summary(r.pct) }),
        el('div', { class: 'row' }, el('span', { class: 'pill', text: 'Correct: ' + r.correct }), el('span', { class: 'pill', text: 'Incorrect: ' + r.incorrect }), el('span', { class: 'pill', text: 'Unanswered: ' + r.unanswered }), el('span', { class: 'pill', text: 'Total: ' + r.total })),
        el('h3', { text: 'Topics to review' }),
        el('div', {}, topics.map(x => el('div', { style: 'margin:.4rem 0' }, el('div', { class: 'row' }, el('span', { class: x.p < .6 ? 'weak' : '', text: x.t + (x.p < .6 ? ' – needs more study' : '') }), el('span', { class: 'sp' }), el('span', { class: 'meta', text: x.correct + '/' + x.total })), barEl(x.p)))),
        el('div', { class: 'row', style: 'margin-top:1rem' }, el('button', { class: 'btn', onclick: () => { Store.del('sh_prog_' + att.subject); startExam(att.subject); } }, 'Retake Test'), el('button', { class: 'btn ghost', onclick: () => go(() => reviewer(att.subject)) }, 'Review Reviewer'), el('button', { class: 'btn ghost', onclick: () => go(dashboard) }, 'Return to Dashboard'))),
      el('h3', { text: 'Detailed review' }));
    qs.forEach((q, i) => {
      const a = att.answers[i], ok = a === q.answer, txt = l => l ? l + '. ' + q.options['ABCD'.indexOf(l)] : 'No answer (counted as incorrect)';
      main.append(el('div', { class: 'rev ' + (ok ? 'right' : 'wrong') }, el('div', { class: 'row' }, el('strong', { text: 'Question ' + (i + 1) }), el('span', { class: 'tag ' + (ok ? 'right' : 'wrong'), text: ok ? '✔ Correct' : '✘ Incorrect' }), el('span', { class: 'meta', text: q.topic + ' · ' + q.source })),
        el('p', { class: 'qtext', text: q.question }), el('p', { text: 'Your answer: ' + txt(a) }), el('p', { text: 'Correct answer: ' + txt(q.answer) }), el('div', { class: 'exp', text: 'Why: ' + q.explanation })));
    });
  }
  function history(id) {
    const list = Store.attempts().map((a, i) => ({ a, i })).filter(x => x.a.subject === id).reverse();
    main.append(el('div', { class: 'row' }, el('button', { class: 'btn ghost', onclick: () => go(dashboard) }, '← Dashboard'), el('h2', { text: subj(id).name + ' – Past results', style: 'margin:0' })));
    list.forEach(({ a }) => main.append(el('div', { class: 'card', style: 'margin-top:.7rem' }, el('strong', { text: new Date(a.date).toLocaleString() }), el('span', { text: a.score + '/' + a.total + ' (' + a.pct + '%)' }), el('div', { class: 'row' }, el('button', { class: 'btn ghost', onclick: () => go(() => results(a)) }, 'View details')))));
  }

  /* ---------- Chrome ---------- */
  $('#homeBtn').onclick = () => go(dashboard);
  const root = document.documentElement; let fs = Store.get('sh_fs', 16); root.style.setProperty('--fs', fs + 'px');
  $('#fontUp').onclick = () => { fs = Math.min(24, fs + 1); root.style.setProperty('--fs', fs + 'px'); Store.set('sh_fs', fs); };
  $('#fontDown').onclick = () => { fs = Math.max(12, fs - 1); root.style.setProperty('--fs', fs + 'px'); Store.set('sh_fs', fs); };
  const th = Store.get('sh_theme', null); if (th) root.dataset.theme = th;
  $('#themeBtn').onclick = () => { const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme:dark)').matches; root.dataset.theme = dark ? 'light' : 'dark'; Store.set('sh_theme', root.dataset.theme); };
  if (!Store.persistent) $('#storageWarn').hidden = false;
  const errs = Exam.validateBanks(QUESTION_BANKS);
  if (errs.length) { console.error(errs); main.append(el('div', { class: 'notice', text: 'Question bank validation failed: ' + errs.slice(0, 3).join('; ') })); } else go(dashboard);
})();
