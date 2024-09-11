### Custom Hooks
Custom hooks
Custom hooks are functions in React that allow you to reuse stateful logic across
multiple components. They follow the naming convention of starting with the word
"use" and can be defined and used in the same way as the built-in hooks provided
by React.

Custom hooks are a way to abstract and share logic that is not tied to a specific
component, which makes your code more modular, easier to read and maintain.
They can encapsulate complex stateful logic and make it easy to use in multiple
components, without having to repeat the same code in each component.

Custom hooks can use other built-in hooks and can also be composed with other
custom hooks, which makes it easy to create complex and reusable logic that can be
used across different parts of your application.

Example: 
The useLocalStorage custom hook

`import { useState, useEffect } from "react";`

`const useLocalStorage = (key, initialValue) =>{
    const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : initialValue;
});`

`useEffect(() => {
localStorage.setItem(key, JSON.stringify(value));
}, [key, value]);
return [value, setValue];
};`

