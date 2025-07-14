# 🧪 Custom React Console Renderer

This project demonstrates how to build a **custom React renderer** that outputs JSX elements as **formatted HTML-like structure** directly to the **console**, instead of rendering to the browser DOM.

## 🚀 Features

- Custom `createElement` function (replaces React's default JSX factory)
- Recursive `render()` function that:
  - Supports functional components
  - Handles nested elements
  - Supports fragments (`<>...</>`)
  - Handles arrays of children
  - Pretty indentation for readability

## 🛠 Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- JavaScript (ES6+)

---

## 📦 Installation

```bash
git clone https://github.com/rizeen/skillhive.git
cd skillhive
npm install
npm run dev
```
- Open your browser console to view the structured output.


## 📁 File Structure

```bash
src/
├── App.jsx              # Main application component
├── main.jsx             # Entry point calling custom render()
├── renderer.js          # Custom React renderer logic
└── components/
    └── Nested.jsx       # Example nested component
```


## 🧩 Usage
Example JSX (App.jsx)
```bash
<>
  <div className="container">
    <h1>Hello Custom Renderer</h1>
    <Nested />
    <ul>
      {['One', 'Two', 'Three'].map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
</>

```

## 🧩 Console Output
```bash
<div class="container">
  <h1>
    Hello Custom Renderer
  </h1>
  <section id="nested">
    <p>
      This is a nested component
    </p>
  </section>
  <ul>
    <li>
      One
    </li>
    <li>
      Two
    </li>
    <li>
      Three
    </li>
  </ul>
</div>
```





## ✨ Bonus Features
- ✅ React Fragments (<>...</>)
- ✅ Nested arrays and maps
- ✅ Pretty-printed console output with indentation
- ❌ (Optional) No use of react-dom or browser rendering

## 📌 Notes
Make sure to replace the JSX pragma in each component file:
```bash
/** @jsx createElement */
import { createElement } from './renderer'
```
Do not use ReactDOM or createRoot — this is a console-based renderer.


## 📝 License
MIT License © 2025

