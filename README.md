PDF Library Project
Overview
This project is a PDF Library application built as part of the React Developer Assignment for Propacity PropTech Pvt. Ltd. The app allows users to browse, search, and view a collection of PDFs. The features include:

A list view showcasing PDF titles, authors, and publication years.
A search bar for filtering PDFs by name.
A detailed view to read selected PDFs.
Features
List View: Displays PDF titles, authors, and publication years in a visually appealing and responsive layout.
Search Functionality: Allows users to search PDFs by name.
Reader View: Provides an interface to read the selected PDF within the application.
Technologies Used
React.js: For building the UI and managing state.
Tailwind CSS: For responsive and modern styling.
API: Integrated the provided API (npoint.io) to fetch PDF data dynamically.
Setup Instructions
Prerequisites
Node.js (v14 or above) installed.
A code editor like VS Code.
Steps to Run the Application
Clone the repository:
bash
Copy code
git clone https://github.com/vimalraj687/pdf-libreary.git  
cd pdf-libreary  
Install dependencies:
bash
Copy code
npm install  
Start the development server:
bash
Copy code
npm start  
Open the application in your browser at http://localhost:3000.
Assumptions
All PDFs in the API have unique titles.
PDFs without authors or publication years are displayed as "Unknown Author" or "Unknown Year."
How to Use
Open the application.
Use the search bar to find PDFs by title.
Click on a PDF in the list view to open it in the reader view.
Additional Notes
The application is fully responsive and optimized for various screen sizes.
Error handling has been implemented for API calls.
Live Demo
Deployed Application Link
https://pdf-libreary.vercel.app/

