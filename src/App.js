import React from "react";
import Homepage from "./pages/Homepage";
import Subscribe from "./pages/Subscribe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-white">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Routes>
          <Route path="/subscribe" element={<Subscribe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
