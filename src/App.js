import Contact from "./components/Contact/Contact";
import Cv from "./components/Cv/Cv";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Works />
      <Cv />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
