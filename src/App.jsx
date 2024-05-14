import "./App.css";
import Filters from "./components/Filters/Filters";
import Jobs from "./components/Jobs/Jobs";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    function handleScroll() {
      const scrollTop =
        (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop;
      const documentHeight =
        (document.documentElement && document.documentElement.scrollHeight) ||
        document.body.scrollHeight;
      const clientHeight =
        document.documentElement.clientHeight || window.innerHeight;

      if (scrollTop + clientHeight >= documentHeight - 5) {
        dispatch({ type: "setPage" });
      } else {
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Filters />
      <Jobs />
    </>
  );
}

export default App;
