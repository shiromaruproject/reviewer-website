/* Exam logic: validation, scoring, and storage (no DOM). */
(function (root) {
  'use strict';
  const SUBJECTS = [
    { id: 'datastruc', name: 'Data Structures and Algorithms', short: 'DSA', code: 'datastrucreviewer', accent: '#1b6b52', icon: '🌳',
      desc: 'Binary trees, traversals, BSTs, expression trees, efficiency, and stack vs queue.' },
    { id: 'purpcom', name: 'Purposive Communication', short: 'PurpCom', code: 'purpcomreviewer', accent: '#7a4fa3', icon: '✍️',
      desc: 'Academic writing, professional letters and memos, workplace communication, and email.' },
    { id: 'inforas', name: 'Information Assurance and Security', short: 'Inforas', code: 'inforasreviewer', accent: '#b4561b', icon: '🛡️',
      desc: 'Network controls, access control, IAM, malware, attacks, SSDLC, OWASP and SQL injection.' },
    { id: 'cworld', name: 'The Contemporary World', short: 'COWORLD', code: 'cworldreviewer', accent: '#1d63a8', icon: '🌏',
      desc: 'Global market integration, global governance, the state, global citizenship, and AI.' }
  ];

  function validateBanks(banks) {
    const errs = [], ids = new Set();
    SUBJECTS.forEach(s => {
      const list = banks[s.id] || [];
      if (list.length !== 60) errs.push(s.id + ': expected 60 questions, found ' + list.length);
      list.forEach(q => {
        if (ids.has(q.id)) errs.push('duplicate id ' + q.id); ids.add(q.id);
        if (!Array.isArray(q.options) || q.options.length !== 4) errs.push(q.id + ': needs exactly 4 options');
        if (!/^[ABCD]$/.test(q.answer)) errs.push(q.id + ': invalid answer key');
        if (!q.explanation) errs.push(q.id + ': missing explanation');
      });
    });
    return errs;
  }

  /* answers: array of 'A'|'B'|'C'|'D'|null, same length as questions. Unanswered/invalid count as incorrect. */
  function score(questions, answers) {
    let correct = 0, unanswered = 0; const topics = {};
    questions.forEach((q, i) => {
      const a = answers[i];
      const t = topics[q.topic] || (topics[q.topic] = { correct: 0, total: 0 });
      t.total++;
      if (!/^[ABCD]$/.test(a || '')) { unanswered++; return; }
      if (a === q.answer) { correct++; t.correct++; }
    });
    const total = questions.length;
    return { total, correct, unanswered, incorrect: total - correct, pct: total ? Math.round((correct / total) * 1000) / 10 : 0, topics };
  }

  function summary(pct) {
    if (pct >= 90) return 'Excellent! You are well prepared.';
    if (pct >= 75) return 'Good work. Review the topics below to polish your score.';
    if (pct >= 60) return 'Fair. Study the weak topics and retake the test.';
    return 'Needs more study. Re-read the reviewer, then try again.';
  }

  /* Storage with graceful fallback to memory. */
  const mem = {}; let persistent = true;
  try { localStorage.setItem('__t', '1'); localStorage.removeItem('__t'); } catch (e) { persistent = false; }
  const Store = {
    persistent,
    get(k, d) { try { const v = persistent ? localStorage.getItem(k) : mem[k]; return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { const s = JSON.stringify(v); if (persistent) { try { localStorage.setItem(k, s); return; } catch (e) { persistent = false; Store.persistent = false; } } mem[k] = s; },
    del(k) { try { if (persistent) localStorage.removeItem(k); } catch (e) {} delete mem[k]; },
    attempts() { return this.get('sh_attempts', []); },
    addAttempt(a) { const l = this.attempts(); l.push(a); this.set('sh_attempts', l); },
    reset() { this.del('sh_attempts'); SUBJECTS.forEach(s => this.del('sh_prog_' + s.id)); }
  };

  root.Exam = { SUBJECTS, validateBanks, score, summary, Store };
  if (typeof module !== 'undefined') module.exports = root.Exam;
})(typeof window !== 'undefined' ? window : globalThis);
