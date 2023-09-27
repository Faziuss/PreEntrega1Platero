const usdToArs = 349.96;
const usdToEuro = 0.93;
const arsToUsd = 0.0029;
const arsToEuro = 0.0027;
const euroToUsd = 1.07;
const euroToArs = 375.85;

const monedas = [
  {
    name: "USD",
    rate: {
      ARS: 349.96, EURO: 0.0027
    }
  },
  {
    name: "ARS",
    rate: {
      USD: 0.0029, EURO: 0.0027
    }
  },
  {
    name: "EURO",
    rate: {
      USD: 1.07, ARS: 375.85
    }
  }
]


let ejecutar = true;

function conversorMoneda() {
  if (!ejecutar) {
    return;
  }

  const entrada = parseInt(
    prompt(
      "CONVERSOR DE MONEDAS: Elige una moneda (Ingresa con los respectivos numeros)\n1. USD\n2. ARS\n3. EURO\n4. SALIR"
    )
  );

  if (entrada === null || entrada === "") {
    alert("Moneda invalida, elige una moneda valida.");
    moneda1();
    return;
  }

  switch (entrada) {
    case 1:
      let resultadoUSD;

      const montoUSD = parseFloat(prompt("Ingresa el monto (USD)"));
      if (isNaN(montoUSD)) {
        alert("Monto Invalido!, ingresa un número válido.");
        return;
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
        return;
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
        return;
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
      return;

    default:
      alert("Opcion invalida!");
      break;
  }

  conversorMoneda();
}

conversorMoneda();
