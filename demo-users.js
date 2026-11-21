window.CESFAM_DEMO_USERS = Object.freeze([
  Object.freeze({ rut: "5.173.842-0", password: "5173842", name: "Rosa Elena Muñoz" }),
  Object.freeze({ rut: "6.289.415-0", password: "6289415", name: "Luis Alberto Rojas" }),
  Object.freeze({ rut: "4.856.273-0", password: "4856273", name: "Teresa González" }),
  Object.freeze({ rut: "5.942.617-0", password: "5942617", name: "Pedro Fuentes" })
]);

window.normalizarRutDemo = function (rut) {
  return String(rut).trim().toUpperCase().replace(/[\s.-]/g, "");
};
