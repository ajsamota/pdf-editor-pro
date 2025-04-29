import React, { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

export default function Editor() {
  const [pdfFile, setPdfFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(URL.createObjectURL(file));
    }
  };

  return (
    <div className="h-screen">
      <h2 className="text-center text-xl font-semibold">PDF Editor</h2>
      <input type="file" accept="application/pdf" className="block m-auto my-4" onChange={handleFileChange} />
      <div className="border h-[80%] mx-auto w-[80%]">
        {pdfFile && (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
            <Viewer fileUrl={pdfFile} />
          </Worker>
        )}
      </div>
    </div>
  );
}
