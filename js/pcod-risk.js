// ================= PCOD QUESTIONS =================
const questions = [
  "Do you have irregular or delayed periods?",
  "Do you gain weight easily?",
  "Do you have acne or excess facial hair?",
  "Do you experience hair fall?",
  "Do you crave sugar or junk food?",
  "Do you feel mood swings often?",
  "Is there a family history of PCOD?"
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
console.log("🎯 PCOD Quiz started");
loadQuestion();

function loadQuestion() {
  q.innerText = questions[index];
  level.innerText = `Question ${index + 1} of ${questions.length}`;
  bar.style.width = (index / questions.length) * 100 + "%";

  console.log(`📘 Loaded Q${index + 1}:`, questions[index]);
}

// ================= ANSWER =================
function answer(val) {
  console.log("📝 Answer selected. Value:", val);

  score += val;
  index++;

  console.log("📊 Updated Score:", score);

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
    title = "🟢 Low PCOD Risk";
    badge = "LOW";
    cls = "low";
    steps = [
      "Maintain healthy diet",
      "Regular exercise",
      "Track menstrual cycle"
    ];
  } else if (score <= 10) {
    title = "🟡 Moderate PCOD Risk";
    badge = "MEDIUM";
    cls = "medium";
    steps = [
      "Reduce sugar intake",
      "Manage stress",
      "Improve lifestyle habits"
    ];
  } else {
    title = "🔴 High PCOD Risk";
    badge = "HIGH";
    cls = "high";
    steps = [
      "Consult gynecologist",
      "Hormonal tests",
      "Medical treatment & care"
    ];
  }

  console.log("🧪 Risk Analysis:", {
    score,
    badge,
    title
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
  localStorage.setItem("pcodRisk", badge);
  localStorage.setItem("pcodScore", score);

  console.log("💾 Saved to LocalStorage:", {
    pcodRisk: localStorage.getItem("pcodRisk"),
    pcodScore: localStorage.getItem("pcodScore")
  });

  resultBox.classList.remove("hidden");
}

// ================= NAVIGATION =================
function restartQuiz() {
  console.warn("🔄 Quiz restarted – LocalStorage cleared");
  localStorage.clear();
  location.reload();
}

function openProducts() {
  console.log("🛒 Opening PCOD Products page");
  window.location.href = "C:\Users\aksha\OneDrive\Desktop\ICP-13-html-css-js-github-group-project-3-CareHer-Health-care-platform-for-womens-\pages\pcod-products.html";
}

function openDoctor() {
  console.log("👩‍⚕️ Opening Doctor page");
  window.location.href = "C:\Users\aksha\OneDrive\Desktop\ICP-13-html-css-js-github-group-project-3-CareHer-Health-care-platform-for-womens-\pages\pcod-doctor.html";
}

function openDiet() {
  console.log("🥗 Opening Diet & Lifestyle page");
  window.location.href = "C:\Users\aksha\OneDrive\Desktop\ICP-13-html-css-js-github-group-project-3-CareHer-Health-care-platform-for-womens-\pages\pcod-diet-lifestyle.html";
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
    const botMsg = "🌸 PCOD can be managed with the right care. Take care 💗";
    body.innerHTML += `<div class="bot">${botMsg}</div>`;
    console.log("🤖 Bot reply sent");
  }, 500);
}
