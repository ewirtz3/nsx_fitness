import "./App.css";
// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
// import MeetNick from "./components/MeetNick";
// import FitTip from "./components/FitTip";
// import ServiceCardContainer from "./components/ServiceCardContainer";
// import Contact from "./components/Contact";
// import { GlobalStyles } from "./global";
import NavBar from "./components2/NavBar";
import Intro from "./components2/Intro";
import MeetNick from "./components2/MeetNick";
import ServiceCardContainer from "./components2/ServiceCardContainer";
import { GlobalStyles2 } from "./global2";

function App() {
  return (
    // <div className="App">
    //   <GlobalStyles />
    //   <NavBar />
    //   <MeetNick />
    //   <FitTip />
    //   <ServiceCardContainer />
    //   <Contact />
    //   <Footer />
    // </div>
    <div className="App">
      <div className="positioning-div">
        <GlobalStyles2 />
      </div>

      <div className="positioning-div">
        <NavBar />
      </div>

      <div className="positioning-div">
        <Intro />
      </div>

      <div className="positioning-div">
        <MeetNick />
      </div>
      <div className="positioning-div">
        <ServiceCardContainer />
      </div>
    </div>
  );
}

export default App;
