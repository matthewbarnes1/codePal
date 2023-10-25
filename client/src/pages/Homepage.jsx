import "./homepage.css";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <h1 className="title">Welcome to, CodePal's!</h1>
      <h2 className="subtitle">The virtual pal for the lonesome coder!
      <h3>Go to <a href="/signup">Signup</a>to create your account!</h3>

Fill your void with a fun, playful pet without having to scoop the poop!
</h2>

      <div className="card">
        <img src="./src/assets/mockup/drink.png" alt="Drink mockup" height="300" width="450" />
      </div>

      <div className="card">
        <img src="./src/assets/mockup/hi.png" alt="Hi mockup" height="300" width="450" />
      </div>

      <div className="card">
        <img src="./src/assets/mockup/tired.png" alt="Tired mockup" height="300" width="450" />
      </div>

    </div>
  );
};

export default Homepage;
