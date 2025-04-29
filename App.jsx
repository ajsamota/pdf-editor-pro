import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Editor from "./pages/Editor";
import OCRConverter from "./pages/OCRConverter";
import FileViewer from "./pages/FileViewer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/ocr" element={<OCRConverter />} />
        <Route path="/viewer" element={<FileViewer />} />
      </Routes>
    </Router>
  );
}

export default App;
