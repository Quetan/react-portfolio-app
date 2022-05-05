import UI from "./components/UI";

import Main from "./components/Sections/Main/Main";
import About from "./components/Sections/About/About";
import Works from "./components/Sections/Works/Works";

import { Routes, Route} from "react-router-dom";
import BackButton from "./components/elemenets/BackButton/BackButton";
import CloseButton from "./components/elemenets/CloseButton/CloseButton";

function App() {
  return (
    <div className="App">
        <div>

          <Routes>
            <Route index element={<Main />} />
            <Route path="about" element={<About />} />
            <Route path="works" element={<Works />} />
            <Route path="ui" element={<UI />} />
          </Routes>
        </div>
      <BackButton />
      <CloseButton closeButtonHandler={ () => {alert('close')} }/>
    </div>
  );
}

export default App;

// <Works pageNumber="02" />
// <About pageNumber="03"/>
// <About pageNumber="04"/>
// <About pageNumber="05"/>
// <UI />