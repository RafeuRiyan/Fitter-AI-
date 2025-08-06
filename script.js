// script.js

// Simple interactivity for FAQ toggles (optional)
document.querySelectorAll("details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    console.log(`Toggled FAQ: ${detail.querySelector("summary").innerText}`);
  });
});
