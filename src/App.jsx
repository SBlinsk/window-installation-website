//APP WICH WILL BE IN MAIN.JSX
// import "./App.css";
import "./assets/css/animate.min.css"
import "./assets/css/bootstrap.css"
import './assets/css/style.css'
import Header from "./components/Header/Header";
import MainBlock from "./components/Main/mainBlock";
import Glazing from "./components/Glazing/Glazing";


function App() {
  return (
    <>
      <Header />
      <MainBlock />
      <Glazing />
    </>
  );
}

export default App;
