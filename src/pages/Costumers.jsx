import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

const Costumers = () => {
  const testimonials = [
    {
      name: "LusDen",
      title: "some great things As",
      message:
        "It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. To come to the smallest detail, who",
      img: "/images/client1.jpg",
    },
    {
      name: "Zen Court",
      title: "some great things As",
      message:
        "It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. To come to the smallest detail, who",
      img: "/images/client2.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <h2>
        What says our <span style={{ color: "#00bbf0" }}>Customers</span>
      </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-box">
            <div className="testimonial-img">
              <img src={testimonial.img} alt={testimonial.name} />
            </div>
            <div className="testimonial-content">
              <h3>{testimonial.name}</h3>
              <h4>{testimonial.title}</h4>
              <p>{testimonial.message}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Costumers;
