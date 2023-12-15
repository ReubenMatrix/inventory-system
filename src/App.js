import { useEffect,useState } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Inventory from "./pages/Inventory";
import Additems from "./pages/Additems";
import Listitems from "./pages/Listitems";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
      setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
      const root = document.documentElement;
      if (isDarkMode) {
          root.classList.add("dark");
      } else {
          root.classList.remove("dark");
      }
  }, [isDarkMode]);

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Inventory />} />
      <Route path="/additem" element={<Additems />} />
      <Route path="/listitems" element={<Listitems />} />
    </Routes>
  );
}
export default App;
