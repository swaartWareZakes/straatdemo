import Head from "next/head";
import Award from "../../../components/award/Award";
import HeaderDark from "../../../components/header/HeaderDark";
import FooterThreeDark from "../../../components/footer/FooterThreeDark";
import CopyRightThreeDark from "../../../components/footer/copyright/CopyRightThreeDark";
import Brand from "../../../components/brand/Brand";
import Counter from "../../../components/counter/Counter";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import ImageGrid from "../../../components/image-grid/ImageGrid";
import ServiceOne from "../../../components/service/ServiceOne";
import Testimonial from "../../../components/testimonial/Testimonial";
import Image from "next/image";

export const metadata = {
  title: "About Us || Straat Africa",
};

const AboutUs = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--home-dark">
        <HeaderDark />
      <div className="ptf-site-wrapper__inner">

        <div className="ptf-main">
          <div className="ptf-page ptf-page--home-dark">
            <section>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
              ></div>

              <div className="container-xxl">
                <div className="row align-items-center">
                  <div className="col-xl-6">
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h1 className="large-heading has-white-color">About Straat Africa</h1>
                    </div>
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "2.8125rem" }}
                    ></div>
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="100"
                    >
                      <p className="fz-30 fw-bold text-uppercase has-1-color">
                      BREAKING THE
MOLD IN
TOWNSHIP &amp;
URBAN MEDIA
SOLUTIONS
                      </p>
                    </div>
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
                    ></div>
                    <div className="row">
                      <div className="col-xl-8">
                        <div style={{ maxWidth: "29.6875rem" }}>
                          <div
                            className="ptf-animated-block"
                            data-aos="fade"
                            data-aos-delay="200"
                          >
                            <div className="ptf-divider"></div>
                            <div
                              className="ptf-spacer"
                              style={{
                                "--ptf-xxl": "4.375rem",
                                "--ptf-md": "2.1875rem",
                              }}
                            ></div>
                            <p className="fz-24 has-1-color">
                            Together, let’s
redefine South
Africa’s media
landscape.
We pride ourselves
in delivering
impactful, culturally
attuned media
campaigns, bridging
the gap between
commercial
excellence and
positive social
change. From
bustling urban
centres to vibrant
peri-urban
communities, our
innovative media
solutions captivate
audiences and
deliver measurable
results.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xl": "5.625rem" }}
                    ></div>
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="300"
                    >
                      <div className="text-center">
                        <div className="ptf-mask-image">
                          <img
                            width={1200}
                            height={1200}
                            src="/assets/img/root/about-us/about-us-main-image-mask.png"
                            alt="layer"
                            loading="lazy"
                            className="lay2"
                            style={{ zIndex: "1" }}
                            srcSet="https://iili.io/Ke7nV24.png"
                          />
                          <img
                            src="/assets/img/root/about-us/banner.png"
                            alt="layer"
                            loading="lazy"
                            style={{ zIndex: "2" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            <section>
              <div className="container-xxl">
                <div className="ptf-divider" style={{color: "white !important"}}></div>
              </div>
            </section>

            <section>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-lg-3">
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className=" large-heading has-white-color" style={{color:"white !important"}}>
                        Our <br /> Services
                      </h2>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "2.5rem" }}
                      ></div>
                      <p className="fz-18 has-1-color">
                      Leading the charge
with South Africa’s
widest reach of In-
Taxi TV screens, we
also specialise in a
diverse range of
media solutions
designed to reach
South Africa’s
dynamic audiences:
                      </p>
                    </div>
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-lg": "4.375rem", "--ptf-md": "2.1875rem" }}
                    ></div>
                  </div>
                  <div className="col-lg-8 offset-lg-1">
                    <ServiceOne />
                  </div>
                </div>
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "7.5rem", "--ptf-md": "3.75rem" }}
                ></div>
                <ImageGrid />
              </div>
            </section>

            <section>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-12">
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="large-heading has-white-color">Our Partners</h2>
                    </div>
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "7.5rem", "--ptf-md": "3.75rem" }}
                    ></div>
                  </div>
                </div>
                <Brand />
                <div className="row">
                  <div className="col-12">
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}
                    ></div>
                    <div className="ptf-divider"></div>
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                    ></div>
                  </div>
                </div>
                <Counter />
              </div>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            <section
              className="jarallax jarallax-img position-relative"
              style={{
                backgroundImage: `url(/assets/img/testi.png)`,
              }}
            >
              {/* Dark overlay */}
              <div
                style={{
                  content: "''",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.6)", // adjust opacity here
                  zIndex: 1,
                }}
              ></div>

              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "12.5rem", "--ptf-md": "6.25rem", position: "relative", zIndex: 2 }}
              ></div>
              <div className="container-xxl" style={{ position: "relative", zIndex: 2 }}>
                <div className="row">
                  <div className="col-xl-4">
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    ></div>
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xl": "3.75rem" }}
                    ></div>
                  </div>
                  <div className="col-xl-8">
                    <Testimonial />
                  </div>
                </div>
              </div>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "12.5rem", "--ptf-md": "6.25rem", position: "relative", zIndex: 2 }}
              ></div>
            </section>


            {/* <section>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "11.875rem", "--ptf-md": "5.9375rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-lg-4">
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="h1 large-heading has-white-color">
                        Our
                        <br /> Awards
                      </h2>
                    </div>
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-lg": "3.75rem" }}
                    ></div>
                  </div>
                  <div className="col-lg-8">
                    <Award />
                  </div>
                </div>
              </div>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section> */}
          </div>
        </div>

        <footer className="ptf-footer ptf-footer--style-5">
          <div className="container-xxl">
            <div className="ptf-footer__top">
              <FooterThreeDark />
            </div>
            <div className="ptf-footer__bottom">
              <CopyRightThreeDark />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AboutUs;
