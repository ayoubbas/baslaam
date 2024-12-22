import Header from "./sass/components/header/Header";
import "./sass/_main.scss";
import Home from "./sass/pages/home/Home";
import About from "./sass/components/about-comps/About";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About/>
      </main>
    </div>
  );
}

export default App;
