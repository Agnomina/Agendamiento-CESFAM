const formularioIngreso = document.getElementById("formulario-ingreso");
const rutIngreso = document.getElementById("rut");
const claveIngreso = document.getElementById("clave");
const errorIngreso = document.getElementById("error-ingreso");
const botonClave = document.getElementById("boton-clave");

formularioIngreso.addEventListener("submit", function (event) {
  event.preventDefault();

  const rutNormalizado = window.normalizarRutDemo(rutIngreso.value);
  const usuario = window.CESFAM_DEMO_USERS.find(function (cuenta) {
    return window.normalizarRutDemo(cuenta.rut) === rutNormalizado
      && cuenta.password === claveIngreso.value;
  });

  if (!usuario) {
    errorIngreso.hidden = false;
    rutIngreso.setAttribute("aria-invalid", "true");
    claveIngreso.setAttribute("aria-invalid", "true");
    return;
  }

  sessionStorage.setItem("cesfam-demo-user", usuario.rut);
  window.location.assign("portal.html");
});

function limpiarErrorIngreso() {
  errorIngreso.hidden = true;
  rutIngreso.removeAttribute("aria-invalid");
  claveIngreso.removeAttribute("aria-invalid");
}

formularioIngreso.addEventListener("input", limpiarErrorIngreso);
botonClave.addEventListener("click", mostrarClave);

function mostrarClave() {
  const mostrar = claveIngreso.type === "password";
  claveIngreso.type = mostrar ? "text" : "password";
  botonClave.textContent = mostrar ? "Ocultar" : "Mostrar";
  botonClave.setAttribute("aria-label", mostrar ? "Ocultar contraseña" : "Mostrar contraseña");
  botonClave.setAttribute("aria-pressed", String(mostrar));
}
