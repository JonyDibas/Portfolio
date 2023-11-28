import NavBar from "./components/navBar/navBar"
import Footer from "./components/footer/footer.js"
import './App.css';

function App() {
  return (
    <div>
    <nav className="App">
      <NavBar />
    </nav>
    <footer>
    <Footer />
    </footer>
    </div>
  );
}

export default App;
