import React from "react";

export default function OCRConverter() {
  const handleOCR = () => {
    alert("OCR conversion feature is under development.");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">OCR Converter</h2>
      <input type="file" accept="application/pdf,image/*" className="block my-4" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleOCR}>Convert to OCR</button>
    </div>
  );
}
