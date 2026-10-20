# 🔍 Day 20 - Search and Filter App

A lightweight and responsive live-search application built with **Vanilla JavaScript**, allowing users to filter through an array of names instantly as they type.

---

## 🚀 Features

* **Real-time Search Input:** Listens to user keystrokes (`input` event) to filter results on the fly without page reloads.
* **Case-Insensitive Matching:** Converts both search queries and list items to lowercase to ensure accurate results regardless of capitalization.
* **Dynamic DOM Rendering:** Clears and rebuilds the `<ul>` element dynamically based on the filtered data set.

---

## 🛠️ Tech Stack

* **Structure:** HTML5 (`<input type="search">` and `<ul>` list elements)
* **Scripting:** Vanilla JavaScript (Array methods like `filter()` and `forEach()`, along with DOM manipulation)

---

## 📁 Project Structure

## 📁 Project Structure

```text
├── day20/
│   ├── index.html     # Search input field and dynamic name list container
│   ├── script.js      # Filter logic and DOM rendering functions
│   └── README.md      # Project documentation
⚙️ Setup & Installation
Clone the repository:

Bash
git clone [https://github.com/Bohanos/50-Projects-in-50-Days-Challenge/tree/main/day20.git](https://github.com/Bohanos/50-Projects-in-50-Days-Challenge/tree/main/day20.git)
cd day20
Run the application:

Open index.html directly in your web browser, or launch it using a local development tool like Live Server in VS Code.

💡 What I Learned
Handling real-time user input events (input) to trigger immediate data filtering.

Using JavaScript's built-in Array.prototype.filter() and String.prototype.includes() methods for string matching.

Dynamically updating the UI by clearing container inner HTML and appending newly created list items.