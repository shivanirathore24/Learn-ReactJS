import "./App.css";
import { useState } from "react";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import { itemContext } from "./itemContext";
import { totalContext } from "./totalContext";

function App() {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  return (
    <totalContext.Provider value={{ total, setTotal }}>
      <itemContext.Provider value={{ item, setItem }}>
        <div className="App">
          <h2>Shopping Cart</h2>
          <Navbar />
          <Items />
        </div>
      </itemContext.Provider>
    </totalContext.Provider>
  );
}
export default App;
