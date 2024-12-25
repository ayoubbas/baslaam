import Header from "./sass/components/header/Header";
import "./sass/_main.scss";
import Home from "./sass/pages/home/Home";
import About from "./sass/components/about/about/About";
import Skills from "./sass/components/skills/Skills";
import Services from "./sass/components/services/Services";
import Portfolio from "./sass/components/portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Portfolio />
      </main>
    </div>
  );
}

export default App;
