import { useEffect } from "react";
import ViewComponent from "./components/ViewComponent";
// Importing our context provider which will make our global state available to child components
import ViewProvider from "./utils/ViewContext";

export default function App() {
  useEffect(() => {
    document.title = "codePals";
  }, []);

  return (
    <ViewProvider>
      <ViewComponent />
    </ViewProvider>
  );
}
