import React from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Contact from './components/Contact'
import Plants from './pages/Plants'
import About from './pages/About'

function App() {
  return (
    <>
      <Router>
        <header><NavBar></NavBar></header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path ="/plants" element={<Plants />} />
          <Route path ="/about" element={<About />} />
        </Routes>
        <footer><Contact></Contact></footer>
      </Router>
    </>
  )
}

export default App