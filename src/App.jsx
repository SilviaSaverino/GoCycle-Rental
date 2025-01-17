import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import './App.css'
import Home from './Components/Home/Home.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="GoCycle-Rental/" element={<Home />} />
    </Routes>
  </BrowserRouter>
)
