import React from "react";
import Homepage from "./pages/Homepage";
import Subscribe from "./pages/Subscribe";
import CategoryPage from "./pages/CategoryPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostDetails from "./pages/PostDetails";

function App() {
  return (
    <div className="bg-white">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/category/:name" element={<CategoryPage />} />
          <Route path="/:title" element={<PostDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
