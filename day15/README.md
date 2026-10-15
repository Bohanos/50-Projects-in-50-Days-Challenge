# ⚖️ Day 15 - BMI Calculator

A lightweight, responsive Body Mass Index (BMI) calculator built with **Vanilla JavaScript**, HTML5, and CSS3. It computes standard metric health metrics and dynamically categorizes user results based on World Health Organization (WHO) clinical thresholds.

---

## 🚀 Features

* **Metric Calculations:** Computes BMI accurately using weight in kilograms and height in meters.
* **Input Validation & Constraints:** Enforces proper numeric bounds, supporting decimal height increments (e.g., meters) via input step configurations.
* **Dynamic Results Display:** Keeps result outputs hidden initially (`display: none`) and reveals them smoothly upon valid calculation submission.
* **Clinical Categorization:** Automatically evaluates BMI scores into standard categories: Underweight, Normal weight, Overweight, or Obese.

---

## 🛠️ Tech Stack

* **Structure:** HTML5
* **Styling:** CSS3 (Flexbox, centered layout design)
* **Scripting:** Vanilla JavaScript (DOM manipulation, form event prevention, and mathematical evaluation)

---

## 📁 Project Structure

```text
├── day15/
│   ├── index.html     # Application markup and structure
│   ├── style.css      # Minimalist layout and styling
│   └── script.js      # BMI logic, validation, and DOM rendering
├── README.md
⚙️ Setup & Installation
Clone the repository:

Bash
git clone [https://github.com/Bohanos/50-Projects-in-50-Days-Challenge/tree/main/day15.git](https://github.com/Bohanos/50-Projects-in-50-Days-Challenge/tree/main/day15.git)
cd day15
Run the application:

Open index.html directly in your web browser, or launch it using a local development tool like Live Server in VS Code.

💡 What I Learned
Managing form submissions and preventing default page refreshes using e.preventDefault().

Handling decimal inputs and validation steps for height and weight measurements.

Implementing real-world health algorithms and conditional status rendering in plain JavaScript.