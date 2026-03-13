# CONTEXT API PART-II

## Shopping-Cart App: Project Setup

### Project folder structure

```text
Shopping-Cart-App
│
├── node_modules
├── public
│
├── src
│   │
│   ├── components
│   │   ├── ItemCard.jsx
│   │   ├── Items.jsx
│   │   └── Navbar.jsx
│   │
│   ├── data
│   │   └── itemData.js
│   │
│   ├── styles
│   │   ├── Item.module.css
│   │   ├── ItemCard.module.css
│   │   └── Navbar.module.css
│   │
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

### 1. App.js

```jsx
import "./App.css";
import { useState } from "react";
import Items from "./components/Items";
import Navbar from "./components/Navbar";

function App() {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  return (
    <div className="App">
      <h2>Shopping Cart</h2>
      <Navbar />
      <Items />
    </div>
  );
}
export default App;
```

- Purpose:
  - Main component of the application. It manages the overall layout and application state.
- What it does:
  - Uses useState to store:
    - `total` → total price of items in cart
    - `item` → number of items in cart
  - Renders the main UI:
    - Navbar component (shows total and items)
    - Items component (displays available products)

### 2. Navbar.js

```jsx
import React from "react";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; 0</h1>
      <h1>Items: 0</h1>
    </div>
  );
}

export default Navbar;
```

- Purpose:
  - Displays the cart summary.

- What it does:
  - Shows:
    - Total cart price
    - Total number of items
  - Uses CSS module Navbar.module.css for styling.
- Example display:
  ```text
  Total : ₹0
  Items : 0
  ```

### 3. Items.js

```jsx
import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";

function Items() {
  return (
    <div className={styles.wrapper}>
      <ItemCard name="Apple" price={199} />
    </div>
  );
}

export default Items;
```

- Purpose:
  - Displays the list of items available for purchase.
- What it does:
  - Imports ItemCard component.
  - Wraps item cards inside a styled container.
  - Currently renders one item:
    ```jsx
    <ItemCard name="Apple" price={199} />
    ```

### 4. ItemCard.js

```jsx
import React from "react";
import styles from "../styles/ItemCard.module.css";

function ItemCard({ name, price }) {
  const handleAdd = () => {};

  const handleRemove = () => {};

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd()}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove()}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
```

- Purpose:
  - Represents a single product card.
- What it does:
  - Displays:
    - Item name
    - Item price
  - Contains two buttons:
    - **Add** → add item to cart
    - **Remove** → remove item from cart
  - Event handler functions:
    - `handleAdd()`
    - `handleRemove()`
      (Currently these functions are empty.)

### 5. itemData.js

- Stores product data used in the application.
- It contains an array of product objects with: `id`, `name`, `price`
  ```jsx
  {
  id: 1,
  name: "T-shirt",
  price: 100
  }
  ```
- This file separates data from UI logic, making the project easier to maintain.

### 6. Styles (`styles` folder)

- Contains CSS modules used to style components.
- Responsibilities:
  - Item.module.css → styles the items container layout
  - ItemCard.module.css → styles product cards and buttons
  - Navbar.module.css → styles the navbar displaying cart summary.
- CSS Modules ensure:
  - Scoped styles
  - No class name conflicts
  - Better component-level styling.

### 7. index.js

- Entry point of the React application.
- Responsibilities:
  - Renders the App component
  - Mounts the React application to the DOM.

### Component Render Hierarchy

Shows how components are nested and rendered.

```text
index.js
   │
   ▼
App.js
   │
   ├── Navbar.jsx
   │       └── Displays total price and item count
   │
   └── Items.jsx
           │
           └── ItemCard.jsx
                   ├── Item Name
                   ├── Item Price
                   ├── Add Button
                   └── Remove Button
```

#### Explanation:

- `index.js` starts the React application.
- `App.js` is the root component.
- `App` renders:
  - `Navbar` (cart summary)
  - `Items` (list of products).
- `Items` renders multiple `ItemCard `components.

### Data & Interaction Flow

Shows how data moves when a user interacts with the application.

```text
itemData.js
     │
     ▼
Items.jsx
     │
     ▼
ItemCard.jsx
     │
     ▼
User clicks Add / Remove
     │
     ▼
App.js (updates total price and item count)
     │
     ▼
Navbar.jsx (displays updated values)
```

#### Explanation

- `itemData.js` contains the list of products.
- `Items.jsx` reads the product data.
- Each product is displayed using `ItemCard`.
- When the user clicks **Add** or **Remove**:
- The action updates the state in **App.js**.
- Updated values are passed to **Navbar** to display the new **total price** and **item count**.

✅ One simple rule for React

- Render Flow → Top to Bottom
- Data/Event Flow → Bottom to Top

#### 🖥️ What You See in Browser:

<img src="./images/shopping-cart-app.png" alt="Shopping-Cart App" width="600" height="auto">

## Passing State using Context

### 1. itemContext.js

```jsx
import { createContext } from "react";

