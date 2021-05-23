import "./App.css";
// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
// import MeetNick from "./components/MeetNick";
// import FitTip from "./components/FitTip";
// import ServiceCardContainer from "./components/ServiceCardContainer";
// import Contact from "./components/Contact";
// import { GlobalStyles } from "./global";
import NavDots from "./components2/NavDots";
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
      <GlobalStyles2 />
      <nav>
        <p>hello</p>
      </nav>
      <NavDots />
    </div>
  );
}

export default App;
