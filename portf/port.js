// Theme toggle
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent =
    document.body.classList.contains("dark")
      ? "Switch to Light Theme"
      : "Switch Theme";
});

// Simple contact form feedback
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  msg.textContent = "Thanks for your message! I'll get back to you soon.";
  form.reset();
});
