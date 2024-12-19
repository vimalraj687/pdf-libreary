import React, { useState, useEffect } from "react";

const PdfList = ({ onSelect }) => {
  const [pdfData, setPdfData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.npoint.io/dee51ea017d20efdfcc8");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setPdfData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter the data based on the search term
  const filteredData = pdfData.filter((pdf) =>
    pdf.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return <p className="p-4">Loading...</p>;
  }

  if (error) {
    return <p className="p-4 text-red-500">Error: {error}</p>;
  }

  return (
    <div className="p-4">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search PDFs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      
      {/* PDF List */}
      <ul className="space-y-4">
        {filteredData.map((pdf, index) => (
          <li
            key={index}
            className="border p-4 rounded shadow hover:bg-gray-100 cursor-pointer"
            onClick={() => onSelect(pdf.link)} // Pass the `link` property
          >
            <h3 className="font-bold text-lg">{pdf.name}</h3>
            <p className="text-sm text-gray-600">{pdf.author || "Unknown Author"}</p>
            <p className="text-xs text-gray-400">{pdf.published || "Unknown Year"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PdfList;
