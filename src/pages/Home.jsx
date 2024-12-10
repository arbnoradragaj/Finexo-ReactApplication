import React, { useState, useEffect } from 'react';
import About from "./About.jsx";
import Services from './Services.jsx';
import WhyUs from "./WhyUs.jsx";
import Team from "./Team.jsx";
import Costumers from "./Costumers.jsx";

const Home = () => {
  // State to track the active slide index
  const [activeIndex, setActiveIndex] = useState(0);

  // Array of slides with title, description, and image for each slide
  const slides = [
    {
      title: "CRYPTO CURRENCY",
      description: "Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequitur.",
      img: "images/slider-img.png"
    },
    {
      title: "BLOCKCHAIN TECHNOLOGY",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      img: "https://projekti-final-bit.netlify.app/images/slider-img.png"
    },
    {
      title: "DEFI SYSTEM",
      description: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
      img: "https://projekti-final-bit.netlify.app/images/slider-img.png"
    }
  ];

  // Function to go to a specific slide
  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  // Automatic slide movement using useEffect hook
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); 

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [slides.length]);

  
  return (
    <div>
      {/* Hero section with background image and slider */}
      <div className="hero_area">
        <div className="hero_bg_box">
          <div className="bg_img_box">
            <img src="images/hero-bg.png" alt="Hero Background" />
          </div>
        </div>

        {/* Slider content */}
        <div className="home-container shared-background">
          <div className="slider-wrapper">
            <div
              className="slider-content"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }} 
            >
              {slides.map((slide, index) => (
                <div className="slide" key={index}>
                  <div className="content-section">
                    <h1 className="main-heading">{slide.title}</h1>
                    <p className="description">{slide.description}</p>
                    <button className="btn">Read More</button>
                  </div>
                  <div className="image-section">
                    <img src={slide.img} alt="Slide Illustration" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

     
      <div className="pagination">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${activeIndex === index ? 'active' : ''}`} 
            onClick={() => goToSlide(index)} 
          ></span>
        ))}
      </div>

      <Services />
      <About />
      <WhyUs />
      <Team />
      <Costumers />
    </div>
  );
};

export default Home;
