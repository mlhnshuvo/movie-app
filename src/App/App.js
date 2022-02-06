import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";

const App = () => {
  return (
    <div className="bg-gray-700">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/details/:id" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
