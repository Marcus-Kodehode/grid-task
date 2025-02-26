document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("newsletter-form");
  const emailInput = document.getElementById("email");
  const errorMessage = document.querySelector(".error-message");
  const successModal = document.getElementById("success-modal");
  const dismissBtn = document.getElementById("dismiss-btn");

  // ✅ Egendefinert e-post validering
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // 🚫 Stopper standard validering

    const email = emailInput.value.trim();

    if (email === "" || !isValidEmail(email)) {
      showError("Valid email required"); // 🚨 Feilmelding vises
    } else {
      showSuccess(); // 🎉 Suksessmodal
    }
  });

  const showError = (message) => {
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
    emailInput.classList.add("error");
  };

  const showSuccess = () => {
    errorMessage.style.display = "none";
    emailInput.classList.remove("error");
    successModal.classList.remove("hidden");
  };

  dismissBtn.addEventListener("click", () => {
    successModal.classList.add("hidden");
    form.reset();
    errorMessage.style.display = "none";
    emailInput.classList.remove("error");
  });

  // 🔄 Oppdater feilmelding dynamisk
  emailInput.addEventListener("input", () => {
    if (isValidEmail(emailInput.value.trim())) {
      errorMessage.style.display = "none";
      emailInput.classList.remove("error");
    }
  });
});







  