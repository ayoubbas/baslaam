import Header from "./sass/components/header/Header";
import "./sass/_main.scss";
import Home from "./sass/pages/home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
      </main>
    </div>
  );
}

export default App;
