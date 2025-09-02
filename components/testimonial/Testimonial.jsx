"use client"


import React from "react";
import Slider from "react-slick";

const testimonialContent = [
  {
    descriptions: `“Straat Africa helped us reach thousands of township commuters with our new product. The engagement was incredible — we saw a 40% increase in signups after our campaign ran in the taxis.”`,
    name: "Nomsa Dlamini",
    designation: "Marketing Manager, MzansiBank",
  },
  {
    descriptions: `“We’ve been looking for innovative ways to connect with audiences in the township space, and Straat Africa delivered. The interactive screen campaign was a game-changer.”`,
    name: "Kabelo Mokoena",
    designation: "Brand Strategist, YouthBuzz Agency",
  },
  {
    descriptions: `“Our retail store saw more foot traffic than ever after advertising with Straat Africa. Their platform makes advertising accessible and effective for local businesses.”`,
    name: "Thuli Nkosi",
    designation: "Founder, KasiStyle Fashion",
  },
  {
    descriptions: `“The surveys and QR code interactivity allowed us to gather real-time data from commuters. Straat Africa is redefining how we think about advertising in minibus taxis.”`,
    name: "Siyabonga Mthembu",
    designation: "Insights Lead, UrbanReach Research",
  },
];


const Testimonial = () => {
  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <Slider {...settings} className="arrow-none">
        {testimonialContent.map((val, i) => (
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay="100"
            key={i}
          >
            <div
              className="ptf-testimonial ptf-testimonial--style-2"
              style={{
                "--ptf-text-align": "left",
                "--ptf-content-color": "var(--ptf-color-white)",
                "--ptf-author-color": "var(--ptf-color-white)",
                "--ptf-info-color": "var(--ptf-color-white)",
              }}
            >
              <div className="ptf-testimonial__content">
                <p>{val.descriptions}</p>
              </div>
              <div className="ptf-testimonial__meta">
                <h6 className="ptf-testimonial__author">{val.name}</h6>
                <div className="ptf-testimonial__info">{val.designation}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Testimonial;
