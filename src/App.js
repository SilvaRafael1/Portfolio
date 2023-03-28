import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLink from "./components/SocialLink";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      
      <SocialLink />
    </div>
  );
}

export default App;
