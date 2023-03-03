document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  form.addEventListener("submit", (event) => {
    if (!emailInput.value) {
      event.preventDefault();
      alert("Por favor, digite um e-mail válido.");
    }

    if (!passwordInput.value) {
      event.preventDefault();
      alert("Por favor, digite sua senha.");
    }
  });
});
