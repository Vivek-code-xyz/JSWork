# 🧰 JS Toolkit — Reusable Web Dev Utilities

> A growing personal library of clean, reusable, production-quality JavaScript & React utilities — hooks, functions, and components — built one well-crafted piece at a time.

![Status](https://img.shields.io/badge/status-actively%20growing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Made with](https://img.shields.io/badge/made%20with-JavaScript%20%7C%20React-yellow)

---

## ✨ What This Is

This isn't a one-off project — it's an evolving toolkit built incrementally, function by function, with a focus on **quality over quantity**. Every utility here is:

- ✅ **Reusable** — configurable via params/props, not hardcoded to one use case
- 📝 **Documented** — JSDoc on every export (params, return shape, purpose)
- 🎯 **Intentional** — built with edge cases and idiomatic patterns in mind, not just "made it work once"
- 🧩 **Organized by domain** — grouped by what it *does*, not when it was written

No folder exists until its first utility is built — this README grows alongside the code.

---

## 📁 What's Inside

<!-- 
  Add a row here each time a new domain folder is created.
  Keep descriptions to one line.
-->

| Folder | Contents | Status |
|--------|----------|--------|
| *(none yet)* | *(first utility coming soon)* | 🌱 |

---

## 📦 Folder Deep-Dive

<!-- 
  Add a subsection per folder once it exists. Template below — 
  duplicate this block for each new domain.
-->

<!--
### `folder-name/`
Brief description of what this domain covers.

| File | Exports | Description |
|------|---------|--------------|
| `useSomething.js` | `useSomething` | One-line description |

```js
import { useSomething } from './folder-name';
```
-->

---

## 🛠️ Conventions

- **Naming:** `useX` for hooks · `PascalCase` for components · `camelCase` for plain functions
- **Exports:** every folder has an `index.js` re-exporting its contents for clean imports
- **Docs:** every function/component includes JSDoc — description, `@param`, `@returns`
- **Design philosophy:** built incrementally — a function may take multiple sessions to reach its final, polished form

```js
// Example import pattern once folders exist:
import { useCart, useCartTotals } from './cart';
import { useToasts } from './toasts';
```

---

## 🗺️ Roadmap / Backlog

<!-- Loose ideas for future utilities — not commitments, just a running list -->

<details>
<summary><strong>🛒 Cart</strong></summary>

- `useCart` — add/remove items
- `useCartTotals` — derived subtotal, item count, discount logic

</details>

<details>
<summary><strong>🔔 Toasts / Notifications</strong></summary>

- `useToasts` — add/dismiss
- `useAutoDismissToasts` — timed auto-removal
- `useQueuedToasts` — max-visible queue with promotion

</details>

<details>
<summary><strong>🔍 Search / Filtering</strong></summary>

- `useFilteredList` — live filtering
- `useAutocomplete` — filter + keyboard nav + selection
- `useDebouncedSearch` — debounce + async + stale-response cancellation

</details>

<details>
<summary><strong>📝 Forms</strong></summary>

- `useFieldValidation` — generic field-level validation
- `useSignupForm` — multi-field composed validation

</details>

<details>
<summary><strong>📊 Tables / Pagination</strong></summary>

- `useSortableTable` — column sort toggling
- `useSortedPagination` — sort + page slicing combined

</details>

<details>
<summary><strong>🧩 Generic Hooks</strong></summary>

- `useLocalStorage`
- `usePrevious`
- `useClickOutside`
- `useMediaQuery`

</details>

<details>
<summary><strong>🎨 UI Components</strong></summary>

- `<Modal />`
- `<Tooltip />`
- `<Dropdown />`
- `<Toast />`
- `<Pagination />`

</details>

---

## 📈 Progress Log

<!-- One line per session — newest at top -->

| Date | Added | Notes |
|------|-------|-------|
| *(coming soon)* | — | Day 1 starts here |

---

<p align="center">
  <em>Built incrementally, one clean function at a time.</em>
</p>