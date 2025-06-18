import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Homepg from './pages/Homepg';
import Createpg from './pages/Createpg'; // ✅ exact match
import Notedetail from './pages/Notedetail';

function App() {
  return (
    <div data-theme="dark" className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Homepg />} />
        <Route path="/create" element={<Createpg />} /> {/* ✅ route MUST be lowercase */}
        <Route path="/note/:id" element={<Notedetail />} />
        <Route path="*" element={<h1 className="text-white">404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
