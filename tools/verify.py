import re, sys, html, subprocess
from collections import Counter
def pdf_chars(pdf, header_re):
    t = subprocess.run(['pdftotext','-layout',pdf,'-'],capture_output=True,text=True).stdout
    keep=[]
    for ln in t.split('\n'):
        s=ln.strip()
        if re.fullmatch(r'Page \d+ of \d+',s): continue
        if re.match(header_re,s): continue
        keep.append(s)
    txt=''.join(keep)
    txt=re.sub(r'[\s\uf0b7\u2022\uf0a7\u25cf\u25e6\uf0d8]','',txt)
    return txt
def html_chars(path):
    h=open(path,encoding='utf-8').read()
    h=re.sub(r'<[^>]+>','',h); h=html.unescape(h)
    return re.sub(r'\s','',h)
pairs={'ds':('/home/claude/src/datastruc/datastrucreviewer.pdf',r'^DATASTRC Module 5: Binary Trees – Complete Reviewer$'),
       'ia':('/home/claude/src/inforas/inforasreviewer.pdf',r'^Network and System Security – Lesson 1 Reviewer$'),
       'pc':('/home/claude/src/purpcom/purpcomrev.pdf',r'^Communication for Academic Purposes: Complete Study Reviewer$')}
for k,(pdf,hr) in pairs.items():
    a=Counter(pdf_chars(pdf,hr)); b=Counter(html_chars(k+'.html'))
    miss=a-b; extra=b-a
    print(k,'pdf chars',sum(a.values()),'html chars',sum(b.values()),'missing',dict(miss.most_common(12)),'extra',dict(extra.most_common(12)))
