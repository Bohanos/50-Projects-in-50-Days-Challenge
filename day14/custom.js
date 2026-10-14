// 1. Select DOM elements
const passwordDisplay = document.getElementById("passwordDisplay");
const copyBtn = document.getElementById("copyBtn");
const lengthInput = document.getElementById("lengthInput");

const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");

const generateBtn = document.getElementById("generateBtn");

// Character pools
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// Enforce max length of 30 on keyup/change
lengthInput.addEventListener("input", () => {
  if (parseInt(lengthInput.value) > 30) {
    lengthInput.value = 30;
  }
});

// 2. Generate Password Function
function generatePassword() {
  const length = parseInt(lengthInput.value);

  // Validate length input
  if (!lengthInput.value || isNaN(length) || length <= 0) {
    alert("Please enter a valid password length!");
    return;
  }

  if (length > 30) {
    alert("Password length cannot be more than 30!");
    lengthInput.value = 30;
    return;
  }

  let validChars = "";

  if (uppercaseEl.checked) validChars += upperChars;
  if (lowercaseEl.checked) validChars += lowerChars;
  if (numbersEl.checked) validChars += numberChars;
  if (symbolsEl.checked) validChars += symbolChars;

  if (!validChars) {
    alert("Please select at least one character type!");
    return;
  }

  let generatedPassword = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * validChars.length);
    generatedPassword += validChars[randomIndex];
  }

  passwordDisplay.value = generatedPassword;
}

// 3. Copy to Clipboard Function
function copyToClipboard() {
  if (!passwordDisplay.value) return;

  navigator.clipboard.writeText(passwordDisplay.value);
  alert("Password copied to clipboard!");
}

// 4. Attach event listeners
generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyToClipboard);