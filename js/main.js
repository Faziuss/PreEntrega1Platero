const usdaARS = 349.96;
const usdaEURO = 0.93;
const arsaUSD = 0.0029;
const arsaEURO = 0.0027;
const euroaUSD = 1.07;
const euroaARS = 375.85;

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
        resultadoUSD = montoUSD * usdaARS;
        alert(
          `${montoUSD} dolares equivalen a ${resultadoUSD} pesos argentinos`
        );
      } else {
        resultadoUSD = montoUSD * usdaEURO;
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
        resultadoARS = montoARS * arsaUSD;
        alert(
          `${montoARS} pesos argentinos equivalen a ${resultadoARS.toFixed(
            2
          )} dolares`
        );
      } else {
        resultadoARS = montoARS * arsaEURO;
        alert(
          `${montoARS} pesos argentinos equivalen a ${resultadoARS.toFixed(
            2
          )} euros`
        );
      }

      break;
    case 3:
      const montoEURO = parseFloat(prompt("Ingresa el monto (EUR)"));

      const euroAmoneda = parseInt(
        prompt(
          "CONVERSOR DE MONEDAS: Elige la moneda a convertir (Ingresa con los respectivos numeros)\n1. USD\n2. ARS"
        )
      );

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
