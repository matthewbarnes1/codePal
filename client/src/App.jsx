import { useEffect } from "react";
import ViewComponent from "./components/ViewComponent";
import Footer from "./components/Footer";
import "./app.css";
import "./components/viewComponent.css";
import "./UI/fluidItemsPopUp.css";
import "./UI/fluidFill.css";

export default function App() {
  useEffect(() => {
    document.title = "codePals";
  }, []);

  return (
    <>
      <ViewComponent />
      <Footer />
    </>
  );
}
