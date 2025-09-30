// Lista das moedas e cotações fixas.
const currencies = {
  BRL: {
    USD: 5.39,
    EUR: 6.32,
    GBP: 7.16,
    JPY: 27.77,
    CAD: 3.3,
  },
  USD: {
    EUR: 0.85,
    GBP: 0.74,
    JPY: 147.71,
    CAD: 1.39,
    BRL: 5.39,
  },
  EUR: {
    USD: 1.18,
    GBP: 0.87,
    JPY: 173.65,
    CAD: 1.64,
    BRL: 7.16,
  },
  GBP: {
    USD: 1.35,
    EUR: 1.14,
    JPY: 198.81,
    CAD: 1.87,
    BRL: 7.15,
  },
  JPY: {
    USD: 0.0068,
    EUR: 0.0058,
    GBP: 0.005,
    CAD: 0.0094,
    BRL: 0.036,
  },
  CAD: {
    USD: 0.72,
    EUR: 0.61,
    GBP: 0.53,
    JPY: 106.1,
    BRL: 3.82,
  },
};

// Função pra converter as moedas.
function convertCurrency() {
  const fromCurrency = document.getElementById("from-currency").value;
  const toCurrency = document.getElementById("to-currency").value;
  const amount = document.getElementById("amount").value;

  // Verifica a existencia de um valor no INPUT.
  if (isNaN(amount) || amount <= 0) {
    return;
  }

  // Verifica se as duas moedas selecionadas são iguais
  if (fromCurrency == toCurrency) {
    return (document.querySelector("#conversion-text").textContent =
      "Por favor, selecione duas moedas diferentes");
  }
  // Calcula o valor da moeda selecionada
  const exchange = currencies[fromCurrency][toCurrency];
  const converted = amount * exchange;

  // Formata a moeda de acordo com o pais/moeda.
  const formattedOriginal = formatCurrency(amount, fromCurrency);
  const formattedConverted = formatCurrency(converted, toCurrency);

  // Exibe a data do dia
  const currentDate = new Date();

  // Exibe na tela o resultado
  document.querySelector(
    "#conversion-text"
  ).textContent = `${formattedOriginal} = ${formattedConverted}`;

  document.querySelector(
    "#conversion-details"
  ).innerHTML = `<h3>Taxa de câmbio: 1 ${fromCurrency} = ${exchange.toFixed(
    2
  )} ${toCurrency}</h3>`;

  document.querySelector(
    ".conversion-date"
  ).innerHTML = `<h4>Data do câmbio: ${formatDate(currentDate)}</h4>`;
}
// Botão pra exibir na tela
const convertBtn = document.getElementById("convert-btn");
convertBtn.addEventListener("click", convertCurrency);

// Função pra formatar o código da moeda.
function formatCurrency(value, currencyCode) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: currencyCode,
  }).format(value);
}

// Função pra pegar a data do câmbio
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours());
  const minutes = String(date.getMinutes());

  return `${day}-${month}-${year} - ${hours}:${minutes}`;
};
