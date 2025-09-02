"use client";

import React from "react";

const testimonialContent = {
  descriptions: `“Straat Africa helped us launch our product straight into the heart of the township. Real reach, real impact — we saw results within days.”`,
  name: "Lebo Mokoena",
  designation: "Brand Manager, KasiKicks",
};

const TestimonialFour = () => {
  return (
    <div
      className="ptf-testimonial ptf-testimonial--style-3"
      style={{
        "--ptf-content-color": "var(--ptf-color-white)",
        "--ptf-author-color": "var(--ptf-color-white)",
        "--ptf-text-align": "left",
      }}
    >
      <div className="ptf-testimonial__content">
        <p>{testimonialContent.descriptions}</p>
      </div>
      <div className="ptf-testimonial__meta">
        <h6 className="ptf-testimonial__author">{testimonialContent.name}</h6>
        <div className="ptf-testimonial__info">
          {testimonialContent.designation}
        </div>
      </div>
    </div>
  );
};

export default TestimonialFour;
