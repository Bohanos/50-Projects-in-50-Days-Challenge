💱 Day 19 - Currency Converter

A lightweight, interactive currency conversion application built with Vanilla JavaScript, HTML5, and CSS3. It enables users to convert values between US Dollars (USD), British Pounds (GBP), and Nigerian Naira (NGN) instantly.

🚀 Features

Real-time Conversion: Updates values dynamically as users type or change selected currencies using input and change event listeners.

Instant Currency Swap: Quick-swap button that toggles source and target currencies effortlessly.

Base Rate Calculation: Converts currency pairs relative to a base rate object without external API calls.

Responsive Card UI: Styled with flexbox, clean inputs, and interactive hover states.

🛠️ Tech Stack

Structure: HTML5 (<select>, <input type="number">)

Styling: Custom CSS3 (Flexbox layout, responsive card design)

Scripting: Vanilla JavaScript (DOM manipulation, event listeners, math operations)

📁 Project Structure

├── day19/
│   ├── index.html     # Application structure and layout
│   ├── style.css      # Card layout and component styling
│   ├── script.js       # Conversion logic and DOM interaction
│   └── README.md      # Project documentation


⚙️ Setup & Usage

Open the Project:
Open index.html directly in any standard web browser or launch it using VS Code's Live Server.

Convert Currencies:
Enter an amount and select your preferred source ("From") and target ("To") currencies.

💡 What I Learned

Managing multi-directional currency conversion mathematics relative to a base currency.

Handling form inputs and select element changes dynamically using JavaScript listeners.

Structuring interactive visual feedback with pure CSS transitions.