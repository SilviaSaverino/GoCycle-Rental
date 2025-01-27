import React from "react";
import "./AboutUs.css";
import About1 from "../../assets/img/about/About1.png";
import About3 from "../../assets/img/about/About3.png";
import About4 from "../../assets/img/about/About4.png";
import About5 from "../../assets/img/about/About5.png";
import Locations from "../../assets/img/about/Locations.png";
import Mission from "../../assets/img/about/Mission.png";
import Vision from "../../assets/img/about/Vision.png";

export default function AboutUs() {
    return (
        <article className="about-article">
            <div className="about-container">
                <div className="about-top-section">
                    <div className="about-top-text">
                        <h2>Who We Are</h2>
                        <p>At <span>Go</span>Cycle Rental, our story began in the late 1870s when our great-great-grandfather
                            opened a humble bicycle repair shop on a quiet cobblestone street.
                        </p>
                        <br />
                        <p>Back then, bicycles were more than just a way to get around—they were a
                            symbol of freedom, adventure, and innovation. Over the generations,
                            our family’s passion for cycling grew, and what started as a small workshop
                            turned into a cherished tradition passed down through the years.</p>
                        <br />
                        <p>Today, we honor that legacy by sharing our love for bicycles with the world.
                            At <span>Go</span>Cycle Rental, we believe a bike ride is more than just a journey; it’s a
                            way to connect—with the road, with nature, and with yourself.
                            <br />From our family to yours, we’re here to help you experience the joy
                            of the perfect ride, just as we have for over a century.</p>
                    </div>
                    <div className="about-top-images">
                        <img src={About1} alt="Nostalgic pic of GoCycle shop and founders" />
                        <img src={About5} alt="Nostalgic pic of GoCycle shop and founders" />
                        <img src={About3} alt="Nostalgic pic of GoCycle shop and founders" />
                        <img src={About4} alt="Nostalgic pic of GoCycle shop and founders" />
                    </div>
                </div>

                <div className="about-middle-section">
                    <h2>Why Choose GoCycle Rental?</h2>
                    <ul>
                        <li><strong>Wide Selection of Bikes:</strong> From road bikes and mountain bikes to e-bikes and cruisers, we offer a diverse range of high-quality bicycles to match your needs and preferences.</li>
                        <li><strong>Affordable and Flexible Options:</strong> We believe everyone deserves to ride. That’s why we offer competitive pricing and rental plans, whether you need a bike for a few hours, a day, or an extended adventure.</li>
                        <li><strong>Eco-Friendly Mission:</strong> Every ride you take with <span>Go</span>Cycle contributes to reducing carbon emissions and building a cleaner, greener planet.</li>
                        <li><strong>Convenient Locations:</strong> With multiple pickup points and delivery options, getting your dream ride has never been easier.</li>
                    </ul>
                    <img src={Locations} alt="Image of location pins for Gocycle Bike" className="locations-img" />
                </div>

                <div className="about-bottom-section">
                    <div className="about-mission">
                        <h2>Our Mission</h2>
                        <p>To inspire people to explore, connect, and enjoy life on two wheels. At <span>Go</span>Cycle Rental, we’re more than just a bike rental service – we’re a movement towards a healthier lifestyle and a more sustainable future.</p>
                        <img src={Mission} alt="icons of cycles scenarios" />
                    </div>
                    <div className="about-vision">
                        <h2>Our Vision</h2>
                        <p>We envision a world where cycling is the go-to choice for travel, leisure, and adventure. By offering a seamless rental experience and a commitment to excellence, we aim to build a community of riders who share our love for cycling.</p>
                        <img src={Vision} alt="icons of cycles scenarios" />
                    </div>
                </div>
            </div>

        </article>
    );
}