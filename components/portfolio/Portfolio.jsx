"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
const Slider = dynamic(() => import("react-slick"), { ssr: false });

import { portfolioContent } from "../../data/works";

const Portfolio = () => {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    centerPadding: "0",
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,
    responsive: [
      { breakpoint: 991, settings: { slidesToShow: 2, dots: true, centerMode: false } },
      { breakpoint: 576, settings: { slidesToShow: 1, dots: true } },
    ],
  };

  return (
    <div className="ptf-content-slider swiper-container slide-portfolio">
      <div className="swiper-wrapper">
        <Slider {...settings}>
          {portfolioContent.map((item, i) => (
            <article className="ptf-work ptf-work--style-3" key={i}>
              {/* Consistent aspect ratio so faces don’t get cut off */}
              <div
                className="ptf-work__media"
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4 / 5", // uniform portrait shape
                  overflow: "hidden",
                  borderRadius: 12,
                }}
              >
                <Link href="/" className="ptf-work__link" />
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1400px) 30vw, (min-width: 992px) 33vw, (min-width: 576px) 50vw, 100vw"
                  quality={90}
                  priority={i < 3}
                  style={{
                    objectFit: "cover",
                    objectPosition: item.focal || "50% 20%", // crop slightly upward by default
                  }}
                />
              </div>

              <div className="ptf-work__meta">
                <div className="ptf-work__category">{item.categorie}</div>
                <h4 className="ptf-work__title">
                  <Link href="/">{item.title}</Link>
                </h4>
              </div>
            </article>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Portfolio;
