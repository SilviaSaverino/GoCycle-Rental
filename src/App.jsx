import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import "../server"
import './App.css'
// Navigation Pages
import HomePage from './Pages/Home/Home.jsx'
import ContactUs from './Pages/Contact Us/Contact.jsx'
import Help from './Pages/Help/Help.jsx'
import Reviews from './Pages/Reviews/Reviews.jsx'
// 404 Page
import PageNotFound from './Pages/404 Page/404.jsx'
//Layouts
import AboutLayout from './Components/AboutLayout/AboutLayout.jsx'
import Layout from './Components/Layout/Layout.jsx'
//About Us page and dashboard
import AboutUs from './Pages/About/AboutUs.jsx'
import Gallery from './Pages/About/Dashboard/Gallery/Gallery.jsx'
//Hire Bike 
import HireBike from './Pages/Hire Bike/Bikes.jsx'
import BikeInfo from './Pages/Hire Bike/BikeInfo.jsx'
// Hire Bike Dashboard
import Intro from './Pages/Hire Bike/Dashboard/Intro/Intro.jsx'
import Specification from './Pages/Hire Bike/Dashboard/Specification/Specification.jsx'
import Geometry from './Pages/Hire Bike/Dashboard/Geometry/Geometry.jsx'
import BikeReview from './Pages/Hire Bike/Dashboard/BikeReview/BikeReview.jsx'
// User Login and Auth
import Login from './Pages/Login/Login.jsx'
import AuthRequired from './Pages/Auth/AuthRequired.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/GoCycle-Rental">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="about" element={<AboutLayout />} >
          <Route index element={<AboutUs />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>

        <Route path="reviews" element={<Reviews />} />
        <Route path="help/" element={<Help />} />
        <Route path="hirebike/" element={<HireBike />} />
        <Route path="login/" element={<Login />} />

        <Route element={<AuthRequired />}>
          <Route path="bikeinfo/:id" element={<BikeInfo />} >
            <Route index element={<Intro />} />
            <Route path="specification" element={<Specification />} />
            <Route path="geometry" element={<Geometry />} />
            <Route path="bikereview" element={<BikeReview />} />
          </Route>
        </Route>

      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
)