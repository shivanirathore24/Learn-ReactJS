/*
Problem statement
You want to create a simple dashboard for an electronic store, displaying the name, selling price, quantity, and total revenue for the sold products in a table format.

Expected Output:
'images' folder --> inventory.png

Test Cases:
1. App should render the table correctly:
Ensure that the app renders the table with the appropriate structure, including the <thead>, <tbody>, and 
<tfoot> elements.

2. App should render 4 columns with correct labels:
Create columns inside the table header (<thead>) with appropriate labels ("id," "name," "selling price," "quantity") 
using the "th" tag to match the expected output image.

3. App should render table data correctly:
Iterate over the provided data and ensure that the application renders the appropriate fields inside the 
table body (<tbody>) for each sold item. 
Check that the displayed data matches the provided information accurately.

4. App should render table footer correctly:
Create a table footer (<tfoot>) and display the total revenue of the sold items. Verify that the displayed 
total revenue matches the sum calculated from the provided data.
It should have two columns, one with “Total Revenue” and the other displaying the total value.

Note:
Use the same data as provided in the scaffold, any modification in the scaffold code will lead to failure of test cases.
You can learn more about reduce method through this link: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
*/

const App = () => {
  const itemsSold = [
    { id: 1, name: "iPhone 15", price: 1200, qty: 24 },
    { id: 2, name: "iPad Pro", price: 800, qty: 18 },
    { id: 3, name: "Macbook Air", price: 1500, qty: 7 },
    { id: 4, name: "Samsung S24", price: 1100, qty: 15 },
    { id: 5, name: "Dell Inspiron 5590", price: 1200, qty: 5 },
  ];

  return (
    <>
      <h1>Record of Sold Items</h1>
      <table border="1px">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Selling price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {itemsSold.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.qty}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total Revenue</td>
            <td colSpan={3}>
              $
              {itemsSold.reduce(
                (total, item) => total + item.price * item.qty,
                0
              )}
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
