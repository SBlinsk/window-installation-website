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
import Guarantee from "./components/Guarantee/Guarantee";
import { Payment } from "./components/ Payment/Payment";
import { Sale } from "./components/Sale/Sale";
import { Contacts } from "./components/Contacts/Contacts";
import { FeedBack } from "./components/Feedback/FeedBack";
import { Footer } from "./components/Footer/Footer";
import OurWorks from "./components/OurWorks/OurWorks";
import ourWorksData from "./components/OurWorks/ourWorksData";
import Timer from "./components/Sale/Timer/Timer";

function App() {
  return (
    <>
      <Header />
      <MainBlock />
      <Glazing data={glazingData} />
      <Decoration data={decorationData} />
      <OurWorks data={ourWorksData} />
      <Guarantee />
      <Payment />
      <Sale />
      <Contacts />
      <FeedBack />
      <Footer />
    </>
  );
}

export default App;
