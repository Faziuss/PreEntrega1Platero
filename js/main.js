const $input1 = document.getElementById("input1");
const $input2 = document.getElementById("input2");
const $select1 = document.getElementById("select1");
const $select2 = document.getElementById("select2");
const $openModal = document.getElementById("openModal");
const $modal = document.getElementById("modal");
const $closeModal = document.getElementById("closeModal");
const $modalForm = document.getElementById("modalForm");
const $ratesContainer = document.getElementById("ratesContainer");
const $formInputName = document.getElementById("name")

let currencies = JSON.parse(localStorage.getItem("currencies")) || [];

const main = async () => {
  if (!currencies.length) {
    try {
      const res = await fetch("../data.json");
      const data = await res.json();
      currencies = data.products;
    } catch (error) {
      console.log(error);
    }
  }
  generateCurrencyTable();
  loadSelects();
  loadRatesInputs()
};

const loadRatesInputs = () => {
  currencies.forEach((currency) => {
    addRateInput(currency.name);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  main();
});

const updateFirstInput = (newValue) => {
  const currency2 = $select2.value;
  const moneda = currencies.find((moneda) => {
    return moneda.name === currency2;
  });
  const currency1 = $select1.value;

  if (currency1 === currency2) {
    $input1.value = newValue;
  } else {
    $input1.value = newValue * moneda.rate[currency1];
  }
};

const updateSecondInput = (newValue) => {
  const currency1 = $select1.value;
  const moneda = currencies.find((moneda) => {
    return moneda.name === currency1;
  });
  const currency2 = $select2.value;

  if (currency1 === currency2) {
    $input2.value = newValue;
  } else {
    $input2.value = newValue * moneda.rate[currency2];
  }
};

$input1.addEventListener("input", (e) => {
  updateSecondInput(e.target.value);
});

$input2.addEventListener("input", (e) => {
  updateFirstInput(e.target.value);
});

$select1.addEventListener("change", () => {
  updateSecondInput($input1.value);
});

$select2.addEventListener("change", () => {
  updateSecondInput($input2.value);
});

$formInputName.addEventListener("input", (e) => {
  $formInputName.value = e.target.value.trim()  
})

function loadSelects() {
  for (const currency of currencies) {
    const $newOption = document.createElement("option");
    $newOption.value = currency.name;
    $newOption.textContent = currency.name;
    const $clonedOption = $newOption.cloneNode(true);
    $select1.appendChild($newOption);
    $select2.appendChild($clonedOption);
  }
}

function generateCurrencyTable() {
  const currencyTableDiv = document.getElementById("currencyTable");
  const table = document.createElement("table");
  table.classList.add("currency-table");

  const tableHeader = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const headerName = document.createElement("th");
  headerName.textContent = "Moneda";
  headerRow.appendChild(headerName);

  for (const currency of currencies) {
    const headerRate = document.createElement("th");
    headerRate.textContent = currency.name;
    headerRow.appendChild(headerRate);
  }

  tableHeader.appendChild(headerRow);
  table.appendChild(tableHeader);

  const tableBody = document.createElement("tbody");

  for (const currency of currencies) {
    const row = document.createElement("tr");
    row.id = `row${currency.name}`;
    const currencyNameCell = document.createElement("td");
    currencyNameCell.textContent = currency.name;
    row.appendChild(currencyNameCell);

    for (const otherCurrency of currencies) {
      const rateCell = document.createElement("td");
      rateCell.textContent = currency.rate[otherCurrency.name];
      row.appendChild(rateCell);
    }

    tableBody.appendChild(row);
  }

  table.appendChild(tableBody);
  currencyTableDiv.innerHTML = "";
  currencyTableDiv.appendChild(table);
}

$openModal.addEventListener("click", () => {
  $modal.style.display = "block";
});

$closeModal.addEventListener("click", () => {
  $modal.style.display = "none";
});

function addRateInput(currencyName) {
  const $fragment = document.createDocumentFragment()
  const $template = document.getElementById("ratesTemplate").content
  $template.querySelector("label").textContent = currencyName
  $template.querySelector("input").name = currencyName
  const $clone = document.importNode($template, true)
  $fragment.appendChild($clone)
  $ratesContainer.appendChild($fragment)
}

function insertOption(newCurrency) {
  const $newOption = document.createElement("option");
  $newOption.value = newCurrency.name;
  $newOption.textContent = newCurrency.name;

  const $clonedOption = $newOption.cloneNode(true);

  $select1.appendChild($newOption);
  $select2.appendChild($clonedOption);
}

const resetForm = () => {
  const $inputs = $modal.getElementsByTagName("input")
  for (const $input of $inputs) {
    // clears every input value except for inputs of type submit
    if($input.type !== "submit"){
      $input.value = "";
    }
  }
}

$modalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newCurrency = { name: "", rate: {} };

  const currencyName = document.getElementById("name").value;
  newCurrency.name = currencyName.toUpperCase();

  const inputElements = $ratesContainer.querySelectorAll("input");
  inputElements.forEach((input, index) => {
    const value = Number(input.value);
    newCurrency.rate[input.name] = value;
    currencies[index].rate[newCurrency.name] = 1 / value;
  });

  insertOption(newCurrency);
  addRateInput(currencyName)

  const column = document.createElement("th");
  column.textContent = newCurrency.name;
  const $headerRow = document.querySelector("thead tr");
  $headerRow.appendChild(column);

  currencies.forEach((c) => {
    const data = document.createElement("td");
    data.textContent = c.rate[newCurrency.name];
    console.log("c.name is ", c.name);
    const $row = document.querySelector(`#row${c.name}`);
    $row.appendChild(data);
  });

  currencies.push(newCurrency);

  const $tbody = document.querySelector("tbody");
  const $newBodyRow = document.createElement("tr");
  $newBodyRow.id = `row${newCurrency.name}`
  const $tdName = document.createElement("td");
  $tdName.textContent = newCurrency.name;
  $newBodyRow.appendChild($tdName);

  for (const currency of currencies) {
    if (!currency.name !== newCurrency.name) {
      const $td = document.createElement("td");
      $td.textContent = newCurrency.rate[currency.name];
      $newBodyRow.appendChild($td);
    }
  }

  $tbody.appendChild($newBodyRow);

  localStorage.setItem("currencies", JSON.stringify(currencies));
  $modal.style.display = "none";
  resetForm()

  Toastify({

    text: "Moneda Agregada con Exito",
    
    duration: 3000
    
    }).showToast();
});
