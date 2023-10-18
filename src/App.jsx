//APP WICH WILL BE IN MAIN.JSX
// import "./App.css";
import "./assets/css/animate.min.css";
import "./assets/css/bootstrap.css";
import "./assets/css/style.css";
import Header from "./components/Header/Header";
import MainBlock from "./components/Main/mainBlock";
import Glazing from "./components/Glazing/Glazing";
import glazingData from "./components/Glazing/glazingData";
import Decoration from "./components/Decoration/Decoration";
import decorationData from "./components/Decoration/decorationData";

function App() {
  return (
    <>
      <Header />
      <MainBlock />
      <Glazing data={glazingData} />
      <Decoration data={decorationData} />
    </>
  );
}

export default App;
