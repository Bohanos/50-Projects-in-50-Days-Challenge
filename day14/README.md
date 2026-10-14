# 🔑 Day 14 - Password Generator App

A clean and secure **Vanilla JavaScript** application designed to generate randomized, customizable passwords with length constraints and one-click clipboard copying.

---

## 🚀 Features

* **Custom Length Control:** Numeric input field allowing users to specify a password length up to a maximum of 30 characters.
* **Character Customization:** Toggle checkboxes to include Uppercase letters, Lowercase letters, Numbers, and Symbols.
* **Randomized Generation Logic:** Pulls characters dynamically from selected pools using `Math.random()`.
* **Clipboard Integration:** Instantly copy generated passwords using the modern Clipboard API.

---

## 🛠️ Tech Stack

* **Structure:** HTML5
* **Styling:** CSS3 (Flexbox, custom shadows, and minimalist UI)
* **Scripting:** Vanilla JavaScript (`custom.js`)

---

## 📁 Project Structure

```text
├── day14/
│   ├── index.html     # User interface markup
│   ├── style.css      # Clean styling and layout
│   └── custom.js      # Core generation and copy logic
├── README.md
⚙️ Setup & Installation
Clone the repository:

Bash
git clone [https://github.com/Bohanos/50-Projects-in-50-Days-Challenge/tree/main/day14.git](https://github.com/Bohanos/50-Projects-in-50-Days-Challenge/tree/main/day14.git)
cd day14
Run the application:

Open index.html directly in your preferred web browser, or use a local development server extension (like Live Server in VS Code).

💡 What I Learned
Managing DOM element selection and event listeners in Vanilla JavaScript.

Enforcing strict input validations and maximum boundary limits (capping length at 30).

Working with string manipulation, character sets, and the Clipboard API.