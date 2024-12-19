import React, { useState } from "react";
import PdfList from "./components/PdfList";
import PdfReader from "./components/PdfReader";

const App = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar for PDF List */}
      <div className="w-full md:w-1/3 border-r overflow-y-auto bg-gray-50">
        <PdfList onSelect={setSelectedPdf} />
      </div>
      {/* Main Area for PDF Reader */}
      <div className="w-full md:w-2/3 bg-white">
        <PdfReader selectedPdf={selectedPdf} />
      </div>
    </div>
  );
};

export default App;
