import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Overview from './components/Overview';
import Content from './components/Content';
import Create from './components/Create';
import Footer from './components/Footer';

function App() {
  // Define las funciones setOverview, setContent y setCreate como estados
  const [overview, setOverview] = useState(false);
  const [content, setContent] = useState(false); // Define el estado content
  const [create, setCreate] = useState(false); // Define el estado create

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/content" element={<Content />} />
        <Route
          path="/create"
          element={
            <Create
              setOverview={setOverview}
              setContent={setContent}
              setCreate={setCreate}
            />
          }
        />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;


