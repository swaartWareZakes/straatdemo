"use client"

import React from "react";

const socialList = [
  {
    iconName: "socicon-twitter",
    link: "https://x.com/StraatAfrica?t=LICMg9hbkpXBf-_WLgOWfg&s=09",
  },
  {
    iconName: "socicon-facebook",
    link: "https://www.facebook.com/share/1AGY8H21wd/",
  },
  {
    iconName: "socicon-instagram",
    link: "https://www.instagram.com/straatafrica?igsh=MXZjb3l3MTM5eWg4cA==",
  },
  {
    iconName: "socicon-linkedin",
    link: "https://www.linkedin.com/company/straat-africa/",
  },
 

];

const SocialTwo = () => {
  return (
    <>
      {socialList.map((val, i) => (
        <a
          className="ptf-social-icon ptf-social-icon--style-1"
          target="_blank"
          rel="noopener noreferrer"
          href={val.link}
          key={i}
        >
          <i className={val.iconName}></i>
        </a>
      ))}
    </>
  );
};

export default SocialTwo;
