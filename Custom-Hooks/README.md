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


### Using LocalStorage
 1. In 'Login.js' component -> The code introduces the useEffect hook to persist the email state in localStorage.
    - Purpose of useEffect: This hook is used to perform side effects in function components. In this case, it's storing the value of the email input in the browser's localStorage.
    - Effect Trigger: The effect is triggered every time the email state changes because [email] is passed as a dependency. This means whenever the user types a new value into the email input field, the useEffect will run and store the updated value in localStorage.
    - localStorage.setItem: This function is called to store the current email in localStorage under the key "email". It allows the value to be persistent even if the page is reloaded.

This update ensures that the email is saved in localStorage whenever the user types it in, making the data persist across page refreshes or sessions.

2. In 'Reset.js' component ->  The code uses the useEffect hook to retrieve the email from localStorage and automatically set it as the initial value for the email input.
    - Purpose of useEffect: This hook runs after the component renders, specifically when the component is mounted ([] dependency array ensures it runs only once).
    - localStorage.getItem: It retrieves the email stored in the browser’s localStorage under the key "email". If the email exists (i.e., it’s not null), it is assigned to the variable email.
    - Setting email: If a value for the email is found in localStorage, it updates the email state using setEmail, pre-filling the input field with the stored email when the page loads.

This update allows the component to auto-fill the email field with the value stored from a previous session, improving user experience.


### Order of Hooks
In both component 'Login.js' and 'Reset.js' ->
1. First useEffect (Retrieving from localStorage):
    - Purpose: Fetches the saved email from localStorage when the component mounts and sets it in the email state.
    - Why First: Ensures the email field is pre-filled with stored data before any changes or saves occur.
2. Second useEffect (Saving to localStorage):
    - Purpose: Saves the email to localStorage every time the email state changes.
    - Why Second: Ensures that any updates to the email are stored after it's been retrieved and modified.

Order is important because the email must be retrieved first, then saved after any changes. This prevents overwriting the stored data with an empty or incorrect value.

### Implementing Custom Hooks
1. Created 'useLocalStorage.js' file which will act as Custom Hook -> This custom hook useLocalStorage manages the email state by interacting with the browser's localStorage. Here's how it works:
    - Initial State (useEffect 1): On component mount, it retrieves the email from localStorage (if available) and sets it in the email state.
    - Update Storage (useEffect 2): Whenever the email state changes, it saves the new email to localStorage.
    - Return Values: It returns the email value and the setEmail function, allowing components to access and update the email.

This hook helps maintain persistent state for email across sessions.

2. In 'Login.js' and 'Reset.js' file ->
    - Custom Hook Integration: The email state is now managed using the useLocalStorage hook: `const { email, setEmail } = useLocalStorage();` This replaces the previous useState and useEffect logic for handling localStorage.
    - Simplified Code: The redundant useEffect hooks for fetching and saving email are removed, as the custom hook now handles it.

This makes the component cleaner by offloading the localStorage logic to the custom hook.