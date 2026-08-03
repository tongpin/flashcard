// ==========================================
// 1. Web Audio API (Sound Effects)
// ==========================================
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);

  if (type === 'spin') {
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(400, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.08);
  } else if (type === 'flip') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.12);
  }
}

// ==========================================
// 2. Dark / Light Theme Switching
// ==========================================
const themeBtn = document.getElementById('theme-toggle-btn');
const savedTheme = localStorage.getItem('theme') || 'dark';

document.body.setAttribute('data-theme', savedTheme);
updateThemeButton(savedTheme);

themeBtn.addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeButton(newTheme);
});

function updateThemeButton(theme) {
  themeBtn.innerText = theme === 'light' ? '☀️ Light Mode' : '🌙 Dark Mode';
}

// ==========================================
// 3. Progress Tracking System
// ==========================================
const TOTAL_QUESTIONS = 64;
let completedQuestions = JSON.parse(localStorage.getItem('completed_questions')) || [];

function updateProgressUI() {
  const percent = Math.round((completedQuestions.length / TOTAL_QUESTIONS) * 100);
  document.getElementById('progress-fill').style.width = `${percent}%`;
  document.getElementById('progress-percent').innerText = `${percent}%`;
}

function markQuestionAsDone(questionId) {
  if (!completedQuestions.includes(questionId)) {
    completedQuestions.push(questionId);
    localStorage.setItem('completed_questions', JSON.stringify(completedQuestions));
    updateProgressUI();
  }
}

// ==========================================
// 4. Action Handlers (Spin & Flip Interactions)
// ==========================================
const spinBtn = document.getElementById('spin-btn');
const flipBtn = document.getElementById('flip-btn');
const cardText = document.getElementById('card-text');

spinBtn.addEventListener('click', () => {
  playSound('spin');
  const randomQuestionId = Math.floor(Math.random() * TOTAL_QUESTIONS) + 1;
  cardText.innerText = `សំណួរទី ${randomQuestionId}: (សូមឆ្លើយសំណួរនេះ...)`;
  
  // កត់ត្រាចូលក្នុង Progress
  markQuestionAsDone(randomQuestionId);
});

flipBtn.addEventListener('click', () => {
  playSound('flip');
  cardText.innerText = "ចម្លើយកំពុងបង្ហាញ...";
});

// Initial load for progress
updateProgressUI();
