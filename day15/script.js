// 1. Select the form and DOM elements
const form = document.querySelector("form");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const resultContainer = document.querySelector(".result-container");
const resultText = document.getElementById("result");
const statusText = document.querySelector(".status");

// 2. Listen for the submit event on the form
form.addEventListener("submit", function(e) {
  // Prevent page refresh on submit
  e.preventDefault();

  // Parse input values as numbers
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);

  // Validate that inputs are valid numbers greater than zero
  if (!weight || !height || weight <= 0 || height <= 0) {
    alert("Please enter valid weight and height measurements!");
    return;
  }

  // 3. Calculate BMI (Weight in kg / height in meters squared)
  const bmi = weight / (height * height);
  const formattedBmi = bmi.toFixed(1);

  // 4. Determine BMI category status
  let status = "";
  if (bmi < 18.5) {
    status = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    status = "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    status = "Overweight";
  } else {
    status = "Obese";
  }

  // 5. Update the output text content and reveal the hidden result container
  resultText.textContent = `Result: ${formattedBmi}`;
  statusText.textContent = `Status: ${status}`;
  resultContainer.style.display = "block";
});