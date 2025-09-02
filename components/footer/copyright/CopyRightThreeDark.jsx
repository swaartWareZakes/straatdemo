"use client";

import React from "react";
import SocialTwo from "../../social/SocialTwo";

const CopyRightThreeDark = () => {
  return (
    <div className="row align-items-center">
      <div className="col-12 col-md">
        <p className="ptf-footer-copyright has-white-color">
          ©{new Date().getFullYear()}{" "}
          <span>
            Straat Africa
          </span>
          . All Rights Reserved.
        </p>
      </div>

      <div className="col-12 col-md d-none d-xl-block"></div>

      <div className="col-12 col-lg">
        <div className="ptf-footer-socials has-white-color">
          <SocialTwo />
        </div>
      </div>
    </div>
  );
};

export default CopyRightThreeDark;
