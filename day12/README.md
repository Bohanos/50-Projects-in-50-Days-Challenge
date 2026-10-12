Markdown
# 📊 Day 12 - Simple Expense Tracker

A minimal, lightweight React application designed to help track daily spending against an initial budget and instantly monitor financial status (OK vs. Critical).

---

## 🚀 Features

* **Initial Budget Setup:** Define and update your starting financial limit dynamically.
* **Expense Logging:** Quickly input and record individual spending amounts.
* **Real-Time Status Indicator:** Automatically computes total spent and remaining balance, flagging warnings when funds drop into a debit/critical state.
* **Clean State Management:** Powered by React's `useState` and array reduction methods.

---

## 🛠️ Tech Stack

* **Frontend:** React.js (Vite)
* **Styling:** Inline CSS / Minimalist Design

---

## 📁 Project Structure

```text
├── src/
│   ├── App.jsx        # Core logic, state management, and UI
│   ├── main.jsx       # Entry point
├── package.json
└── README.md
⚙️ Setup & Installation
Clone the repository:

Bash
git clone [https://github.com/Bohanos/50-Projects-in-50-Days-Challenge/tree/main/day12.git](https://github.com/Bohanos/50-Projects-in-50-Days-Challenge/tree/main/day12.git)
cd day-12-expense-tracker
Install dependencies:

Bash
npm install
Run the development server:

Bash
npm run dev
💡 What I Learned
Deriving state dynamically from arrays using .reduce().

Conditional UI rendering and text styling based on balance calculations (OK vs. Critical alerts).

Simplifying component architecture for clean, maintainable, and readable code.