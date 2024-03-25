import NavBar from "./components/navBar/navBar"
import Footer from "./components/footer/footer.js"
import Intro from "./components/intro/intro.js"
import Skills from "./components/skills/skills.js"
import Contact from "./components/contact/contact.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
