import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./routes/Register";
import About from "./routes/About";
import Newsfeed from "./routes/Newsfeed";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="register" element={<Register />} />
      <Route path="newsfeed" element={<Newsfeed />} />
    </Routes>
  </BrowserRouter>
);
