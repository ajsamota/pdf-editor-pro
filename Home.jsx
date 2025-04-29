import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">PDF Editor Pro</h1>
      <div className="mt-4 flex flex-col gap-2 items-center">
        <Link to="/editor" className="bg-blue-500 text-white p-2 rounded">Open Editor</Link>
        <Link to="/ocr" className="bg-green-500 text-white p-2 rounded">Convert to OCR</Link>
        <Link to="/viewer" className="bg-purple-500 text-white p-2 rounded">View Files</Link>
      </div>
    </div>
  );
}
