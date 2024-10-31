import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from './components/Landingpage.jsx';
import Login from './pages/Login.jsx';
import "./index.js";
import Createpages from './pages/Createpages.jsx';
import Editpage from './pages/Editpage.jsx';
import Dashboardadmin from './pages/Dashboardadmin.jsx';
import Listrumah from './pages/Listrumah.jsx';
import Register from './pages/Register.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/listrumah" element={<Listrumah />} />
        <Route path="/create" element={<Createpages />} />
        <Route path="/edit" element={<Editpage />} />
        <Route path="/admin" element={<Dashboardadmin />} />
      </Routes>
    </Router>
  );
}

export default App;
