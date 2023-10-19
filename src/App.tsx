import "./App.css";
import Header from "./components/header/header";
import Home from "./pages/home";

function App() {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main>
        <div className="home-layout">
          <Home />
        </div>
      </main>
    </div>
  );
}

export default App;
