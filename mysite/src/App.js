import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import About from './pages/About';
import Myfooter from './components/Footer/footer';
import Myheader from './components/Header/navbar';
import Verify from './pages/Verification';
import PrivateRoute from './pages/PrivateRoute';
import Home from './pages/Home';
import Error from './pages/Error';
import OHCWA from './pages/Projects/OHCWA';
import FaceDetection from './pages/Projects/FaceDetection';
import Certifications from './pages/Certifications';

function AppRoutes() {
  const location = useLocation();
  const isErrorPage = location.pathname === '/error';
  const isVerified = location.pathname === '/'

  return (
    <div>
      <Myheader />
      <Routes>
        <Route path="/" element={<Verify />} />
        <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/projects/ohcwa" element={<PrivateRoute><OHCWA /></PrivateRoute>} />
        <Route path="/projects/facedetection" element={<PrivateRoute><FaceDetection /></PrivateRoute>} />
        <Route path="/certifications" element={<PrivateRoute><Certifications /></PrivateRoute>} />
        <Route path="/error" element={<Error />} />
      </Routes>
      {!isErrorPage && !isVerified && <Myfooter />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
