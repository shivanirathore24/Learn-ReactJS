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