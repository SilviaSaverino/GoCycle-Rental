import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import "../server"
import './App.css'
import HomePage from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import ContactUs from './Pages/Contact Us/Contact.jsx'
import Help from './Pages/Help/Help.jsx'
import HireBike from './Pages/Hire Bike/Bikes.jsx'
import BikeInfo from './Pages/Hire Bike/BikeInfo.jsx'
import Layout from './Components/Layout/Layout.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/GoCycle-Rental">
    <Routes>
      <Route element={<Layout/>}>
        <Route path="GoCycle-Rental/" element={<HomePage />} />
        <Route path="about/" element={<About />} />
        <Route path="contactus/" element={<ContactUs />} />
        <Route path="help/" element={<Help />} />
        <Route path="hirebike/" element={<HireBike />} />
        <Route path="/bikeinfo/:id" element={<BikeInfo />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
