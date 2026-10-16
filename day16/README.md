# ⏱️ Day 16 - Stopwatch App

A robust, high-precision **Vanilla JavaScript** stopwatch application designed to track elapsed time across multiple tiers—ranging from milliseconds all the way up to decades.

---

## 🚀 Features

* **Multi-Tier Time Tracking:** Comprehensive breakdown displaying Decades, Years, Days, Hours, Minutes, Seconds, and Milliseconds.
* **High-Precision Timing:** Uses real-time timestamp differences (`Date.now()`) to prevent timer drift and ensure absolute accuracy.
* **Interactive Controls:** Smooth **Start**, **Stop**, and **Reset** button actions to manage stopwatch states seamlessly[cite: 5].
* **Responsive Layout:** Includes custom CSS media queries to adapt cleanly across mobile and desktop screens.

---

## 🛠️ Tech Stack

* **Structure:** HTML5 (`<span id="...">` elements combined with clear label formatting)[cite: 5]
* **Styling:** CSS3 (Flexbox layout, gradients, and responsive media queries)[cite: 5]
* **Scripting:** Vanilla JavaScript (`setInterval`, timestamp deltas, and DOM text updates)[cite: 5]

---

## 📁 Project Structure

```text
├── day16/
│   ├── index.html     # Application markup and structure[cite: 5]
│   ├── style.css      # Custom layout and responsive design[cite: 5]
│   └── script.js      # Precision timer logic and DOM mapping
├── README.md
⚙️ Setup & Installation
Clone the repository:

Bash
git clone [https://github.com/Bohanos/50-Projects-in-50-Days-Challenge/tree/main/day16.git](https://github.com/Bohanos/50-Projects-in-50-Days-Challenge/tree/main/day16.git)
cd day16
Run the application:

Open index.html directly in your web browser[cite: 5], or launch it via a local server extension (like Live Server in VS Code).

💡 What I Learned
Managing asynchronous time intervals and preventing timer drift using Date.now().

Selectively targeting text nodes within compound DOM elements to avoid layout shifts.

Building responsive, multi-unit time-formatting algorithms in plain JavaScript.