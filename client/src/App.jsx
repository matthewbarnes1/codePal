import { useEffect, useState } from "react";

import ViewComponent from "./components/ViewComponent";
import Footer from "./components/Footer";

import "./app.css";

export default function App() {
  // create User Context to check
  // logged in state and get user's
  // data from database

  const [user, setUser] = useState(null);

  // use useQuery to set user's data
  // for login

  useEffect(() => {
    document.title = "codePals";
  }, []);

  if (!user) {
    return (
      <>
        {/* show LandingPAge here and then */}

        {/* else */}

        {/* when logged in, show the ViewComponent */}

        <ViewComponent />
        <Footer />
      </>
    );
  }
}
