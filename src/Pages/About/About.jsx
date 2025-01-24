import React from "react"
import "./About.css"
import About1 from "../../assets/img/about/About1.png"
import About3 from "../../assets/img/about/About3.png"
import About4 from "../../assets/img/about/About4.png"
import About5 from "../../assets/img/about/About5.png"
import Locations from "../../assets/img/about/Locations.png"

export default function About() {
    return (
        <article className="about-article">
            <div className="about-container">
                <h1>About <span>Go</span>Cycle Rental</h1>
                <p>Welcome to <strong>GoCycle Rental</strong> – Your Partner for the Perfect Ride!</p>

                <h2>Who We Are</h2>
                <p>At GoCycle Rental, our story began in the late 1870s when our great-great-grandfather opened a humble bicycle repair shop on a quiet cobblestone street. Back then, bicycles were more than just a way to get around—they were a symbol of freedom, adventure, and innovation. Over the generations, our family’s passion for cycling grew, and what started as a small workshop turned into a cherished tradition passed down through the years.



                    <p>Today, we honor that legacy by sharing our love for bicycles with the world. At GoCycle Rental, we believe a bike ride is more than just a journey; it’s a way to connect—with the road, with nature, and with yourself. From our family to yours, we’re here to help you experience the joy of the perfect ride, just as we have for over a century.</p>
                </p>
                <div className="row">
                <div className="column">
                    <img src={About1} alt="" />
                    <img src={About5} alt="" />

                </div>
                <div className="column">

                    <img src={About3} alt="" />
                    <img src={About4} alt="" />
                </div>
            </div>
                <h2>Why Choose GoCycle Rental?</h2>
                <ul>
                    <li><strong>Wide Selection of Bikes:</strong> From road bikes and mountain bikes to e-bikes and cruisers, we offer a diverse range of high-quality bicycles to match your needs and preferences.</li>
                    <li><strong>Affordable and Flexible Options:</strong> We believe everyone deserves to ride. That’s why we offer competitive pricing and rental plans, whether you need a bike for a few hours, a day, or an extended adventure.</li>
                    <li><strong>Eco-Friendly Mission:</strong> Every ride you take with GoCycle contributes to reducing carbon emissions and building a cleaner, greener planet.</li>
                    <li><strong>Convenient Locations:</strong> With multiple pickup points and delivery options, getting your dream ride has never been easier.</li>
                    <img src={Locations} alt="" />
                </ul>

                <h2>Our Mission</h2>
                <p>To inspire people to explore, connect, and enjoy life on two wheels. At GoCycle Rental, we’re more than just a bike rental service – we’re a movement towards a healthier lifestyle and a more sustainable future.</p>

                <h2>Our Vision</h2>
                <p>We envision a world where cycling is the go-to choice for travel, leisure, and adventure. By offering a seamless rental experience and a commitment to excellence, we aim to build a community of riders who share our love for cycling.</p>
            </div>
            
        </article >

    )
}