const itemContext = createContext();
export { itemContext };
```

Creates and exports a React Context used for sharing cart data across components.

- Imports createContext from React.
- Creates a context object named itemContext.
- Exports the context so other components can use it.

### 2. App.js

```diff
 import Navbar from "./components/Navbar";
+import { itemContext } from "./createContext";

 function App() {
   const [total, setTotal] = useState(24);
   const [item, setItem] = useState(0);

-  return (
-    <div className="App">
+  return (
+    <itemContext.Provider value={{ total, setTotal }}>
+      <div className="App">
       <h2>Shopping Cart</h2>
       <Navbar />
       <Items />
-    </div>
+      </div>
+    </itemContext.Provider>
   );
 }
```

Manages the cart state and provides it to other components using React Context.

- Imports `useState`, `Navbar`, `Items`, and `itemContext`.
- Creates state variables:
  - `total` → total price of items in the cart.
  - `item` → number of items in the cart.
- Wraps the application with `itemContext.Provider`.
- Passes `{ total, setTotal } `through the provider so child components can access the cart state.
- Renders the main UI including Shopping Cart title, `Navbar`, and `Items`.

```jsx
<itemContext.Provider value={{ total, setTotal }}>
```

### 3. Navbar.js

```diff
 import styles from "../styles/Navbar.module.css";
+import { useContext } from "react";
+import { itemContext } from "../createContext";

 function Navbar() {
+  const value = useContext(itemContext);

   return (
     <div className={styles.container}>
-      <h1>Total : &#x20B9; 0</h1>
+      <h1>Total : &#x20B9; {value.total}</h1>
       <h1>Items: 0</h1>
     </div>
   );
 }
```

Displays the cart summary using data from the shared context.

- Imports `useContext` and `itemContext`.
- Uses `useContext(itemContext)` to access context values.
- Retrieves the `total` value stored in `App`.
- Displays the total cart price in the UI.

  ```jsx
  const value = useContext(itemContext);
  ```

- Displayed in UI:

  ```text
  Total : ₹24
  Items : 0
  ```

#### 🖥️ What You See in Browser:

<img src="./images/state-using-context.png" alt="Passing State using Context" width="700" height="auto">

## Updating the Total Value

### ItemCard.js

```diff
import React from "react";
import styles from "../styles/ItemCard.module.css";
+import { useContext } from "react";
+import { itemContext } from "../itemContext";

 function ItemCard({ name, price }) {
-  const handleAdd = () => {};
+  const { total, setTotal } = useContext(itemContext);
+
+  const handleAdd = () => {
+    setTotal(total + price);
+  };

-  const handleRemove = () => {};
+  const handleRemove = () => {
+    if (total <= 0) {
+      return;
+    }
+    setTotal((prevState) => prevState - price);
+  };

   return (
     <div className={styles.itemCard}>
       <div className={styles.itemName}>{name}</div>
       <div className={styles.itemPrice}>&#x20B9; {price}</div>
       <div className={styles.itemButtonsWrapper}>
         <button className={styles.itemButton} onClick={() => handleAdd()}>
           Add
         </button>
         <button className={styles.itemButton} onClick={() => handleRemove()}>
           Remove
         </button>
       </div>
     </div>
   );
 }

 export default ItemCard;
```

Handles adding and removing items from the cart by updating the shared cart total using React Context.

- Imports `useContext` and `itemContext`.
- Accesses shared values `total` and `setTotal` from the context.
- Add button: calls `handleAdd()` to increase the cart total using `setTotal(total + price)`.
- Remove button: calls `handleRemove()` to decrease the cart total using `setTotal((prevState) => prevState - price)`.
- Includes a condition to prevent the cart total from going below 0.

This allows each item card to **directly update the global cart total when items are added or removed**.

### App.js

```diff
- const [total, setTotal] = useState(24);
+ const [total, setTotal] = useState(0);
```

- The initial cart total was changed from 24 to 0.
- This ensures the shopping cart starts empty when the application loads.

#### 🖥️ What You See in Browser:

<img src="./images/increase-cart-total.png" alt="Increase Cart Total" width="700" height="auto">

<img src="./images/decrease-cart-total.png" alt="Decrease Cart Total" width="700" height="auto">

## Updating Items

### App.js

```diff
 import { itemContext } from "./itemContext";

 function App() {
   const [total, setTotal] = useState(0);
   const [item, setItem] = useState(0);

   return (
-    <itemContext.Provider value={{ total, setTotal }}>
+    <itemContext.Provider value={{ item, setItem, total, setTotal }}>
       <div className="App">
         <h2>Shopping Cart</h2>
         <Navbar />
         <Items />
       </div>
     </itemContext.Provider>
   );
 }
```

Added item count state and shared it through `itemContext`.

- Added `item` and `setItem` using `useState`.
- Passed `item`, `setItem`, `total`, and `setTotal` through `itemContext.Provider`.
- This allows child components to access and update both cart total and item count.

### ItemCard.js

```diff
-const { total, setTotal } = useContext(itemContext);
+const { total, setTotal, item, setItem } = useContext(itemContext);

 const handleAdd = () => {
   setTotal(total + price);
+  setItem(item + 1);
 };

 const handleRemove = () => {
   if (total <= 0) {
     return;
   }
   setTotal((prevState) => prevState - price);
+  setItem(item - 1);
 };
```

Updated the component to manage item count along with total price.

- Accessed `item` and `setItem` from `itemContext`.
- **Add button:** increases both the cart total and item count.
- **Remove button:** decreases both the cart total and item count.

### Navbar.js

```diff
 <h1>Total : ₹ {value.total}</h1>
-<h1>Items: 0</h1>
+<h1>Items: {value.item}</h1>
```

Updated the Navbar to display the number of items in the cart.

#### 🖥️ What You See in Browser:

<img src="./images/update-cart-items.png" alt="Update Cart Items" width="700" height="auto">

## Multiple Context

React also allows you to create multiple contexts. By providing multiple contexts in
this way, components that require access to both context values can consume them
both and be able to interact with their respective states. We should always try to
separate contexts for different purposes to maintain the code structure and better
readability. To keep context re-rendering fast, React needs to make each context
consumer a separate node in the tree.

For Example: The Items component can access the item state from itemContext and the total state from totalContext, allowing it to display both the number of items in the cart and the total cart cost.

### totalContext.js

```jsx
import { createContext } from "react";

const totalContext = createContext();
export { totalContext };
```

The `totalContext` is used to manage and **share the total price of the shopping cart** across components.

- Created using `createContext`.
- Stores the **total cart value** and its update function.
- Allows components like **Navbar** and **ItemCard** to access and update the cart total.

### App.js

```diff
 import "./App.css";
 import { useState } from "react";
 import Items from "./components/Items";
 import Navbar from "./components/Navbar";
 import { itemContext } from "./itemContext";
+import { totalContext } from "./totalContext";

 function App() {
   const [total, setTotal] = useState(0);
   const [item, setItem] = useState(0);

   return (
-    <itemContext.Provider value={{ item, setItem, total, setTotal }}>
+    <totalContext.Provider value={{ total, setTotal }}>
+      <itemContext.Provider value={{ item, setItem }}>
       <div className="App">
         <h2>Shopping Cart</h2>
         <Navbar />
         <Items />
       </div>
-    </itemContext.Provider>
+      </itemContext.Provider>
+    </totalContext.Provider>
   );
 }

 export default App;
```

Updated the app to use **two separate context providers** instead of passing all values through a single context.

- `totalContext` now manages the **cart total value**.
- `itemContext` now manages the **number of items in the cart**.
- Both providers wrap the application so child components can access the required state independently.

## ItemCard.js

```diff
 import React from "react";
 import styles from "../styles/ItemCard.module.css";
 import { useContext } from "react";
 import { itemContext } from "../itemContext";
+import { totalContext } from "../totalContext";

 function ItemCard({ name, price }) {
-  const { total, setTotal, item, setItem } = useContext(itemContext);
+  const { total, setTotal } = useContext(totalContext);
+  const { item, setItem } = useContext(itemContext);

   const handleAdd = () => {
     setTotal(total + price);
     setItem(item + 1);
   };

   const handleRemove = () => {
     if (total <= 0) {
       return;
     }
     setTotal((prevState) => prevState - price);
     setItem(item - 1);
   };

   return (
     <div className={styles.itemCard}>
       <div className={styles.itemName}>{name}</div>
       <div className={styles.itemPrice}>&#x20B9; {price}</div>
       <div className={styles.itemButtonsWrapper}>
         <button className={styles.itemButton} onClick={() => handleAdd()}>
           Add
         </button>
         <button className={styles.itemButton} onClick={() => handleRemove()}>
           Remove
         </button>
       </div>
     </div>
   );
 }

 export default ItemCard;
```

The `ItemCard` component was updated to consume **two separate contexts** for managing cart state.

- Imports and uses `totalContext` to access and update the **cart total price**.
- Uses `itemContext` to access and update the **number of items in the cart**.
- The **Add button** increases both the cart total and item count.
- The **Remove button** decreases both values while preventing the total from going below 0

### Navbar.js

```diff
 import React from "react";
 import styles from "../styles/Navbar.module.css";
 import { useContext } from "react";
 import { itemContext } from "../itemContext";
+import { totalContext } from "../totalContext";

 function Navbar() {
-  const value = useContext(itemContext);
+  const { total } = useContext(totalContext);
+  const { item } = useContext(itemContext);

   return (
     <div className={styles.container}>
-      <h1>Total : &#x20B9; {value.total}</h1>
-      <h1>Items: {value.item}</h1>
+      <h1>Total : &#x20B9; {total}</h1>
+      <h1>Items: {item}</h1>
     </div>
   );
 }

 export default Navbar;
```

The `Navbar` component was updated to read data from **two contexts instead of one**.

- Uses totalContext to retrieve the total price of the cart.
- Uses itemContext to retrieve the number of items in the cart.
- Displays both values in the navigation bar as the cart summary.

## Custom Provider

It is a component which acts as a provider and it makes use of the default provider.
Custom providers are created using the createContext function from the React
library, which creates a new context object that can be passed down to child
components using a provider component. The provider component is responsible for
passing the context data down to its child components via a special prop called
value.

By using a custom provider, you can centralize the management of shared data and
state in a single place, making it easier to maintain and update your application. This
can be particularly useful when working with complex applications that require a lot
of shared state management, such as e-commerce sites or large data-driven
applications.

### itemContext.js (Custom Provider)

```diff
-import { createContext } from "react";
+import { createContext, useState } from "react";

 const itemContext = createContext();


+function CustomItemContext({ children }) {
+  const [total, setTotal] = useState(0);
+  const [item, setItem] = useState(0);
+
+  return (
+    <itemContext.Provider value={{ total, setTotal, item, setItem }}>
+      {children}
+    </itemContext.Provider>
+  );
+}
+
 export { itemContext };
+export default CustomItemContext;
```

The context was updated to use a **custom provider component** so the cart state can be managed inside the context file instead of inside `App`.

- Created a component called `CustomItemContext` that wraps the application.
- Moved the `total` and `item` state into this provider.
- Used `{children}` so all components inside the wrapper can access the shared state.
- This simplifies `App.js` because it no longer needs to manage or pass the context values manually.

  ```jsx
  import { createContext, useState } from "react";

  const itemContext = createContext();

  function CustomItemContext({ children }) {
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);

    return (
      <itemContext.Provider value={{ total, setTotal, item, setItem }}>
        {children}
      </itemContext.Provider>
    );
  }

  export { itemContext };
  export default CustomItemContext;
  ```

### App.js

```diff
-import { useState } from "react";
 import Items from "./components/Items";
 import Navbar from "./components/Navbar";
