import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./nav/Navbar";
import Home from "./pages/home/Home";
import WhatsOn from "./pages/whatsOn/WhatsOn";
import Menu from "./pages/menu/Menu";
import Contact from "./pages/contact/Contact";
import React, { useState } from "react";

function App() {
  const [navOpen, setNavOpen] = useState(false);

  function toggleNav() {
    setNavOpen(!navOpen);
  }

  return (
    <div>
      <Router>
        <Navbar onToggleNav={toggleNav} navOpen={navOpen} />
        <Routes>
          <Route path="/" element={<Home navOpen={navOpen} />} />
          <Route path="WhatsOn" element={<WhatsOn />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
