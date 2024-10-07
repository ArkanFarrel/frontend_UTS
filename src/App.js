import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import "./index.js"
import Createpages from './pages/Createpages.jsx';
import Editpage from './pages/Editpage.jsx';
import Dashboardadmin from './pages/Dashboardadmin.jsx';
import Listrumah from './pages/Listrumah.jsx';

function App() {
  return (
    <Router basename="/frontend_UTS">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/listrumah" element={<Listrumah />} />
        <Route path="/create" element={<Createpages />} />
        <Route path="/edit" element={<Editpage />} />
        <Route path="/admin" element={<Dashboardadmin />} />
      </Routes>
    </Router>
  );
}

export default App;
