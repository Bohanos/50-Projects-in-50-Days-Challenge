Markdown
# 📝 Day 18 - Form Validation System (HTML5 Native)

A clean and efficient account registration form utilizing **HTML5 built-in validation attributes** to enforce data integrity and manage browser error feedback natively without external JavaScript scripts.

---

## 🚀 Features

* **Required Fields:** Ensures crucial inputs cannot be left blank using the `required` attribute.
* **Format Checking:** Automatically validates standard email formats using `type="email"`.
* **Length Constraints:** Restricts usernames and passwords to precise character bounds using `minlength` and `maxlength`.
* **Numeric Boundaries:** Enforces age limits (`min="18"`, `max="99"`) using native number inputs.
* **Custom Regex Patterns:** Uses the `pattern` attribute combined with a descriptive `title` tooltip to enforce secure password rules (letters and numbers).
* **Native Browser Feedback:** Relies on the browser's built-in tooltips and error prompts to guide users instantly.

---

## 🛠️ Tech Stack

* **Structure:** HTML5 (semantic form elements and native validation constraints)

---

## 📁 Project Structure

```text
├── day18/
│   ├── index.html     # Registration form with native HTML5 validation attributes
│   ├── style.css      # Simple layout and reset styling
│   └── README.md      # Project documentation
⚙️ Setup & Installation
Clone the repository:

Bash
git clone [https://github.com/Bohanos/50-Projects-in-50-Days-Challenge/tree/main/day18.git](https://github.com/Bohanos/50-Projects-in-50-Days-Challenge/tree/main/day18.git)
cd day18
Run the application:

Open index.html directly in your web browser, or launch it using a local development server like Live Server in VS Code.

💡 What I Learned
Leveraging HTML5 constraint validation attributes to handle data checks natively.

Writing Regular Expression (pattern) rules to enforce specific text formatting rules.

Understanding how browsers handle error tooltips and submission blocking automatically.