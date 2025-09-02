"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { portfolioContentmasonry } from "../../data/works";

const breakpointColumnsObj = {
  default: 2,
  1100: 2,
  768: 2,
  500: 1,
};

// Updated filter menu for Straat Africa
const portfolioMenu = [
  "All",
  "Branding",
  "Digital",
  "OOH",
  "Taxi Ads",
  "Billboards",
];

const PortfolioSevenMasonry = () => {
  const [pageItems, setPageItems] = useState([]);
  const [tabActive, setTabActive] = useState("All");

  useEffect(() => {
    if (tabActive === "All") {
      setPageItems(portfolioContentmasonry);
    } else {
      const filteredItems = portfolioContentmasonry.filter((elm) =>
        elm.meta
          .toLowerCase()
          .split(",")
          .map((meta) => meta.trim())
          .includes(tabActive.toLowerCase().trim())
      );
      setPageItems(filteredItems);
    }
  }, [tabActive]);

  return (
    <div>
      {/* Filter Menu */}
      <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
        <div className="ptf-filters ptf-filters--style-1">
          {portfolioMenu.map((item, i) => (
            <div
              key={i}
              onClick={() => setTabActive(item)}
              className={`filter-item ${
                tabActive === item ? "active-page has-1-color" : ""
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Spacer */}
      <div
        className="ptf-spacer"
        style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
      ></div>

      {/* Masonry Grid */}
      <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid ptf-isotope-grid portfolio-isotope"
          columnClassName="my-masonry-grid_column"
        >
          {pageItems.map((singleItem, i) => (
            <article
              className="ptf-work ptf-work--style-1 ptf-work-dark"
              key={i}
            >
              <div className="ptf-work__media">
                <Link
                  className="ptf-work__link"
                  href={`/`}
                ></Link>
                <Image
                  width={1200}
                  height={1200}
                  style={{ width: "100%", height: "100%" }}
                  src={singleItem.img}
                  alt={singleItem.title}
                  loading="lazy"
                />
              </div>
              <div className="ptf-work__meta has-white-color">
                <div className="ptf-work__category has-1-color">
                  {singleItem.meta}
                </div>
                <h4 className="ptf-work__title has-white-color">
                  <Link href={`/`}>{singleItem.title}</Link>
                </h4>
              </div>
            </article>
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default PortfolioSevenMasonry;