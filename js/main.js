const $input1 = document.getElementById("input1")
const $input2 = document.getElementById("input2")
const $select1 = document.getElementById("select1")
const $select2 = document.getElementById("select2")

// 
const data = [
    {name: "USD", rate: {ARS: 349.96, EURO: 0.0027}},
    {name: "ARS", rate: {USD:1/349.96, EURO: 0.0027}},
    {name: "EURO", rate: {ARS: 375.85, USD: 1.07}}
]

//
let currencies = JSON.parse(localStorage.getItem('currencies')) || []

//
const main = () => {
  if(!currencies.length){
    localStorage.setItem("currencies", JSON.stringify(data))
    currencies = data
  }
}

main()

const updateFirstInput = (newValue) => {
    const currency2 = $select2.value
    const moneda = currencies.find((moneda)=>{return moneda.name === currency2})
    const currency1 = $select1.value

    if(currency1===currency2){
        $input1.value = newValue
    } else {
        $input1.value = newValue * moneda.rate[currency1]
    }
}

const updateSecondInput = (newValue) => {
    const currency1 = $select1.value
    const moneda = currencies.find((moneda)=>{return moneda.name === currency1})
    const currency2 = $select2.value

    if(currency1===currency2){
        $input2.value = newValue
    } else {
        $input2.value = newValue * moneda.rate[currency2]
    }
}

$input1.addEventListener("input", (e)=>{
    updateSecondInput(e.target.value)
})

$input2.addEventListener("input", (e)=>{
    updateFirstInput(e.target.value)
})

$select1.addEventListener("change", () => {
    updateSecondInput($input1.value)
})

$select2.addEventListener("change", () => {
    updateSecondInput($input2.value)
})

function generateCurrencyTable() {
  const currencyTableDiv = document.getElementById('currencyTable');
  const table = document.createElement('table');
  table.classList.add('currency-table');

  const tableHeader = document.createElement('thead');
  const headerRow = document.createElement('tr');
  const headerName = document.createElement('th');
  headerName.textContent = "Moneda";
  headerRow.appendChild(headerName);

  for (const currency of currencies) {
      const headerRate = document.createElement('th');
      headerRate.textContent = currency.name;
      headerRow.appendChild(headerRate);
  }

  tableHeader.appendChild(headerRow);
  table.appendChild(tableHeader);

  const tableBody = document.createElement('tbody');

  for (const currency of currencies) {
      const row = document.createElement('tr');
      const currencyNameCell = document.createElement('td');
      currencyNameCell.textContent = currency.name;
      row.appendChild(currencyNameCell);

      for (const otherCurrency of currencies) {
          const rateCell = document.createElement('td');
          rateCell.textContent = currency.rate[otherCurrency.name];
          row.appendChild(rateCell);
      }

      tableBody.appendChild(row);
  }

  table.appendChild(tableBody);
  currencyTableDiv.innerHTML = ''; 
  currencyTableDiv.appendChild(table);
}

document.addEventListener("DOMContentLoaded", generateCurrencyTable);



/* let ejecutar = true;

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

function convertirMoneda() {
  const promptMonedaOrigen = prompt(
    "Elige una moneda (Ingresa con los respectivos numeros)\n" + listaMonedas()
  );
  const monedaOrigen = parseInt(promptMonedaOrigen);
  const origen = monedas.find((moneda, index) => index + 1 === monedaOrigen);

  if (!origen) {
    alert("Moneda invalida");
    return;
  }

  const monedas2 = monedas.filter((moneda, index) => index + 1 != monedaOrigen);
  const promptMonedaDestino = prompt(
    "Elige a que moneda convertir (Ingresa con los respectivos numeros)\n" +
      listaMonedas2(monedas2)
  );
  const monedaDestino = parseInt(promptMonedaDestino);
  const destino = monedas2.find((moneda, index) => index + 1 === monedaDestino);

  if (!destino) {
    alert("Moneda invalida");
    return;
  }
  const promptMonto = prompt("Ingresa un monto");
  const monto = parseFloat(promptMonto);
  if (isNaN(monto) || monto < 0) {
    alert("Monto Invalido");
    return;
  }
  const tasa = origen.rate[destino.name];

  const resultado = monto * tasa;
  alert(
    `${monto} ${origen.name} equivalen a ${resultado.toFixed(2)} ${
      destino.name
    }.`
  );
}

function agregarMoneda() {
  const promptMoneda = prompt("Ingrese el nombre de la nueva moneda:");
  const nameMoneda = promptMoneda.toUpperCase();
  if (!nameMoneda) {
    alert("El nombre de la moneda no puede estar vacío.");
    return;
  }

  const tasas = {};

  monedas.forEach((moneda) => {
    const tasa = prompt(
      `Ingresa la tasa de conversión de ${nameMoneda} a ${moneda.name}:`
    );
    const parsedTasa = parseFloat(tasa);
    if (isNaN(parsedTasa)) {
      alert("Error, Ingresa un numero valido");
      return;
    }
    tasas[moneda.name] = parsedTasa;
    moneda.rate[nameMoneda] = 1 / parsedTasa;
  });

  const nuevaMoneda = { name: nameMoneda, rate: tasas };
  monedas.push(nuevaMoneda);

  alert(`${nameMoneda} ha sido agregada con éxito.`);
}

while (ejecutar) {
  const textoPrompt = prompt(
    "Elige una opcion (Ingresa con los respectivos numeros)\n1. Convertir Monedas\n2. Agregar Moneda\n3. SALIR"
  );
  const entrada = parseInt(textoPrompt);

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
      alert("Saliste del Conversor de Monedas.");
      ejecutar = false;
      break;
    default:
      alert("Opcion invalida, elige una opcion valida.");
  }
} */