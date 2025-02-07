import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import "../server"
import './App.css'
import HomePage from './Pages/Home/Home.jsx'
import AboutLayout from './Components/AboutLayout/AboutLayout.jsx'
import AboutUs from './Pages/About/AboutUs.jsx'
import ContactUs from './Pages/Contact Us/Contact.jsx'
import Help from './Pages/Help/Help.jsx'
import HireBike from './Pages/Hire Bike/Bikes.jsx'
import BikeInfo from './Pages/Hire Bike/BikeInfo.jsx'
import Layout from './Components/Layout/Layout.jsx'
import Gallery from './Pages/Gallery/Gallery.jsx'
import Reviews from './Pages/Reviews/Reviews.jsx'
import Intro from './Pages/Hire Bike/Dashboard/Intro/Intro.jsx'
import Specification from './Pages/Hire Bike/Dashboard/Specification/Specification.jsx'
import Geometry from './Pages/Hire Bike/Dashboard/Geometry/Geometry.jsx'
import Review from './Pages/Hire Bike/Dashboard/Review/Review.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/GoCycle-Rental">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="about" element={<AboutLayout />} >
          <Route index element={<AboutUs />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="contactus/" element={<ContactUs />} />
        <Route path="help/" element={<Help />} />
        <Route path="hirebike/" element={<HireBike />} />

        <Route path="bikeinfo/:id" element={<BikeInfo />} >
          <Route index element={<Intro />} />
          <Route path="specification" element={<Specification />} />
          <Route path="geometry" element={<Geometry />} />
          <Route path="review" element={<Review />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
)