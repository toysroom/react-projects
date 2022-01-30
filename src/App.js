import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// Icons

// Pages
import Home from "./pages/Home";
import Create from "./pages/Create";
import Search from "./pages/Search";
import Single from "./pages/Single";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/single/:id" element={<Single />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
