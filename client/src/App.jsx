import { useEffect } from "react";
import ViewComponent from "./components/ViewComponent";

export default function App() {
  useEffect(() => {
    document.title = "codePals";
  }, []);

  return <ViewComponent />;
}
