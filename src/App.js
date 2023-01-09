import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { Reviews } from "./components/Reviews";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/Reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
