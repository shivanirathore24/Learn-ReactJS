/*
Problem statement
Create a React app that uses the ternary operator to conditionally render the given components.

Note: Only do modification in the App component.
If the login status is false display Login component.

Expected Output:
'images' folder --> login1.png
   
 If the login status is true display Home component.
 Expected Output:
'images' folder --> home1.png
   
Hint: (click to expand)
Create a boolean variable for login and set it to a default value.
Don't implement the functionality to change the login value instead do it manually.
*/

const IMAGES = [
  "https://res.cloudinary.com/dl26pbek4/image/upload/v1674557549/assets/yannis-zaugg--7TB_r-NuMo-unsplash_tdmglm.jpg",
  "https://res.cloudinary.com/dl26pbek4/image/upload/v1674557550/assets/lino-C2SzUyg3PPQ-unsplash_s8a4tg.jpg",
  "https://res.cloudinary.com/dl26pbek4/image/upload/v1674557550/assets/curioso-photography-QfOhOcrDmvk-unsplash_vgbb3t.jpg",
  "https://res.cloudinary.com/dl26pbek4/image/upload/v1674620718/assets/pexels-garvin-st-villier-3311574_ds8wrh.jpg",
];

const Login = () => (
  <div>
    <h3>Login to Continue</h3>
    <form>
      <input placeholder="email" />
      <input placeholder="password" />
      <button>Login</button>
    </form>
  </div>
);

const Home = () => (
  <div>
    <h3>Welcome to home!</h3>
    <h5>Enjoy this catalog of pictures</h5>
    {IMAGES.map((i) => (
      <img key={i} src={i} />
    ))}
  </div>
);

const App = () => {
  const isLoggedIn = false;

  return isLoggedIn ? <Home /> : <Login />;
};

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
