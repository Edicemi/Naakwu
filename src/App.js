import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero";
import Container1 from "./components/Container1";
import Container2 from "./components/Container2";
import Solution from "./components/Solution";
import Process from "./components/Process";
import Learning1 from "./components/Learning1";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Hero />
      <Container1 />
      <Container2 />
      <Solution />
      <Process />
      <Learning1 />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
