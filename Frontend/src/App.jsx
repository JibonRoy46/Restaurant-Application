import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home';
import Notfound from './Pages/Notfound';
import Successs from './Pages/Successs';


const App = () => {
  return (<Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notfound" element={<Notfound />} />
      <Route path="/*" element={<Successs />} />
    </Routes>
    <Toaster />
  </Router>
  )
}

export default App
