import { useState } from "react";
import { createContext } from "react";
const itemContext = createContext();

function CustomItemContext({ children }) {
  //function CustomItemContext(props){
  //console.log(props);
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
