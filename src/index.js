// Declaração do DOM
const amountInput = document.querySelector("#amount").value;
const fromCurrency = document.querySelector("#from-currency option").value;
const toCurrency = document.querySelector("#to-currency option").value;
const swapCurrency = document.querySelector(".swap-btn");
const convertBtn = document.querySelector(".convert-btn");

// A principio, serão usados valores fixos, com base na cotação do dia 26/09/2025.
const EUR = 6.25;
const USD = 5.35;
const GBP = 7.16;
const JPY = 0.036;
const CAD = 3.83;
