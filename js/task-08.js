const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;

  if (!email || !password) {
    alert("Всі поля повинні бути заповнені!");
    return;
  }

  const userData = { email, password };

  console.log(userData);

  loginForm.reset();
});
