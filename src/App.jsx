import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Navbar from './components/Navbar';
import Education from './pages/Education/Education';
import Schedule from './pages/Schedule/Schedule';
import Career from './pages/Career/Career';
import Activity from './pages/Activity/Activity';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='menu'>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/education' element={<Education />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/career' element={<Career />} />
          <Route path='/activity' element={<Activity />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;