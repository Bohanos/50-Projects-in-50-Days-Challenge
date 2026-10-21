// Base exchange rates relative to 1 USD
const exchangeRates = {
  USD: 1,
  GBP: 0.79,
  NGN: 1600
};

// Currency symbols for output formatting
const currencySymbols = {
  USD: '$',
  GBP: '£',
  NGN: '₦'
};

// DOM Elements
const amountInput = document.getElementById('amount');
const fromSelect = document.getElementById('fromCurrency');
const toSelect = document.getElementById('toCurrency');
const swapBtn = document.getElementById('swapBtn');
const resultText = document.getElementById('resultText');
const rateInfo = document.getElementById('rateInfo');

// Calculation Function
function convertCurrency() {
  const amount = parseFloat(amountInput.value);
  const from = fromSelect.value;
  const to = toSelect.value;

  if (isNaN(amount) || amount < 0) {
    resultText.textContent = "Please enter a valid amount";
    rateInfo.textContent = "";
    return;
  }

  // Calculate rate from base USD rate:
  // (Target Currency Rate / Source Currency Rate)
  const rate = exchangeRates[to] / exchangeRates[from];
  const convertedAmount = (amount * rate).toFixed(2);

  // Update DOM displays
  rateInfo.textContent = `1 ${from} = ${rate.toFixed(4)} ${to}`;
  resultText.textContent = `${currencySymbols[to]} ${convertedAmount} ${to}`;
}

// Swap Function
function swapCurrencies() {
  const temp = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = temp;
  convertCurrency();
}

// Event Listeners
amountInput.addEventListener('input', convertCurrency);
fromSelect.addEventListener('change', convertCurrency);
toSelect.addEventListener('change', convertCurrency);
swapBtn.addEventListener('click', swapCurrencies);

// Initial Calculation on load
convertCurrency();