-import { itemContext } from "./itemContext";
-import { totalContext } from "./totalContext";
+import CustomItemContext from "./itemContext";

-function App() {
-  const [total, setTotal] = useState(0);
-  const [item, setItem] = useState(0);
+function App() {

   return (
-    <totalContext.Provider value={{ total, setTotal }}>
-      <itemContext.Provider value={{ item, setItem }}>
+    <CustomItemContext>
       <div className="App">
         <h2>Shopping Cart</h2>
         <Navbar />
         <Items />
       </div>
-      </itemContext.Provider>
-    </totalContext.Provider>
+    </CustomItemContext>
   );
 }
```

Updated the app to use the Custom Context Provider instead of manually wrapping components with multiple providers.

- Removed `useState` from `App`.
- Replaced manual context providers with `CustomItemContext`.
- The provider now handles state internally.

  ```jsx
  import "./App.css";
  import Items from "./components/Items";
  import Navbar from "./components/Navbar";
  import CustomItemContext from "./itemContext";

  function App() {
    return (
      <CustomItemContext>
        <div className="App">
          <h2>Shopping Cart</h2>
          <Navbar />
          <Items />
        </div>
      </CustomItemContext>
    );
  }
  export default App;
  ```

### ItemCard.js

```diff
 import { itemContext } from "../itemContext";
-import { totalContext } from "../totalContext";

 function ItemCard({ name, price }) {
-  const { total, setTotal } = useContext(totalContext);
-  const { item, setItem } = useContext(itemContext);
+  const { total, setTotal, item, setItem } = useContext(itemContext);

   ...
 }
```

Updated the component to consume only `itemContext`, since both item count and total price are now provided from a single context.

- Removed `totalContext` usage.
- Accessed `total`, `setTotal`, `item`, and `setItem` from itemContext.

### Navbar.js

```diff
 import { useContext } from "react";
 import { itemContext } from "../itemContext";
-import { totalContext } from "../totalContext";

 function Navbar() {
-  const { total } = useContext(totalContext);
-  const { item } = useContext(itemContext);
+  const { total, item } = useContext(itemContext);

   ...
 }
```

Simplified the component to read both total price and item count from the same context.

- Removed `totalContext`.
- Accessed `total` and `item` directly from `itemContext`.

NOTE: `itemContext` acts as the channel for sharing data, while `CustomItemContext` is the provider component that manages the cart state and makes it available to all child components.

## Custom Hook

Creation of a custom provider component that provides context data to its child
components, as well as the creation of a custom hook that consumes the context
data. Using custom hooks with custom providers allows for greater flexibility and
reusability in sharing data across a React application. All the logic of the context file,
updating logic and event handling, will be at one place
For Example, The **useValue** hook is defined to consume the context data provided
by the **itemContext** using the **useContext** hook. The hook returns the total and item
variables, functions handleAdd, and handleRemove from the context, making them
available to any components that use the useValue hook.

### itemContext.js

```diff
-import { createContext, useState } from "react";
+import { createContext, useState, useContext } from "react";

 const itemContext = createContext();

+function useValue() {
+  const value = useContext(itemContext);
+  return value;
+}

 function CustomItemContext({ children }) {
   const [total, setTotal] = useState(0);
   const [item, setItem] = useState(0);

+  const handleAdd = (price) => {
+    setTotal(total + price);
+    setItem(item + 1);
+  };
+
+  const handleRemove = (price) => {
+    if (total <= 0) return;
+    setTotal((prevState) => prevState - price);
+    setItem(item - 1);
+  };

   return (
-    <itemContext.Provider value={{ total, setTotal, item, setItem }}>
+    <itemContext.Provider value={{ total, item, handleAdd, handleRemove }}>
       {children}
     </itemContext.Provider>
   );
 }

-export { itemContext };
+export { useValue };
 export default CustomItemContext;
```

The context was enhanced by adding a **custom hook** and moving the cart update logic inside the provider.

- Created a custom hook `useValue()` that internally uses `useContext(itemContext)`.
- This hook allows components to access the context without directly importing useContext.
- Moved cart logic (`handleAdd` and `handleRemove`) into the provider to centralize state updates.
- The provider now shares `total`, `item`, and the two handler functions with all child components.

```jsx
import { createContext, useState, useContext } from "react";

const itemContext = createContext();

function useValue() {
  const value = useContext(itemContext);
  return value;
}

function CustomItemContext({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);

  const handleAdd = (price) => {
    setTotal(total + price);
    setItem(item + 1);
  };

  const handleRemove = (price) => {
    if (total <= 0) {
      return;
    }
    setTotal((prevState) => prevState - price);
    setItem(item - 1);
  };

  return (
    <itemContext.Provider value={{ total, item, handleAdd, handleRemove }}>
      {children}
    </itemContext.Provider>
  );
}

export { useValue };
export default CustomItemContext;
```

### ItemCard.js

```diff
 import React from "react";
 import styles from "../styles/ItemCard.module.css";
-import { useContext } from "react";
-import { itemContext } from "../itemContext";
+import { useValue } from "../itemContext";

 function ItemCard({ name, price }) {
-  const { total, setTotal, item, setItem } = useContext(itemContext);
+  const { handleAdd, handleRemove } = useValue();

-  const handleAdd = () => {
-    setTotal(total + price);
-    setItem(item + 1);
-  };
-
-  const handleRemove = () => {
-    if (total <= 0) {
-      return;
-    }
-    setTotal((prevState) => prevState - price);
-    setItem(item - 1);
-  };

   return (
     <div className={styles.itemCard}>
       <div className={styles.itemName}>{name}</div>
       <div className={styles.itemPrice}>&#x20B9; {price}</div>
       <div className={styles.itemButtonsWrapper}>
-        <button className={styles.itemButton} onClick={() => handleAdd()}>
+        <button className={styles.itemButton} onClick={() => handleAdd(price)}>
           Add
         </button>
-        <button className={styles.itemButton} onClick={() => handleRemove()}>
+        <button
+          className={styles.itemButton}
+          onClick={() => handleRemove(price)}
+        >
           Remove
         </button>
       </div>
     </div>
   );
 }

 export default ItemCard;
```

The component was updated to use the custom hook instead of directly using `useContext`.

- Imported and used `useValue()` to access the context data.
- Removed local state update logic from the component.
- Used `handleAdd(price)` and `handleRemove(price)` provided by the context.
- This makes the component cleaner and keeps cart logic centralized in the provider.

### Navbar.js

```diff
 import React from "react";
 import styles from "../styles/Navbar.module.css";
-import { useContext } from "react";
-import { itemContext } from "../itemContext";
+import { useValue } from "../itemContext";

 function Navbar() {
-  const { total, item } = useContext(itemContext);
+  const { total, item } = useValue();

   return (
     <div className={styles.container}>
       <h1>Total : &#x20B9; {total}</h1>
       <h1>Items: {item}</h1>
     </div>
   );
 }

 export default Navbar;
```

The Navbar was also updated to use the **custom hook** to read cart data.

- Replaced `useContext(itemContext)` with `useValue()`.
- Retrieved `total` and `item` directly from the custom hook.
- Displays the current **cart total** and **item count**.

## Reset Button

### itemContext.js

```diff
 ...
 function CustomItemContext({ children }) {
   const [total, setTotal] = useState(0);
   const [item, setItem] = useState(0);

   ...

+  const clear = () => {
+    setTotal(0);
+    setItem(0);
+  };

   return (
-    <itemContext.Provider value={{ total, item, handleAdd, handleRemove }}>
+    <itemContext.Provider
+      value={{ total, item, handleAdd, handleRemove, clear }}
+    >
       {children}
     </itemContext.Provider>
   );
 }
 ...
```

Added a **reset functionality** to clear the shopping cart state from the context provider.

- Created a new function `clear()` inside `CustomItemContext`.
- The `clear` function resets both `total` and `item` to `0`.
- Added `clear` to the context provider value so it can be accessed by other components.
- This allows any component using the context to reset the cart state.

### Navbar.js

```diff
 import styles from "../styles/Navbar.module.css";
 import { useValue } from "../itemContext";

 function Navbar() {
-  const { total, item } = useValue();
+  const { total, item, clear } = useValue();

   return (
     <div className={styles.container}>
       <h1>Total : &#x20B9; {total}</h1>
       <h1>Items: {item}</h1>
+      <div className={styles.buttonWrapper}>
+        <button className={styles.button} onClick={clear}>
+          Reset
+        </button>
+      </div>
     </div>
   );
 }
```

Updated the Navbar to include a **Reset button** that clears the cart.

- Accessed the `clear` function from the custom hook `useValue()`.
- Added a **Reset button** in the Navbar UI.
- Clicking the button calls `clear()`, which resets the cart total and item count.
- Also updated `Navbar.module.css` to style the new Reset button.

#### 🖥️ What You See in Browser:

<img src="./images/before-reset-cart.png" alt="Resetting the Cart" width="600" height="auto">

<img src="./images/after-reset-cart.png" alt="Resetting the Cart" width="600" height="auto">

## Displaying Items & Cart Button

### Items.js

```diff
 import styles from "../styles/Item.module.css";
 import ItemCard from "./ItemCard";
+import itemData from "../data/itemData";

 function Items() {
   return (
     <div className={styles.wrapper}>
-      <ItemCard name="Apple" price={199} />
+      {itemData.map((item) => (
+        <ItemCard
+          key={item.id}
+          id={item.id}
+          name={item.name}
+          price={item.price}
+        />
+      ))}
     </div>
   );
 }

 export default Items;
```

The `Items` component was updated to dynamically render product items using a data source.

- Imported `itemData` which contains the list of products.
- Used `map()` to loop through the data and render multiple ItemCard components.
- Passed `id`, `name`, and `price` as props to each ItemCard.
- Added `key={item.id}` to help React efficiently update the list.

### Navbar.js

```diff
 function Navbar() {
-  const { total, item, clear } = useValue();
+  const { item, total, clear } = useValue();

   return (
     <div className={styles.container}>
       <h1>Total : &#x20B9; {total}</h1>
       <h1>Items: {item}</h1>

-      <div className={styles.buttonWrapper}>
-        <button className={styles.button} onClick={clear}>
-          Reset
-        </button>
-      </div>
+      <div className={styles.buttonsWrapper}>
+        <button className={styles.button}>Cart</button>
+        <button className={styles.button} onClick={clear}>
+          Reset
+        </button>
+      </div>
     </div>
   );
 }
```

The Navbar was updated to include a **Cart button** along with the existing reset functionality.

- Retrieved `item`, `total`, and `clear` from the custom hook `useValue()`.
- Added a **Cart button** that will be used to open the cart modal.
- Grouped buttons inside `buttonsWrapper` for better layout styling.
- The **Reset button** still clears the cart state using the `clear()` function.

### CartModal.js (New Component)

```jsx
import React from "react";
import styles from "../styles/CartModal.module.css";

function CartModal() {
  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton}>Close</div>
      <div className={styles.clearButton}>Clear</div>
      <div className={styles.itemContainer}></div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>$Price</div>
      </div>
    </div>
  );
}

