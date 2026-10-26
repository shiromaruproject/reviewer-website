# StudyHub – Reviewer & Practice Exam Website

Plain HTML, CSS and vanilla JavaScript. No server, framework, API key or internet needed.

## Run
Open `index.html` in a modern browser (double-click it). Progress is saved in the browser's LocalStorage.
If storage is blocked (e.g. private mode) a banner explains that scores will not persist.

## Files
- `index.html` – page shell and dialog.
- `css/style.css` – design (dark green/white, light + dark mode, responsive).
- `js/reviewers.js` – **reviewer content** (converted from your files; wording unchanged).
- `js/questions.js` – **question banks** (4 x 60). Fields: id, type, topic, source, difficulty, question, options[4], answer (A-D), explanation.
- `js/exam.js` – validation, scoring, LocalStorage wrapper (no DOM).
- `js/app.js` – dashboard, reviewer (TOC, search, font size, reading progress), exam, results, history.
- `tools/` – optional scripts used to build the data files (needs Node / Python).

## Add or edit questions
Easiest: edit `js/questions.js` directly. Keep exactly 4 options, `answer` = "A"/"B"/"C"/"D", unique `id`, and an explanation. The app validates all banks on load (60 per subject) and shows a warning if something is wrong.
Alternative: edit `tools/bank/*.js` (correct answer first, then 3 wrong ones), then run `node tools/build_questions.js` – it validates and re-shuffles answer positions.

## Reset progress
Dashboard -> "Reset saved progress" (asks for confirmation). In-progress tests resume via "Resume Test".

## Source notes (important)
- `datastrucreviewer.pdf` ends after Part 2 although its contents list Parts 3-4. `purpcomrev.pdf` ends at section 4.8 although it lists Parts 5-7. Nothing was invented; a notice is shown on those reviewer pages.
- Some DS questions (Week 15 expression trees/efficiency/AVL, Stack-vs-Queue exercise) and PurpCom questions (workplace lesson, purposive writing/email notes, graded quiz notes) are based on the original slide/notes files; each question shows its source in the results review.
