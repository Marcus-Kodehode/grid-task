const form = document.getElementById("newsletter-form");
const emailInput = document.getElementById("email");
const errorMessage = document.querySelector(".error-message");
const successModal = document.querySelector(".success-modal");
const dismissBtn = document.getElementById("dismiss-btn");
const userEmail = document.getElementById("user-email");

// 🎯 E-post validering
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// 📨 Håndter innsending
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Forhindre standard innsending
  const emailValue = emailInput.value.trim();

  if (!validateEmail(emailValue)) {
    // Feil e-post
    emailInput.classList.add("error");
    errorMessage.classList.add("active");
  } else {
    // ✅ Korrekt e-post => Vis suksess-popup
    userEmail.textContent = emailValue;
    successModal.classList.add("active");
    document.querySelector(".signup-card").style.display = "none";
  }
});

// ❌ Lukk suksessmelding
dismissBtn.addEventListener("click", () => {
  successModal.classList.remove("active");
  document.querySelector(".signup-card").style.display = "flex";
  emailInput.value = "";
  emailInput.classList.remove("error");
  errorMessage.classList.remove("active");
});












  