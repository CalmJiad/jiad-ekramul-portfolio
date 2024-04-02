import About from "./components/About";
import HeroArea from "./components/HeroArea";
// import Motto from "./components/Motto";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Social from "./components/Social";

const App = () => {
  return (
    <div>
      <Navbar id="Home" />
      <Social />
      <HeroArea />
      <About />
      <Projects />
      {/* <Motto /> */}
    </div>
  );
};

export default App;
