/* const usdToArs = 349.96;
const usdToEuro = 0.93;
const arsToUsd = 0.0029;
const arsToEuro = 0.0027;
const euroToUsd = 1.07;
const euroToArs = 375.85; */

const monedas = [
  {
    name: "USD",
    rate: {
      ARS: 349.96,
      EURO: 0.0027,
    },
  },
  {
    name: "ARS",
    rate: {
      USD: 0.0029,
      EURO: 0.0027,
    },
  },
  {
    name: "EURO",
    rate: {
      USD: 1.07,
      ARS: 375.85,
    },
  },
];

let ejecutar = true;

function convertirMoneda() {
  console.log("OBJETO MONEDAS",monedas);
  const promptMonedaOrigen =
    "Elige una moneda (Ingresa con los respectivos numeros)\n" + listaMonedas();
  const monedaOrigen = parseInt(prompt(promptMonedaOrigen));
  const origen = monedas.find((moneda, index) => index + 1 === monedaOrigen);
  if (!origen) {
    alert("Moneda invalida");
    return;
  }
  console.log("origen", origen);
  const monedas2 = monedas.filter((moneda, index) => index + 1 != monedaOrigen);
  const promptMonedaDestino =
    "Elige a que moneda convertir (Ingresa con los respectivos numeros)\n" +
    listaMonedas2(monedas2);
  const monedaDestino = parseInt(prompt(promptMonedaDestino));
  const destino = monedas2.find((moneda, index) => index + 1 === monedaDestino);
  console.log("destino", destino);
  if (!destino) {
    alert("Moneda invalida");
    return;
  }
  const promptMonto = "Ingresa un monto";
  const monto = parseFloat(prompt(promptMonto));
  if (isNaN(monto) || monto < 0) {
    alert("Monto Invalido");
    return;
  }
  console.log("origen.rate", origen.rate);
  console.log("destino.name", destino.name);
  const tasa = origen.rate[destino.name];
  console.log("tasa", tasa);

  const resultado = monto * tasa;
  alert(
    `${monto} ${origen.name} equivalen a ${resultado.toFixed(2)} ${
      destino.name
    }.`
  );

  function listaMonedas() {
    return monedas
      .map((moneda, index) => `${index + 1}. ${moneda.name}`)
      .join("\n");
  }

  function listaMonedas2(monedas2) {
    return monedas2
      .map((moneda, index) => `${index + 1}. ${moneda.name}`)
      .join("\n");
  }
}

function agregarMoneda(){
  const promptMoneda = prompt("Ingrese el nombre de la nueva moneda:");
  const nameMoneda = promptMoneda.toUpperCase();
  if (!nameMoneda) {
    alert("El nombre de la moneda no puede estar vacío.");
    return;
  }

  const tasas = {}

  monedas.forEach((moneda) => {
    const tasa = parseFloat(prompt(`Ingresa la tasa de conversión de ${nameMoneda} a ${moneda.name}:`));
    if (isNaN(tasa)) {
      alert("Error, Ingresa un numero valido");
      return;
    }
    tasas[moneda.name] = tasa;
    //console.log("FOR EACH MONEDA EN QUE MONEDA ESTOY", moneda);
    moneda.rate[nameMoneda] = 1 / tasa
    //console.log("FOR EACH MONEDA 2", moneda.rate[nameMoneda]);
    //console.log("TEST TASAS",tasas);
  });

  //console.log("tasas nueva moneda", tasas)

  const nuevaMoneda = { name: nameMoneda, rate: tasas };
  monedas.push(nuevaMoneda);

  //console.log("objeto nueva moneda",nuevaMoneda)

  alert(`${nameMoneda} ha sido agregada con éxito.`);
}

while (ejecutar) {
  const textoPrompt =
    "Elige una opcion (Ingresa con los respectivos numeros)\n1. Convertir Monedas\n2. Agregar Moneda\n3. SALIR";
  const entrada = parseInt(prompt(textoPrompt));

  if (entrada === null || entrada === "") {
    alert("Opcion invalida, elige una opcion valida.");
    continue;
  }

  switch (entrada) {
    case 1:
      convertirMoneda();
      break;
    case 2:
      agregarMoneda();
      break;
    case 3:
      alert("Saliendo...");
      ejecutar = false;
      break;
    default:
      alert("Opcion invalida, elige una opcion valida.");
  }
  
}
