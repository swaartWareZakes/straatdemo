"use client";

import Image from "next/image";

const brandContent = [
  {
    delayAnimation: "0",
    hoverBg: "#fffdee", // soft yellow
    imgHeight: "85px",
    imgName: "partner-taxiunion", // assets/img/root/partners/partner-taxiunion.png
    title: "SA Taxi Union",
  },
  {
    delayAnimation: "100",
    hoverBg: "#fff9e6",
    imgHeight: "78px",
    imgName: "partner-telecom", // assets/img/root/partners/partner-telecom.png
    title: "TownLink Telecom",
  },
  {
    delayAnimation: "200",
    hoverBg: "#fffbe6",
    imgHeight: "90px",
    imgName: "partner-ads", // assets/img/root/partners/partner-ads.png
    title: "Billboard Bros",
  },
  {
    delayAnimation: "300",
    hoverBg: "#fffde3",
    imgHeight: "90px",
    imgName: "partner-wifi", // assets/img/root/partners/partner-wifi.png
    title: "Data4All",
  },
  {
    delayAnimation: "400",
    hoverBg: "#fffbeb",
    imgHeight: "62px",
    imgName: "partner-retail", // assets/img/root/partners/partner-retail.png
    title: "Spaza Connect",
  },
  {
    delayAnimation: "500",
    hoverBg: "#fff7d9",
    imgHeight: "77px",
    imgName: "partner-events", // assets/img/root/partners/partner-events.png
    title: "Taxi Fest",
  },
];

const Brand = () => {
  return (
    <div className="row" style={{ "--bs-gutter-y": "2rem" }}>
      {brandContent.map((item, i) => (
        <div className="col-6 col-md-3 col-lg-2" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={item.delayAnimation}
          >
            {/* <!--Partner Box--> */}
            <div
              className="ptf-partner-box"
              style={{
                "--ptf-hover-background": item.hoverBg,
                "--ptf-image-height": item.imgHeight,
              }}
            >
              <div className="ptf-partner-box__image">
                <Image
                  width={200}
                  height={200}
                  style={{
                    width: "108px",
                    height: "90px",
                    objectFit: "contain",
                  }}
                  src={`/assets/img/root/partners/${item.imgName}.png`}
                  alt={item.title}
                  loading="lazy"
                />
              </div>
              <h6 className="ptf-partner-box__title">{item.title}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Brand;
