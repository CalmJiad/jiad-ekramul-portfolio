import About from "./components/About";
import HeroArea from "./components/HeroArea";
import Navbar from "./components/Navbar";
import Social from "./components/Social";

const App = () => {
  return (
    <div>
      <Navbar id="Home" />
      <Social />
      <HeroArea />
      <About />
    </div>
  );
};

export default App;
