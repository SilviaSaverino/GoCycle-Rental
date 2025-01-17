import { React } from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import HeroImg from '../../assets/img/hero.png'
import seatIcon from '../../assets/img/seat_icon.png'
import steeringWheelIcon from '../../assets/img/steering_wheel_icon.png'
import gearIcon from '../../assets/img/gear_icon.png'

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div className='container'>
        <img src={HeroImg} alt="" />
        <div className='intro'>
          <h1><span>Go</span>Cycle</h1>
          <h2>Find the best bike rental deals in your city</h2>
          <p>
            Discover the freedom of exploring on two wheels with our top-quality rental bikes.
            Whether you're a casual rider, a mountain trail enthusiast, or an urban explorer,
            we have the perfect bike for your journey.
          </p>
          <ul className="iconList">
            <li>
              <img src={steeringWheelIcon} alt="" />
              <p><span>Wide Range of Bikes:</span> Choose from mountain bikes, road bikes, e-bikes, and more.</p>
            </li>
            <li>
              <img src={seatIcon} alt="" />
              <p><span>Eco-Friendly:</span> Embrace sustainable travel while enjoying breathtaking
              trails and scenic routes.</p>
            </li>
            <li>
              <img src={gearIcon} alt="" />
              <p><span>Exceptional Service:</span>&nbsp; Each bike is expertly maintained for a
              safe and smooth ride.</p>
            </li>
          </ul>
          <button className='intro_btn'>Hire a bike</button>
          </div>
      </div>
    </>
  )
}

export default App