export default CartModal;
```

A new component called `CartModal` was created to display cart details in a modal overlay.

- Displays a **full-screen** modal showing cart information.
- Includes a **Close button** to hide the modal.
- Includes a **Clear button** to reset the cart.
- Contains an `itemContainer` section where cart items will be rendered.
- Shows the **total cart price** at the bottom of the modal.
- Alos, added `CartModal.module.css` to provide styling for the Cart Modal interface.

NOTE: Currently, only the CartModal UI structure is implemented; its functionality will be added later.

#### 🖥️ What You See in Browser:

<img src="./images/items_cart-button.png" alt="Displaying Items & Cart Button" width="700" height="auto">

## Toggle Cart Button

### itemContext.js

```diff
 import { createContext, useState, useContext } from "react";
+import CartModal from "./components/CardModal";

 ...

 function CustomItemContext({ children }) {
   const [total, setTotal] = useState(0);
   const [item, setItem] = useState(0);
+  const [showCart, setShowCart] = useState(false);

   ...

+  const toggle = () => {
+    setShowCart(!showCart);
+  };

   return (
     <itemContext.Provider
-      value={{ total, item, handleAdd, handleRemove, clear }}
+      value={{ total, item, handleAdd, handleRemove, clear, toggle }}
     >
+      {showCart && <CartModal toggle={toggle} />}
       {children}
     </itemContext.Provider>
   );
 }
