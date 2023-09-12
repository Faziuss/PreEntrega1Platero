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
      break;
    case 2:
      break;
    case 3:
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
