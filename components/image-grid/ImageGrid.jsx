"use client";

import { Gallery, Item } from "react-photoswipe-gallery";
import Image from "next/image";

const imageList = [
  { img: "https://iili.io/KeDLe5X.png", delayAnimation: "0" },
  { img: "https://iili.io/KetYAsn.png", delayAnimation: "100" },
  // { img: "https://iili.io/KebOHaR.png", delayAnimation: "0" },
  // { img: "https://iili.io/Kebemdv.png", delayAnimation: "100" },

];

const ImageGrid = () => {
  return (
    <Gallery>
      <div className="row" style={{ "--bs-gutter-y": "2rem" }}>
        {imageList.map((val, i) => (
          <div className="col-6" key={i}>
            <div
              className="ptf-animated-block"
              data-aos="fade"
              data-aos-delay={val.delayAnimation}
            >
              <div
                className="ptf-simple-image"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "600px", // fixed height for uniform layout
                  overflow: "hidden",
                  borderRadius: "10px",
                }}
              >
                <Item
                  original={val.img}
                  thumbnail={val.img}
                  width={745}
                  height={600}
                >
                  {({ ref, open }) => (
                    <Image
                      src={val.img}
                      alt="gallery"
                      width={745}
                      height={600}
                      ref={ref}
                      onClick={open}
                      role="button"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover", // ensures even crop
                        objectPosition: "center",
                        cursor: "pointer",
                        transition: "transform 0.4s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "scale(1.03)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                  )}
                </Item>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Gallery>
  );
};

export default ImageGrid;
