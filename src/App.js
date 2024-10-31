import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from './components/Landingpage.jsx';
import Login from './pages/Login.jsx';
import "./index.js";
import Dashboardadmin from './pages/Dashboardadmin.jsx';
import Listrumah from './pages/Listrumah.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/listrumah" element={<Listrumah />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<Dashboardadmin />} />
      </Routes>
    </Router>
  );
}

export default App;
