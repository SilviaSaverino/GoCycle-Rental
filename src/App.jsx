import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="GoCycle-Rental/" element={<HomePage />} />
      <Route path="about/" element={<About />} />
    </Routes>
  </BrowserRouter>
)
