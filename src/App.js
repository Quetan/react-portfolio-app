import UI from "./components/UI";

import Header from "./components/Header/Header";
import About from "./components/Sections/About/About";
import Works from "./components/Sections/Works/Works";

function App() {
  return (
    <div className="App">
      <Header />
      <About pageNumber="01"/>
      <Works pageNumber="02" />
      <About pageNumber="03"/>
      <About pageNumber="04"/>
      <About pageNumber="05"/>
      <UI />
    </div>
  );
}

export default App;
