"use client"

import React from "react";

const Address = () => {
  return (
    <>
      {/* Address Block */}
      <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
        <h5 className="fz-14 text-uppercase has-3-color fw-normal">Address</h5>
        <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>
        <p className="fz-20 lh-1p5 has-white-color">
          21 Commissioner Street<br />
          Johannesburg CBD<br />
          South Africa
        </p>
      </div>

      <div className="ptf-spacer" style={{ "--ptf-xxl": "2.1875rem" }}></div>

      {/* Email Block */}
      <div className="ptf-animated-block" data-aos="fade" data-aos-delay="100">
        <h5 className="fz-14 text-uppercase has-3-color fw-normal">Email</h5>
        <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>
        <p className="fz-20 lh-1p5 has-white-color">
          <a href="mailto:info@straatafrica.co.za">info@straatafrica.co.za</a>
          <br />
          <a href="mailto:partnerships@straatafrica.co.za">partnerships@straatafrica.co.za</a>
        </p>
      </div>

      <div className="ptf-spacer" style={{ "--ptf-xxl": "2.1875rem" }}></div>

      {/* Phone Block */}
      <div className="ptf-animated-block" data-aos="fade" data-aos-delay="200">
        <h5 className="fz-14 text-uppercase has-3-color fw-normal">Phone</h5>
        <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>
        <p className="fz-20 lh-1p5 has-white-color">
          <a href="tel:+27601234567">+27 60 123 4567</a>
        </p>
      </div>

      <div
        className="ptf-spacer"
        style={{ "--ptf-lg": "4.375rem", "--ptf-md": "2.1875rem" }}
      ></div>
    </>
  );
};

export default Address;
