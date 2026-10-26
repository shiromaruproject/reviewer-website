// Builds js/questions.js from the authoring files, shuffling options so correct answers are evenly spread (A-D).
const fs = require('fs');
const subjects = [
  ['datastruc','ds','DS'], ['purpcom','pc','PC'], ['inforas','ia','IA'], ['cworld','cw','CW']
];
function rng(seed){ let s=seed>>>0; return ()=>{ s=(s+0x6D2B79F5)>>>0; let t=s; t=Math.imul(t^(t>>>15),t|1); t^=t+Math.imul(t^(t>>>7),t|61); return ((t^(t>>>14))>>>0)/4294967296; }; }
const out = {}; let report = [];
subjects.forEach(([id, file, pre], si) => {
  const raw = require('./bank/'+file+'.js');
  const rand = rng(1000+si*77);
  // balanced target positions
  let pos = []; for (let i=0;i<raw.length;i++) pos.push(i%4);
  for (let i=pos.length-1;i>0;i--){ const j=Math.floor(rand()*(i+1)); [pos[i],pos[j]]=[pos[j],pos[i]]; }
  out[id] = raw.map((r, i) => {
    const [type, topic, source, diff, q, correct, wrong, exp] = r;
    const opts = new Array(4); opts[pos[i]] = correct;
    let w = 0; for (let k=0;k<4;k++) if (k!==pos[i]) opts[k] = wrong[w++];
    return { id: `${pre}-${String(i+1).padStart(2,'0')}`, type, topic, source, difficulty: diff, question: q, options: opts, answer: 'ABCD'[pos[i]], explanation: exp };
  });
});
// ---- validation ----
let ok = true; const ids = new Set();
for (const [id, list] of Object.entries(out)) {
  const cnt = {type:{},diff:{},ans:{A:0,B:0,C:0,D:0}}; const qs = new Set();
  if (list.length !== 60) { console.log('FAIL count', id, list.length); ok = false; }
  list.forEach(q => {
    if (ids.has(q.id)) { console.log('dup id', q.id); ok=false; } ids.add(q.id);
    if (q.options.length!==4 || q.options.some(o=>!o||typeof o!=='string')) { console.log('bad options', q.id); ok=false; }
    if (new Set(q.options.map(o=>o.trim().toLowerCase())).size!==4) { console.log('duplicate options', q.id); ok=false; }
    if (!'ABCD'.includes(q.answer)) { console.log('bad answer', q.id); ok=false; }
    if (!q.explanation || q.explanation.length<20) { console.log('missing explanation', q.id); ok=false; }
    const key = q.question.toLowerCase().replace(/\W+/g,' ').trim(); if (qs.has(key)) { console.log('dup question', q.id); ok=false; } qs.add(key);
    cnt.type[q.type]=(cnt.type[q.type]||0)+1; cnt.diff[q.difficulty]=(cnt.diff[q.difficulty]||0)+1; cnt.ans[q.answer]++;
  });
  console.log(id, list.length, JSON.stringify(cnt));
}
console.log('total', Object.values(out).reduce((a,l)=>a+l.length,0), ok ? 'VALID' : 'INVALID');
fs.mkdirSync('../js',{recursive:true});
fs.writeFileSync('../js/questions.js', '/* Question banks. Each question: id, type, topic, source, difficulty, question, options[4], answer (A-D), explanation. */\nwindow.QUESTION_BANKS = ' + JSON.stringify(out, null, 1) + ';\n');
