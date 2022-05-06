import { useEffect, useState, useRef } from "react";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Navigation from "./components/elemenets/Navigation/Navigation";

function App() {

  /*
  **
  **  BUSINESS LOGIC
  **
  */


  // Navigation logic
  const [isNavigationOpen, setNavigationOpen] = useState(false); // navigation state
  const [activeSection, setActiveSection] = useState(null); //defines active section

  let navigationClickHandler = () => {
    setNavigationOpen(!isNavigationOpen);
  };

  // Click outside menu logic
  function useOutsideHandler(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setNavigationOpen(isNavigationOpen ? true : false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const menuRef = useRef(null);
  useOutsideHandler(menuRef);

  // Animation logics
  const variants = {
    hidden: {opacity: 0 },
    visible: {
      opacity: 1,
      transition: { type: "spring", ease: "easeInOut", duration: 1.2, delay: 0.3, bounce: 0.4 },
    },
    exit: { opacity: 0},
  };


  /*
  **
  **  UI
  **
  */

  return (
    <div className="App">
      <AnimatedRoutes
        isNavigationOpen={isNavigationOpen}
        variants={variants}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Navigation
        activeSection={activeSection}
        isNavigationOpen={isNavigationOpen}
        setNavigationOpen={setNavigationOpen}
        navigationClickHandler={navigationClickHandler}
        menuRef={menuRef}
        modifier="App-Navigation"
      />
    </div>
  );
}

export default App;
