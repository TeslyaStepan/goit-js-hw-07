const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === "" || password === "") {
    return console.log(`All form fields must be filled in`);
  } else {
    console.log(`Email: ${email}, Password: ${password}`);
    form.reset();
  }
});
