import React from "react";

const PdfReader = ({ selectedPdf }) => {
  if (!selectedPdf) {
    return (
      <div className="flex items-center justify-center w-full h-full text-gray-500">
        <p className="text-center text-lg">Select a PDF to view its content.</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100">
      <div className="w-[90%] h-[80%] border rounded-lg shadow-inner bg-white p-4">
        <iframe
          src={selectedPdf}
          title="PDF Viewer"
          className="w-full h-full rounded-md"
        />
      </div>
      <p className="mt-4 text-indigo-600 font-semibold text-sm truncate w-[90%]">
        {selectedPdf}
      </p>
      
    </div>
  );
};

export default PdfReader;
