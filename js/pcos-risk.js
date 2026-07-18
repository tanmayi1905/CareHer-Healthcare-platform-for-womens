// ================= PCOS QUESTIONS =================
const questions = [
  "Do you have irregular or missed periods?",
  "Do you gain weight easily or find it hard to lose weight?",
  "Do you have acne or excessive facial/body hair growth?",
  "Do you experience hair thinning or hair fall?",
  "Do you crave sugar or junk food often?",
  "Do you experience frequent mood swings or anxiety?",
  "Is there a family history of PCOS?"
];

// ================= FEEDBACK =================
const feedbacks = [
  "🌸 Thank you for sharing",
  "💗 You're doing great",
  "✨ Awareness matters"
];

// ================= VARIABLES =================
let index = 0;
let score = 0;

// ================= ELEMENTS =================
const q = document.getElementById("question");
const bar = document.getElementById("bar");
const level = document.getElementById("levelText");
const feedback = document.getElementById("feedback");
const resultBox = document.getElementById("resultBox");

// ================= LOAD QUESTION =================
console.log("🎯 PCOS Quiz started");
loadQuestion();

function loadQuestion() {
  q.innerText = questions[index];
  level.innerText = `Question ${index + 1} of ${questions.length}`;
  bar.style.width = (index / questions.length) * 100 + "%";

  console.log(`📘 Loaded Question ${index + 1}:`, questions[index]);
}

// ================= ANSWER =================
function answer(val) {
  console.log("📝 Answer selected:", val);

  score += val;
  index++;

  console.log("📊 Current Score:", score);

  feedback.innerText =
    feedbacks[Math.floor(Math.random() * feedbacks.length)];

  index < questions.length ? loadQuestion() : showResult();
}

// ================= SHOW RESULT =================
function showResult() {
  console.log("✅ Quiz completed");

  document.querySelector(".game-options").style.display = "none";
  q.style.display = "none";
  feedback.style.display = "none";
  level.style.display = "none";
  bar.style.width = "100%";

  let title, badge, steps, cls;

  if (score <= 5) {
    title = "🟢 Low PCOS Risk";
    badge = "LOW";
    cls = "low";
    steps = [
      "Maintain a balanced diet",
      "Exercise regularly",
      "Track menstrual cycle"
    ];
  } 
  else if (score <= 10) {
    title = "🟡 Moderate PCOS Risk";
    badge = "MEDIUM";
    cls = "medium";
    steps = [
      "Reduce sugar & refined carbs",
      "Manage stress levels",
      "Improve lifestyle habits"
    ];
  } 
  else {
    title = "🔴 High PCOS Risk";
    badge = "HIGH";
    cls = "high";
    steps = [
      "Consult a gynecologist",
      "Hormonal & metabolic tests",
      "Medical treatment & follow-up"
    ];
  }

  console.log("🧪 Risk Result:", {
    Score: score,
    Risk: badge,
    Title: title
  });

  document.getElementById("resultTitle").innerText = title;
  document.getElementById("scoreText").innerText = `Score: ${score}`;

  const b = document.getElementById("badge");
  b.innerText = badge;
  b.className = cls;

  const s = document.getElementById("steps");
  s.innerHTML = "";
  steps.forEach(step => {
    s.innerHTML += `<li>✔ ${step}</li>`;
  });

  // ================= SAVE RESULT =================
  localStorage.setItem("pcosRisk", badge);
  localStorage.setItem("pcosScore", score);

  console.log("💾 Saved to LocalStorage:", {
    pcosRisk: localStorage.getItem("pcosRisk"),
    pcosScore: localStorage.getItem("pcosScore")
  });

  resultBox.classList.remove("hidden");
}

// ================= NAVIGATION =================
function restartQuiz() {
  console.warn("🔄 Quiz restarted — LocalStorage cleared");
  localStorage.clear();
  location.reload();
}

function openProducts() {
  console.log("🛒 Opening PCOS Products page");
  window.location.href = "C:\Users\aksha\OneDrive\Desktop\ICP-13-html-css-js-github-group-project-3-CareHer-Health-care-platform-for-womens-\pages\pcos-products.html";
}

function openDoctor() {
  console.log("👩‍⚕️ Opening PCOS Doctor page");
  window.location.href = "C:\Users\aksha\OneDrive\Desktop\ICP-13-html-css-js-github-group-project-3-CareHer-Health-care-platform-for-womens-\pages\pcos-doctor.html";
}

function openDiet() {
  console.log("🥗 Opening PCOS Diet & Lifestyle page");
  window.location.href = "C:\Users\aksha\OneDrive\Desktop\ICP-13-html-css-js-github-group-project-3-CareHer-Health-care-platform-for-womens-\pages\pcos-diet-lifestyle.html";
}

// ================= CHATBOT =================
function toggleChat() {
  document.getElementById("chatbot").classList.toggle("hidden");
  console.log("💬 Chatbot toggled");
}

function sendMessage() {
  const input = document.getElementById("chatInput");
  const body = document.getElementById("chatBody");

  if (!input.value.trim()) {
    console.warn("⚠ Empty chat message ignored");
    return;
  }

  console.log("🧑 User message:", input.value);

  body.innerHTML += `<div class="user">${input.value}</div>`;
  input.value = "";

  setTimeout(() => {
    const botMsg =
      "🌸 PCOS can be managed with the right care and lifestyle support. Take care 💗";

    body.innerHTML += `<div class="bot">${botMsg}</div>`;
    console.log("🤖 Bot replied");
  }, 500);
}
