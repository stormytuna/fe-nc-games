import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Error } from "./components/Error";
import { Header } from "./components/Header";
import { IndividualReview } from "./components/IndividualReview";
import { MainContent } from "./components/MainContent";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/:review_id" element={<IndividualReview />} />
        <Route path="/*" element={<Error error="Nothing to see here..." />} />
      </Routes>
    </div>
  );
}

export default App;
