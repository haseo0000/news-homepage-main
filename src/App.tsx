import "./App.css";
import Header from "./components/header/header";
import Home from "./pages/home";

function App() {
  return (
    <>
      {/* for closing overflow in responsive mode need this wrapper first */}
      <div className="container">
        <header>
          <Header />
        </header>
        <main>
          <Home />
        </main>
      </div>
    </>
  );
}

export default App;
