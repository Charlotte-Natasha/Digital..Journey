import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Socials from "./components/Socials";

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <Socials/>
    </div>
  );
}

export default App;