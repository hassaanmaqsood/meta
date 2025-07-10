# META

> **M.E.T.A.** — _Modular Editor for Textual Adaptation_

A tiny, powerful web editor designed with one mission: **to give ESP32/ESP8266-based devices a simple, extendable, and no-BS terminal experience** — right in the browser.

META isn't trying to be the next VSCode. It's not bloated. It's not trying to impress you with features you’ll never use. It’s a minimal, modular editor that does what you need: editing, selection, cursor movement, and styling — and it does it fast.

---

## 🧠 Why META?

I built META while working on a web terminal interface for ESP32/ESP8266 boards — something that could live inside a microcontroller, be served over Wi-Fi, and still feel like a real editor.

The goals:

- 🪶 **Lightweight** – Fits in microcontrollers with minimal overhead.
- ⚙️ **Functional** – Insert, delete, format, move the cursor — everything you expect, nothing more.
- 🧩 **Modular** – Easy to extend for terminals, code views, or dynamic interfaces.
- 🧼 **Clean Code** – No frameworks. Vanilla JS. Fully hackable.
- 📦 **Portable** – Drop it in any project, no build steps required.

---

## ⚡ Features

- Character-by-character editing using `<span>` nodes
- Cursor tracking and movement
- Selection-aware editing (Backspace/Delete)
- Helper methods to convert between text and HTML
- Designed to integrate into terminal interfaces or live-updating UIs

---

## 🧰 Use Cases

- 🔌 A browser-based **serial/web terminal** for ESP32, ESP8266, etc.
- 🛠️ Inline editors for config panels or dashboards
- 🧪 Sandbox for tiny in-browser experiments
- 🧠 Base layer for custom editors in low-resource environments

---

## 🚀 Quick Start

1. Drop the `meta.js` and CSS into your project.
2. Create an editable container in your HTML:

```html
<div id="editor" class="editor" contenteditable="true"></div>
````

3. Initialize the editor script (already runs on page load):

```html
<script src="meta.js"></script>
```

That’s it. No bundlers. No dependencies. Just good old-fashioned JavaScript.

---

## 🧩 What's Next

The next project built on top of META is a **full web terminal** — think bash-lite, but for microcontrollers.

META will be the editing core of that terminal — lightweight, flexible, and dependable.

---

## 🛠️ Development Notes

* Written in plain JavaScript (ES6+), no build tools needed.
* Editor logic is decoupled enough to reuse/extend without a rewrite.
* Text is stored and rendered via `<span>` elements to keep character control tight.

---

## ✨ Philosophy

> *Good enough to get the job done. Light enough to get out of the way.*

This isn’t another “framework”. META is what Stark would’ve built for his suit’s terminal — efficient, extendable, and invisible until you need it.

---

## 📂 Files

| File                     | Purpose                                     |
| ------------------------ | ------------------------------------------- |
| `meta.js`                | Core editor logic                           |
| `style.css` *(optional)* | Basic styling (you can skip or override it) |

---

## 🤖 Created By

Built by [Hassaan Maqsood](https://github.com/hassaanmaqsood) as part of a larger mission to make development tools for embedded systems that don’t suck.

---
