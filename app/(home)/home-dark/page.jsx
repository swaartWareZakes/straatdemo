import Link from "next/link";
import HeaderDark from "../../../components/header/HeaderDark";
import FooterThreeDark from "../../../components/footer/FooterThreeDark";
import CopyRightThreeDark from "../../../components/footer/copyright/CopyRightThreeDark";
import HeroDark from "../../../components/hero/HeroDark";
import Portfolio from "../../../components/portfolio/Portfolio";
import ContactJarallax from "../../../components/jarallax/ContactJarallax";
import ServiceListFour from "../../../components/list/ServiceListFour";
import BrandFive from "../../../components/brand/BrandFive";
import TestimonialFour from "../../../components/testimonial/TestimonialFour";

export const metadata = {
  title: "Home || Straat Africa – Media in Motion",
};

const HomeDark = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--home-dark ">
      <HeaderDark />

      <div className="ptf-site-wrapper__inner">
        <div className="ptf-main">
          <div className="ptf-page ptf-page--home-dark"></div>

          {/* Hero Section */}
          <section>
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "4.375rem", "--ptf-md": "2.1875rem" }}
            ></div>

            <div className="container-xxl">
              <HeroDark />
            </div>

            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
          </section>

          {/* Divider */}
          <section>
            <div className="container-xxl">
              <div
                className="ptf-divider"
                style={{
                  "--ptf-height": "1px",
                  "--ptf-color": "var(--ptf-color-white)",
                }}
              ></div>
            </div>
          </section>

          {/* Services */}
          <section className="ptf-custom--1674">
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
            ></div>

            <div className="container-xxl">
              <div className="row" style={{ "--bs-gutter-y": "3.75rem" }}>
                <div className="col-lg-3">
                  <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
                    <div className="fz-80 has-white-color lh-1">1</div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>
                  <div className="ptf-animated-block" data-aos="fade" data-aos-delay="100">
                    <h2 className="fz-16 lh-1p5 text-uppercase has-3-color fw-normal">
                      What <br /> We Do
                    </h2>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="row">
                    <ServiceListFour />
                  </div>
                </div>
              </div>
            </div>

            <div className="ptf-spacer" style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}></div>

            <div className="container-xxl">
              <div
                className="ptf-divider"
                style={{
                  "--ptf-height": "1px",
                  "--ptf-color": "var(--ptf-color-white)",
                }}
              ></div>
            </div>

            <div className="ptf-spacer" style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}></div>

            <div className="container-xxl">
              <div className="row" style={{ "--bs-gutter-y": "3.75rem" }}>
                <div className="col-lg-3">
                  <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
                    <div className="fz-80 has-white-color lh-1">2</div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>
                  <div className="ptf-animated-block" data-aos="fade" data-aos-delay="100">
                    <h2 className="fz-16 lh-1p5 text-uppercase has-3-color fw-normal">
                      On the <br /> Streets
                    </h2>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>
                  <div className="ptf-animated-block" data-aos="fade" data-aos-delay="200">
                    <Link className="ptf-link-with-arrow fz-48 has-3-color" href="/works">
                      Our Campaigns
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ height: "1em" }} viewBox="0 0 17 17">
                        <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="ptf-spacer" style={{ "--ptf-xxl": "5.625rem" }}></div>

              <div className="row">
                <div className="col-lg-12 has-dark-color">
                  <Portfolio />
                </div>
              </div>
            </div>

            <div className="ptf-spacer" style={{ "--ptf-xxl": "10rem", "--ptf-md": "9rem" }}></div>
          </section>

          {/* Divider */}
          <section>
            <div className="container-xxl">
              <div className="ptf-divider" style={{ "--ptf-height": "1px", "--ptf-color": "var(--ptf-color-white)" }}></div>
            </div>
          </section>

          {/* Trusted Partners */}
          <section>
            <div className="ptf-spacer" style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}></div>

            <div className="container-xxl">
              <div className="row" style={{ "--bs-gutter-y": "3.75rem" }}>
                <div className="col-lg-3">
                  <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
                    <div className="fz-80 has-white-color lh-1">3</div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>
                  <div className="ptf-animated-block" data-aos="fade" data-aos-delay="100">
                    <h2 className="fz-16 lh-1p5 text-uppercase has-3-color fw-normal">
                      Trusted <br /> Partners
                    </h2>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="row">
                    <BrandFive />
                  </div>
                </div>
              </div>
            </div>

            <div className="ptf-spacer" style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}></div>
          </section>

          {/* Divider */}
          <section>
            <div className="container-xxl">
              <div className="ptf-divider" style={{ "--ptf-height": "1px", "--ptf-color": "var(--ptf-color-white)" }}></div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="ptf-custom--1772">
            <div className="ptf-spacer" style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}></div>
            <div className="container-xxl">
              <div className="row" style={{ "--bs-gutter-y": "3.75rem" }}>
                <div className="col-lg-3">
                  <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
                    <div className="fz-80 has-white-color lh-1">4</div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>
                  <div className="ptf-animated-block" data-aos="fade" data-aos-delay="100">
                    <h2 className="fz-16 lh-1p5 text-uppercase has-3-color fw-normal">
                      What <br /> Our Partners Say
                    </h2>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="ptf-animated-block" data-aos="fade" data-aos-delay="200">
                    <TestimonialFour />
                  </div>
                </div>
              </div>
            </div>

            <div className="ptf-spacer" style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}></div>
          </section>

          {/* Contact Section */}
          <section
            className="jarallax jarallax-img position-relative"
            style={{
              backgroundImage: `url(https://iili.io/Ke5vdsS.png)`,
            }}
          >
            {/* Dark overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(0, 0, 0, 0.1)", // adjust opacity as needed
                zIndex: 1,
              }}
            />

            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "12.5rem", "--ptf-md": "6.25rem", position: "relative", zIndex: 2 }}
            ></div>

            <div style={{ position: "relative", zIndex: 2 }}>
              <ContactJarallax />
            </div>

            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem", position: "relative", zIndex: 2 }}
            ></div>
          </section>

        </div>
      </div>

      {/* Footer */}
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
  );
};

export default HomeDark;
