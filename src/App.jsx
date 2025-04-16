import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Home } from './components/pages/Home';
import { Navbar } from './components/sharableComp/Navbar';
import { Catagory } from './components/pages/Catagory';
import { Footer } from './components/sharableComp/Footer';
import { Contact } from './components/pages/Contact';

function App() {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  return (
    <>
      <Navbar onSearch={setSearchQuery} /> {/* Pass setSearchQuery to Navbar */}
      <Routes>
        <Route
          path='/'
          element={<Home searchQuery={searchQuery} />} // Pass searchQuery to Home
        />
        <Route
          path="/catagory"
          element={<Catagory searchQuery={searchQuery} />} // Pass searchQuery to Catagory
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;