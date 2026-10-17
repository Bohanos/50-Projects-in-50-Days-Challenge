# 📸 Day 17 - Image Gallery App

A responsive and interactive **Image Gallery** built with **Vanilla JavaScript**, featuring dynamic category filtering, hover effects, and a full-featured lightbox modal with keyboard navigation.

---

## 🚀 Features

* **Category Filtering:** Smoothly filter gallery items by category (All, Nature, Architecture, Animals) with active button states.
* **Responsive CSS Grid:** Automatically adapts image layouts across different screen sizes using modern grid techniques (`auto-fill`, `minmax`).
* **Interactive Lightbox Modal:** Click any image to view it in full size with a dark blur overlay, captions, and previous/next navigation buttons.
* **Keyboard Accessibility:** Seamlessly navigate through the lightbox using the Left/Right arrow keys and close using the Escape key.

---

## 🛠️ Tech Stack

* **Structure:** HTML5
* **Styling:** CSS3 (Flexbox, CSS Grid, hover overlays, and blur backdrop filters)
* **Scripting:** Vanilla JavaScript (`custom.js` handling dynamic element visibility and lightbox state)

---

## 📁 Project Structure

```text
├── day17/
│   ├── index.html     # Application markup and image grid
│   ├── style.css      # Grid layout, animations, and lightbox styling
│   └── custom.js      # Filtering logic and lightbox state management
├── README.md
⚙️ Setup & Installation
Clone the repository:

Bash
git clone [https://github.com/Bohanos/50-Projects-in-50-Days-Challenge/tree/main/day17.git](https://github.com/Bohanos/50-Projects-in-50-Days-Challenge/tree/main/day17.git)
cd day17
Run the application:

Open index.html directly in your web browser, or launch it using a local development tool like Live Server in VS Code.

💡 What I Learned
Implementing dynamic DOM filtering by checking data attributes against button selections.

Building modal overlays with pagination loops (next and prev index handling).

Adding keyboard event listeners (keydown) for a polished, accessible user experience.