```

Added functionality to **toggle the Cart Modal visibility** using context state.

- Introduced a new state `showCart` to track whether the cart modal is visible.
- Created a `toggle()` function to open and close the cart modal.
- Passed `toggle` through the context provider so other components can control the cart modal.
- Rendered the `CartModal` component conditionally when showCart is true.

### Navbar.js

```diff
 import React from "react";
 import styles from "../styles/Navbar.module.css";
 import { useValue } from "../itemContext";

 function Navbar() {
-  const { item, total, clear } = useValue();
+  const { item, total, clear, toggle } = useValue();

   return (
     <div className={styles.container}>
       <h1>Total : &#x20B9; {total}</h1>
       <h1>Items: {item}</h1>

       <div className={styles.buttonsWrapper}>
-        <button className={styles.button}>Cart</button>
+        <button className={styles.button} onClick={toggle}>
+          Cart
+        </button>
         <button className={styles.button} onClick={clear}>
           Reset
         </button>
       </div>
     </div>
   );
 }

 export default Navbar;
```

Updated the Navbar to **open the cart modal using the Cart button**.

- Retrieved `toggle` from the custom hook `useValue()`.
- Added `onClick={toggle}` to the Cart button.
- Clicking the Cart button now **opens or closes the Cart Modal**.

### CartModal.js

```diff
 import React from "react";
 import styles from "../styles/CartModal.module.css";

