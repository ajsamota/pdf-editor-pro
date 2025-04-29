import React, { useState } from "react";

export default function FileViewer() {
  const [fileName, setFileName] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">File Viewer</h2>
      <input type="file" className="block my-4" accept=".pdf,.docx,.xlsx,.zip,.tiff" onChange={handleFileChange} />
      {fileName && <p className="mt-2">Uploaded File: {fileName}</p>}
    </div>
  );
}
