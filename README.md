# DevStack

DevStack is a React app for exploring technologies and building a tech stack.

## Technologies Used

- React 19
- TypeScript
- Vite
- React Toastify
- Tailwind CSS
- DaisyUI
- React Icons

## Features

1. Browse technology cards.
2. Add technologies to your stack.
3. Remove technologies with toast messages.

## Add to Stack Functionality

- Clicking **Add to Stack** adds a technology to **Your Stack**.
- Each stack item shows an icon, name, category, and remove button.
- Stack items are shown in one column.
- A technology cannot be added twice.
- The button becomes disabled after adding.
- Toast messages show add, duplicate, and remove actions.

## Getting Started

Install the dependencies and start the development server:

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code in JavaScript. React uses it to build the UI.

### 2. What is the difference between props and state?

Props are data from a parent. State is data that can change inside a component.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` stores changing data. Here, it stores selected technologies in `TechnologySection`.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after rendering. This project does not use it. Data loads with `Suspense` and `use`.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each list item.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering shows different UI for different conditions. `StackSidebar` shows an empty message when the stack has no items.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data and functions through props. `TechnologySection` sends `stack` and `onAddToStack` to `TechnologyCard`. The child calls the function when the button is clicked.
