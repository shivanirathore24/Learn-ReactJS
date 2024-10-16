## Shopping-Cart Using Context API

### Passing State Using Context
1. Created 'itemContext.js' -> This code creates a React context (itemContext) using createContext() and exports it so it can be used to share data across components without manually passing props.
2. In 'App.js' file -> The updated part of the code introduces a context provider for sharing the total and setTotal state values across components: 
    - `<itemContext.Provider value={{total, setTotal}}>`: This wraps the Navbar and Items components inside itemContext.Provider. It passes the total and setTotal values as the context data, making them accessible to any component that consumes itemContext.
    - This allows Navbar and Items (or any other component) to use the total and setTotal state without needing to pass them as props directly.
3. In 'Navbar.jsx' -> The updated code uses useContext to access the shared context values from itemContext:
    - `const value = useContext(itemContext);`: This retrieves the context value (i.e., total and setTotal) provided by itemContext.
    - `{value.total}`: The total value from the context is displayed dynamically in the Navbar (Total : ₹ {value.total}), replacing the hardcoded value.
    - This is update allows the Navbar component to reflect the current total value from the context

### Updating the Total Value
In 'ItemCard.js' -> The updated part of the code introduces the use of useContext from React to manage the total price of items added. Here's what changed:
1. useContext Hook:
    - The itemContext is imported and used to access total (current total price) and setTotal (function to update the total).
    - This allows the ItemCard component to modify the global total price when items are added.
2. handleAdd Function:
    - When the "Add" button is clicked, setTotal is called to update the total by adding the item's price to the current total.

This update integrates a shared state (total) between components through useContext.

### Updating Items
1. In 'App.js' -> The updated code adds item and setItem to the itemContext, allowing both the item count and total to be shared and managed across the app components, along with their update functions
2. In 'ItemCard.js' -> 
    - Item count state (item, setItem) added to track the number of items.
    - handleAdd function now increments both total price and item count.
    - handleRemove function decreases total price and item count, with a check to prevent negative totals.
This allows the component to manage both price and item quantity.
3. In 'Navbar.jsx' -> The update changes the item count from hardcoded 0 to dynamically displaying value.item from the itemContext, reflecting the actual number of items selected.

### Multiple Context
1. Created 'totalContext.js' -> The code creates a shared context (totalContext) for managing and accessing the "total" value across multiple components, without passing props. This is useful for global state management in React.
2. In 'App.js' -> The updated part of the code splits the context into two separate providers: itemContext and totalContext. Here’s what changed:
    - Separate Context Providers:
        - Previously, itemContext handled both item and total state.
        - Now, the code uses two contexts:
            - itemContext only manages item and setItem.
            - totalContext manages total and setTotal.
        - This approach separates concerns, making the management of item and total independent, which is cleaner and more modular.
    - Nested Providers:
        - itemContext.Provider and totalContext.Provider are nested within each other, allowing components like Navbar and Items to access the values from both contexts.
    
    This change improves code organization by keeping item and total in their own contexts.
3. In 'ItemCard.js' -> The updated part of the code separates the management of total and item into different contexts:
    - Using Separate Contexts:
        - Previously, itemContext handled both item and total.
        - Now, itemContext manages item and setItem, while totalContext manages total and setTotal.
    - This separation makes it clearer and more modular, with each context handling specific state.
4. In 'Navbar.js' -> The update separates item and total into two different contexts (itemContext for item and totalContext for total) in the Navbar component, making the state management cleaner and more modular

### Custom Context
A custom context in React is used to create a global state that can be shared across multiple components without needing to pass props down through every level of the component tree. It allows for more efficient state management and easier access to common data (like user information, theme, or app-wide settings).
1. In 'itemContext.js' ->
    - The updated code introduces the CustomItemContext component, which manages two state variables, total and item, both initialized to 0 using useState. Their setter functions, setTotal and setItem, allow for updating these values.
    - The itemContext.Provider wraps around child components, sharing these state values and their updaters (total, setTotal, item, setItem) throughout the component tree.
    - The children prop passes these components into the Provider, enabling them to access and modify the shared context values.
2. In 'App.js' -> 
    - In the updated code, the state management (useState) and itemContext.Provider have been moved into a separate component called CustomItemContext. Instead of handling state directly in the App component, App now uses CustomItemContext to wrap the entire app, which provides the context values (total, setTotal, item, setItem) to its children (Navbar and Items).
    - This change simplifies the App component by offloading state and context management to CustomItemContext.

### Custom Hooks
1. In 'itemContext.js' ->
    - Functions:
        - handleAdd(price): This function adds the specified price to the total and increments the item count by 1.
        - handleRemove(price): This function subtracts the specified price from the total, but only if total is greater than 0, and decrements the item count by 1.
    - Provider: The itemContext.Provider now passes the handleAdd and handleRemove functions along with the total and item count, allowing components to modify these values.
    - Custom Hook: The useValue function uses useContext to provide an easy way for components to access the context values, simplifying the process of using the context in child components.
2. In 'ItemCard.js' -> 
    - Custom Hook Usage: It now uses the useValue hook to access handleAdd and handleRemove functions from the context, streamlining the code.
    - Removed Local Handlers: The previous local handleAdd and handleRemove functions are removed, relying instead on the context functions for state management.
    - Button Handlers: The buttons directly call handleAdd(price) and handleRemove(price), simplifying the logic and improving readability.

Overall, these changes enhance code clarity and maintain separation of concerns.

3. In 'Navbar.js' ->
    - Custom Hook Usage: The component now uses the useValue custom hook to access the total and item values from the context. This simplifies the code by encapsulating the context logic.
    - Cleaner Code: By using useValue, the code is more concise and readable, reducing direct interactions with the context API.

Overall, these changes improve code clarity and maintainability by centralizing context access through the custom hook.

### Reset Button
1. In 'Navbar.jsx' -> A clear function was added via the context (useValue()).
A new "Reset" button was added, which when clicked, calls the clear function to reset the total and item values (or possibly other state).
2. In 'itemContext.js' -> Added a clear function to reset total and item to 0, and it is passed through the context so other components can use it.
3. In 'Total.module.css' -> Added styles for .buttonsWrapper and .button. The .buttonsWrapper aligns buttons, while the .button styles include border, background color, font size, and hover effects like scaling and color changes.

### Card Button
1. In 'Navbar.js' -> The updated code adds a "Cart" button alongside the existing "Reset" button within the div for buttons. Now, the navbar has two buttons: "Cart" (without any action yet) and "Reset" (which clears items). The "Reset" button is positioned after the new "Cart" button.
2. Created 'CardModal.module.js' -> The Navbar component in React fetches the total price (total), the number of items (item), and the clear function from a context using useValue(). It displays the total amount in rupees and the number of items. The component has two buttons:
    - A "Cart" button (currently without any functionality).
    - A "Reset" button that triggers the clear function to reset the cart.
    - The component is styled using CSS modules (Total.module.css or Navbar.module.css).
3. Created 'CardModal.module.css' -> This CSS styles a cart modal with a fixed, full-screen layout. It includes scrollable cart items (.itemContainer), individual item cards (.cartCard), a total section (.total), and two buttons: one to close the modal (.closeButton) and another to clear the cart (.clearButton). All elements use consistent padding, margins, and colors from CSS variables.
