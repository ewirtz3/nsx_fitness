import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { GlobalStyles } from "./global";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Footer />
    </div>
  );
}

export default App;
