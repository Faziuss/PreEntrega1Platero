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
  const promptMonedaOrigen =
    "Elige una moneda (Ingresa con los respectivos numeros)\n" + listaMonedas();
  const monedaOrigen = parseInt(prompt(promptMonedaOrigen));
  const origen = monedas.find((moneda, index) => index + 1 === monedaOrigen);
  if (!origen) {
    alert("Moneda invalida");
    convertirMoneda();
  }
  const monedas2 = monedas.filter((moneda, index) => index + 1 != monedaOrigen);
  const promptMonedaDestino =
    "Elige a que moneda convertir (Ingresa con los respectivos numeros)\n" +
    listaMonedas2(monedas2);
  const monedaDestino = parseInt(prompt(promptMonedaDestino));
  const destino = monedas2.find((moneda, index) => index + 1 === monedaDestino);
  console.log("destino", destino);
  if (!destino) {
    alert("Moneda invalida");
    convertirMoneda();
  }
  const promptMonto = "Ingresa un monto";
  const monto = parseFloat(prompt(promptMonto));
  if (isNaN(monto) || monto < 0) {
    alert("Monto Invalido");
    convertirMoneda();
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

  /* switch (entrada) {
    case 1:
      let resultadoUSD;

      const montoUSD = parseFloat(prompt("Ingresa el monto (USD)"));
      if (isNaN(montoUSD)) {
        alert("Monto Invalido!, ingresa un número válido.");
        break;
      }
      const usdAmoneda = parseInt(
        prompt(
          "CONVERSOR DE MONEDAS: Elige la moneda a convertir (Ingresa con los respectivos numeros)\n1. ARS\n2. EURO"
        )
      );

      if (usdAmoneda != 1 && usdAmoneda != 2) {
        alert("Opcion Invalida!");
      } else if (usdAmoneda === 1) {
        resultadoUSD = montoUSD * usdToArs;
        alert(
          `${montoUSD} dolares equivalen a ${resultadoUSD} pesos argentinos`
        );
      } else {
        resultadoUSD = montoUSD * usdToEuro;
        alert(`${montoUSD} dolares equivalen a ${resultadoUSD} euros`);
      }

      break;
    case 2:
      let resultadoARS;

      const montoARS = parseFloat(prompt("Ingresa el monto (ARS)"));
      if (isNaN(montoARS)) {
        alert("Monto Invalido!, ingresa un número válido.");
        break;
      }
      const arsAmoneda = parseInt(
        prompt(
          "CONVERSOR DE MONEDAS: Elige la moneda a convertir (Ingresa con los respectivos numeros)\n1. USD\n2. EURO"
        )
      );

      if (arsAmoneda != 1 && arsAmoneda != 2) {
        alert("Opcion Invalida!");
      } else if (arsAmoneda === 1) {
        resultadoARS = montoARS * arsToUsd;
        alert(
          `${montoARS} pesos argentinos equivalen a ${resultadoARS.toFixed(
            2
          )} dolares`
        );
      } else {
        resultadoARS = montoARS * arsToEuro;
        alert(
          `${montoARS} pesos argentinos equivalen a ${resultadoARS.toFixed(
            2
          )} euros`
        );
      }

      break;
    case 3:
      let resultadoEUR;

      const montoEURO = parseFloat(prompt("Ingresa el monto (EUR)"));
      if (isNaN(montoEURO)) {
        alert("Monto Invalido!, ingresa un número válido.");
        break;
      }

      const euroAmoneda = parseInt(
        prompt(
          "CONVERSOR DE MONEDAS: Elige la moneda a convertir (Ingresa con los respectivos numeros)\n1. USD\n2. ARS"
        )
      );

      if (euroAmoneda != 1 && euroAmoneda != 2) {
        alert("Opcion Invalida!");
      } else if (euroAmoneda === 1) {
        resultadoEUR = montoEuro * euroToUsd;
        alert(
          `${montoEURO} euros equivalen a ${resultadoEUR.toFixed(2)} dolares`
        );
      } else {
        resultadoEUR = montoEURO * euroToArs;
        alert(
          `${montoEURO} euros equivalen a ${resultadoEUR.toFixed(
            2
          )} pesos argentinos`
        );
      }

      break;
    case 4:
      ejecutar = false;
      break;

    default:
      alert("Opcion invalida!");
      break;
  } */
}
