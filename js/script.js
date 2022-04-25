let menu = document.getElementById("menu");

function mostrarMenu() {
  if (menu.style.display != "flex") {
    menu.style.display = "flex"
  } else {
    menu.style.display = "none"
  }
}

function mostrarPopup() {
  window.alert("Parabens! você ganhou um iphone 12 por ser o usuario 99999999")
}

var email = document.getElementById("campo-email");

function enviarEmail() {
  let emailDigitado = email.value;
  console.log(emailDigitado)
}