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