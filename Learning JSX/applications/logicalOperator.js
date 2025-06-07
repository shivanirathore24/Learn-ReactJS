/*
Problem statement
Create a React component named App that utilizes logical operators to render components conditionally.

Expected Output:
If the user is not logged in and the name is not set
Expected Output:
'images' folder --> login2.png

If the user is logged in and the name is set
Expected Output:
'images' folder --> home2.png

Tasks:
The scaffold has four components: Login, App, Home, Premium.
The Login and Home component has already been created. You just have to complete the App and Premium Component.
For the App component, we have variables for the name and a isLoggedIn variable to check whether the user is logged in or not.

Note: You have to set the values here manually. There is no need to implement the logic for changing the values of name and isLogged dynamically.

If your name is not defined, it should display a default name (use “Guest”) in the Welcome Message using the h1 tag.
On the basis of the flag, only one component should be rendered, either Home or Login.
For the Premium Component, create a simple button without any event handler.

Test Cases:
App should render any one component
Only one component should be rendered on the screen, either Home or Login.
If the Home component is rendered, then it should contain the button from the Premium Component.
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

const PremiumAccount = () => <button>Buy Premium</button>;

const App = () => {
  const name = "Shivani Rathore";
  const isLoggedIn = false;

  return (
    <>
      <h1>{isLoggedIn ? `Hello ${name}!` : "Hello Guest!"}</h1>
      {isLoggedIn && <PremiumAccount />}
      {isLoggedIn ? <Home /> : <Login />}
    </>
  );
};

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
