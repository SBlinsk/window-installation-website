//APP WICH WILL BE IN MAIN.JSX
// import "./App.css";
// add some comment
import "./assets/css/animate.min.css";
import "./assets/css/bootstrap.css";
import "./assets/css/style.css";
import Header from "./components/Header/Header";
import MainBlock from "./components/Main/mainBlock";
import Glazing from "./components/Glazing/Glazing";
import glazingData from "./components/Glazing/glazingData";
import Decoration from "./components/Decoration/Decoration";
import decorationData from "./components/Decoration/decorationData";

import OurWorks from "./components/OurWorks/OurWorks";
import ourWorksData from "./components/OurWorks/ourWorksData";
function App() {
  return (
    <>
      <Header />
      <MainBlock />
      <Glazing data={glazingData} />
      <Decoration data={decorationData} />
      <OurWorks data={ourWorksData} />
    </>
  );
}

export default App;
