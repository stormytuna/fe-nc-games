import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { IndividualReview } from "./components/IndividualReview";
import { MainContent } from "./components/MainContent";
import { NavBar } from "./components/NavBar";
import { Reviews } from "./components/Reviews";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/Reviews" element={<MainContent />} />
        <Route path="/Reviews/:review_id" element={<IndividualReview />} />
      </Routes>
    </div>
  );
}

export default App;
