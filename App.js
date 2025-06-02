import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ParosGPT from "./pages/ParosGPT";
import ItineraryBuilder from "./pages/ItineraryBuilder";
import Home from "./pages/Home"; 
// import ChatBoxPreview from "./components/ChatBox"; 
// import ItineraryForm from "./components/ItineraryForm"; 
import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const width = sidebarOpen ? "240px" : "0px";
    document.documentElement.style.setProperty("--sidebar-width", width);
  }, [sidebarOpen]);

  return (
    <Router>
      <div className="app-layout">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        {!sidebarOpen && (
          <button className="toggle-btn" onClick={() => setSidebarOpen(true)}>☰</button>
        )}
        <div className={`main-content ${!sidebarOpen ? "sidebar-hidden" : ""}`}>
          <Routes>
            <Route path="/" element={<Home />} />        {/* 👈 DEFAULT */}
            <Route path="/parosgpt" element={<ParosGPT />} />
            <Route path="/itinerarybuilder" element={<ItineraryBuilder />} />
            {/* <Route path="/itineraryform" element={<ItineraryForm />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