-function CartModal() {
+function CartModal({ toggle }) {
   return (
     <div className={styles.cartModal}>
-      <div className={styles.closeButton}>Close</div>
+      <div className={styles.closeButton} onClick={toggle}>
+        Close
+      </div>
       <div className={styles.clearButton}>Clear</div>
       <div className={styles.itemContainer}></div>

       <div className={styles.total}>
         <div className={styles.totalText}>Total</div>
         <div className={styles.totalPrice}>$Price</div>
       </div>
     </div>
   );
 }

 export default CartModal;
```

Updated the CartModal to **close the modal when the Close button is clicked**.

- Received the `toggle` function as a prop.
- Added `onClick={toggle}` to the Close button.
- Clicking Close hides the cart modal by updating the context state.

#### 🖥️ What You See in Browser:

Click the Cart button, then click the Close button to return to the cart items.

<img src="./images/toggle-cart-button.png" alt="Click Cart Button" width="700" height="auto">

<img src="./images/close-button.png" alt="Click Close Button" width="700" height="auto">

<img src="./images/items_cart-button.png" alt="Back to Cart Items" width="700" height="auto">

## Update Cart count and Cart display

### itemContext.js

```diff
 import { createContext, useState, useContext } from "react";
 import CartModal from "./components/CardModal";

 const itemContext = createContext();

 function useValue() {
   const value = useContext(itemContext);
   return value;
 }

 function CustomItemContext({ children }) {
   const [total, setTotal] = useState(0);
   const [item, setItem] = useState(0);
   const [showCart, setShowCart] = useState(false);
+  const [cart, setCart] = useState([]);

-  const handleAdd = (price) => {
-    setTotal(total + price);
-    setItem(item + 1);
-  };
+  const handleAdd = (prod) => {
+    const index = cart.findIndex((item) => item.id === prod.id);
+
+    if (index === -1) {
+      setCart([...cart, { ...prod, qty: 1 }]);
+      setTotal(total + prod.price);
+    } else {
+      cart[index].qty++;
+      setCart(cart);
+      setTotal(total + cart[index].price);
+    }
+    setItem(item + 1);
+  };

   const handleRemove = (price) => {
     if (total <= 0) {
       return;
     }
     setTotal((prevState) => prevState - price);
     setItem(item - 1);
   };

   const clear = () => {
     setTotal(0);
     setItem(0);
+    setCart([]);
   };

   const toggle = () => {
    setShowCart(!showCart);
   };

   return (
     <itemContext.Provider
-      value={{ total, item, handleAdd, handleRemove, clear, toggle }}
+      value={{ total, item, handleAdd, handleRemove, clear, toggle, cart }}
     >
       {showCart && <CartModal toggle={toggle} />}
       {children}
     </itemContext.Provider>
   );
 }

 export { useValue };
 export default CustomItemContext;
```

The context was updated to **store cart items and manage item quantities when products are added to the cart**.

- Added a new state `cart` to store all products added to the cart.
- Updated `handleAdd` to accept the full product object (`id`, `name`, `price`) instead of only the price.
- When a product is added:
  - The function checks if the product already exists in the cart using `findIndex`.
  - If the product does not exist, it is added to the cart with an initial quantity `qty`: `1`.
  - If the product already exists, its quantity (`qty`) is increased by `1`.
- After updating the cart, the **total price and item count are updated accordingly**.
- The updated `cart` **array is shared through the context provider** so other components can access it.
- The `clear` function was also updated to reset `total`, `item`, and the `cart` array.

### CartModal.js

```diff
 import React from "react";
+import { useValue } from "../itemContext";
 import styles from "../styles/CartModal.module.css";

-function CartModal({ toggle }) {
+function CartModal() {
+  const { cart, total, clear, toggle } = useValue();

   return (
     <div className={styles.cartModal}>
       <div className={styles.closeButton} onClick={toggle}>
         Close
       </div>
-      <div className={styles.clearButton}>Clear</div>
+      <div className={styles.clearButton} onClick={clear}>
+        Clear
+      </div>

       <div className={styles.itemContainer}>
+        {cart.map((item) => {
+          return (
+            <div className={styles.cartCard} key={item.id}>
+              <h1>{item.name}</h1>
+              <h3>X {item.qty}</h3>
+              <h3>X {item.qty * item.price}</h3>
+            </div>
+          );
+        })}
     </div>

       <div className={styles.total}>
         <div className={styles.totalText}>Total</div>
-        <div className={styles.totalPrice}>$Price</div>
+        <div className={styles.totalPrice}>{total}</div>
       </div>
     </div>
   );
 }

 export default CartModal;
```

The CartModal was updated to **display cart items dynamically based on the cart data stored in context**.

- Retrieved `cart`, `total`, `clear`, and `toggle` using the custom hook useValue().
- Used `cart.map()` to loop through all items stored in the cart.
- Each cart item displays:
  - Product name
  - Quantity (qty)
  - Calculated price (qty \* price)
- The **Clear button** resets the cart using the clear() function.
- The **Total section** now displays the actual cart total from context.

### ItemCard.js

```diff
 import React from "react";
 import styles from "../styles/ItemCard.module.css";
 import { useValue } from "../itemContext";

-function ItemCard({ name, price }) {
+function ItemCard({ name, price, id }) {
   const { handleAdd, handleRemove } = useValue();

   return (
     <div className={styles.itemCard}>
       <div className={styles.itemName}>{name}</div>
       <div className={styles.itemPrice}>&#x20B9; {price}</div>

       <div className={styles.itemButtonsWrapper}>
-        <button className={styles.itemButton} onClick={() => handleAdd(price)}>
+        <button
+          className={styles.itemButton}
+          onClick={() => handleAdd({ id, name, price })}
+        >
           Add
         </button>

         <button
           className={styles.itemButton}
           onClick={() => handleRemove(price)}
         >
           Remove
         </button>
       </div>
     </div>
   );
 }

 export default ItemCard;
```

The ItemCard component was updated to **send complete product information when adding items to the cart**.

- Added the `id` prop so each product can be uniquely identified in the cart.
- Updated the **Add button** to pass the full product object (`id`, `name`, `price`) to `handleAdd`.
- This allows the context to:
  - **Track individual products**
  - **Increase quantity instead of adding duplicate items**
- The **Remove button** continues to decrease the total and item count using `handleRemove`.

#### Result

- Products are now **stored in a structured cart array with quantity tracking**.
- Adding the same product **increases its quantity instead of duplicating the item**.
- The **Cart Modal dynamically displays the updated cart contents**.
- The **cart total and item quantities update automatically when products are added**.

#### 🖥️ What You See in Browser:

Add items to the cart, click the **Cart** button to display the cart items, and click **Clear** to remove all items from the cart.

<img src="./images/add-cart-items.png" alt="\Add Cart Items" width="700" height="auto">

<img src="./images/display-cart-items.png" alt="\Display Cart Items" width="700" height="auto">

<img src="./images/clear-cart-items.png" alt="\Clear Cart Items" width="700" height="auto">
