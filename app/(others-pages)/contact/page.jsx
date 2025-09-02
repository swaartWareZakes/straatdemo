

import HeaderDark from "../../../components/header/HeaderDark";
import FooterThreeDark from "../../../components/footer/FooterThreeDark";
import CopyRightThreeDark from "../../../components/footer/copyright/CopyRightThreeDark";
import Social from "../../../components/social/Social";
import ContactForm from "../../../components/ContactForm";
import Address from "../../../components/Address";

export const metadata = {
  title: "Contact || Straat Africa",
};

const Contact = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--home-dark">
      <HeaderDark />

      <div className="ptf-site-wrapper__inner">
        <div className="ptf-main">
          <div className="ptf-page ptf-page--contact">

            {/* === CONTACT HEADER === */}
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
                      Hit us up and let’s
make magic
together!
                      </h1>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "3rem", "--ptf-md": "2.5rem" }}
                      ></div>
                      <Social />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
              ></div>
            </section>

            {/* === CONTACT FORM === */}
            <section>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-lg-4">
                    <Address />
                  </div>
                  <div className="col-lg-8">
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="300"
                    >
                      <h5 className="fz-14 text-uppercase has-3-color fw-normal">
                        Tell us about your project and goals.
                      </h5>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "3.125rem" }}
                      ></div>
                      <ContactForm />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>
          </div>
        </div>

        {/* === FOOTER === */}
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

export default Contact;
