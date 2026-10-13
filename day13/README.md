Markdown
# 📝 Day 13 - Simple Notes App

A lightweight, responsive Notes Application built with **React** to practice core CRUD (Create, Read, Delete) operations and array immutability in state management.

---

## 🚀 Features

* **Create Notes:** Instantly add new thoughts or tasks using a clean textarea input form.
* **Dynamic Rendering:** Displays all saved notes in real-time using JavaScript's `.map()` array method.
* **Delete Functionality:** Remove individual notes cleanly by filtering state based on unique IDs (`Date.now()`).
* **Controlled Components:** Smooth state synchronization between user typing and form submission.

---

## 🛠️ Tech Stack

* **Frontend:** React.js (Vite)
* **Styling:** CSS3 (Flexbox, custom shadows, and card styling)

---

## 📁 Project Structure

```text
├── src/
│   ├── App.jsx        # Main note-taking logic, state, and UI components
│   ├── App.css        # Clean layout and card styling
│   ├── main.jsx       # Application entry point
├── package.json
└── README.md
⚙️ Setup & Installation
Clone the repository:

Bash
git clone [https://github.com/Bohanos/50-Projects-in-50-Days-Challenge/tree/main/day13.git](https://github.com/Bohanos/50-Projects-in-50-Days-Challenge/tree/main/day13.git)
cd day13
Install dependencies:

Bash
npm install
Run the development server:

Bash
npm run dev
💡 What I Learned
Managing and updating arrays of objects in React state using the spread operator ([newNote, ...notes]).

Implementing delete actions safely with .filter().

Building controlled forms for text area inputs.