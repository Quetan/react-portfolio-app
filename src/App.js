import BackButton from "./components/elemenets/BackButton/BackButton";
import CloseButton from "./components/elemenets/CloseButton/CloseButton";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {


  return (
    <div className="App">
      <AnimatedRoutes />
      <BackButton />
      <CloseButton closeButtonHandler={ () => {alert('close')} }/>
    </div>
  );
}

export default App;