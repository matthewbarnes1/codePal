import { useState } from "react";
import ViewComponent from "../components/ViewComponent";
import Homepage from "../pages/Homepage";
import Auth from "../utils/auth";

function Home() {
  const [user, setUser] = useState(Auth.loggedIn());
  console.log(user);
  return (
    <>
      {user ? (
        <div>
          <ViewComponent />
        </div>
      ) : (
        <div>
          <Homepage />
        </div>
      )}
    </>
  );
}

export default Home;
