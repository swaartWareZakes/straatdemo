import HeaderDark from "../../../components/header/HeaderDark";
import FooterThreeDark from "../../../components/footer/FooterThreeDark";
import CopyRightThreeDark from "../../../components/footer/copyright/CopyRightThreeDark";
import PortfolioSevenMasonry from "../../../components/portfolio/PortfolioSevenMasonry";

export const metadata = {
  title: "Works || Straat Africa",
};

const WorksMasonry = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--home-dark">
      <HeaderDark />
      <div className="ptf-site-wrapper__inner">
        <div className="main">
          <div className="ptf-page ptf-page--portfolio-masonry">
            <section>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>

              <div className="container-xxl">
                <div className="row">
                  <div className="col-xl-10">
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h1 className="large-heading has-white-color">
                        Our Works
                      </h1>
                      <p className="fz-24 has-1-color mt-3">
                        Discover how Straat Africa connects brands with
                        township commuters through impactful campaigns and
                        digital innovations.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "4.375rem" }}
                ></div>
              </div>
            </section>

            {/*=============================================
              Start Portfolio Masonry
            ============================================== */}
            <section>
              <div className="container-xxl">
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <div
                    className="ptf-isotope-grid row"
                    style={{
                      "--bs-gutter-x": "4rem",
                      "--bs-gutter-y": "5.75rem",
                    }}
                  >
                    <PortfolioSevenMasonry />
                  </div>
                </div>

                {/* <div className="text-center">
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <a className="ptf-load-more" href="#">
                      More
                    </a>
                  </div>
                </div> */}
              </div>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>
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

export default WorksMasonry;