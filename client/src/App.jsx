import { useEffect, useState } from "react";
import ViewComponent from "./components/ViewComponent";
import Footer from "./components/Footer";
import CP from "./components/CP";
import "./app.css";

import LandingComponent from "./components/LandingComponent";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    document.title = "codePals";
  }, []);

  if (user) {
    return (
      <>
        <div>In Landing</div>
        <LandingComponent userInfo={user} handleInput={setUser} />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <ViewComponent />
        <Footer />
      </>
    );
  }
}
