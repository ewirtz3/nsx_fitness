import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MeetNick from "./components/MeetNick";
import FitTip from "./components/FitTip";
import ServiceCardContainer from "./components/ServiceCardContainer";
import { GlobalStyles } from "./global";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <NavBar />
      <MeetNick />
      <FitTip />
      <ServiceCardContainer />
      <Footer />
    </div>
  );
}

export default App;
