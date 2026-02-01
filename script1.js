/* Typing Effect */
const textArray = [
  "Student at Aditya University",
  "Data Science Enthusiast",
  "Web Developer"
];

let index = 0;
let char = 0;
const typingEl = document.querySelector(".typing-text");

function typeEffect() {
  if (char < textArray[index].length) {
    typingEl.textContent += textArray[index].charAt(char);
    char++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(() => {
      typingEl.textContent = "";
      char = 0;
      index = (index + 1) % textArray.length;
      typeEffect();
    }, 1500);
  }
}
typeEffect();

/* Rain Effect (full image) */
const canvas = document.getElementById("rain-canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
resizeCanvas();

const drops = Array.from({ length: 150 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  speed: 4 + Math.random() * 4,
  length: 12 + Math.random() * 18
}));

function rain() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "rgba(94,234,212,0.6)";
  ctx.lineWidth = 1;

  drops.forEach(d => {
    ctx.beginPath();
    ctx.moveTo(d.x, d.y);
    ctx.lineTo(d.x, d.y + d.length);
    ctx.stroke();

    d.y += d.speed;
    if (d.y > canvas.height) {
      d.y = -20;
      d.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(rain);
}
rain();
