const usdaARS = 349.96;
const usdaEURO = 0.93;
const arsaUSD = 0.0029;
const arsaEURO = 0.0027;
const euroaUSD = 1.07;
const euroaARS = 375.85;

let ejecutar = true;

function conversorMoneda() {
    if(!ejecutar){
        return;
    }

  let entrada = parseInt(
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
        let usdAmoneda = parseInt(
            prompt(
              "CONVERSOR DE MONEDAS: Elige la moneda a convertir (Ingresa con los respectivos numeros)\n1. ARS\n2. EURO\n3. SALIR"
            )
          );
        
      break;
    case 2:
        let arsAmoneda = parseInt(
            prompt(
              "CONVERSOR DE MONEDAS: Elige la moneda a convertir (Ingresa con los respectivos numeros)\n1. USD\n2. EURO\n3. SALIR"
            )
          );
        
      break;
    case 3:
        let euroAmoneda = parseInt(
            prompt(
              "CONVERSOR DE MONEDAS: Elige la moneda a convertir (Ingresa con los respectivos numeros)\n1. USD\n2. ARS\n3. SALIR"
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
