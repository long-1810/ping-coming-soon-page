const form = document.getElementById("form");
const submit = document.querySelector("button#submit");

function onSubmit(event) {
  event.preventDefault();
  const email = document.getElementById("email");

  if (!email.value) {
    form.classList.add("form--error")
  } else if (form.classList.contains("form--error")) {
    form.classList.remove("form--error")
  }
}

submit.addEventListener("click", onSubmit)