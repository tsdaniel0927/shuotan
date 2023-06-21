import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Myfooter from './components/Footer/footer';
import Myheader from './components/Header/navbar';
import Verify from './pages/Verification';
import PrivateRoute from './pages/PrivateRoute';
import Home from './pages/Home';
import Error from './pages/Error';
import OHCWA from './pages/Projects/OHCWA';
import FaceDetection from './pages/Projects/FaceDetection'

function App() {
  // const isVerified = localStorage.getItem === 'Shuo Tan';


  return (
    <Router>
      <div>
        <Myheader />
        <Routes>
          <Route path="/" element={<Verify />} />
          <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/projects/ohcwa" element={<PrivateRoute><OHCWA /></PrivateRoute>} />
          <Route path="/projects/facedetection" element={<PrivateRoute><FaceDetection /></PrivateRoute>} />
          <Route path="/error" element={<Error />} />
        </Routes>
        <Myfooter />
      </div>
    </Router>
  );
}

export default App;
