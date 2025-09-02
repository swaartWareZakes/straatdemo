import FooterList from "../list/FooterList";
import Image from "next/image";

const FooterThreeDark = () => {
  return (
    <div className="row">
      <div className="col-12 col-lg">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <a href="#">
            <Image
              width={141}
              height={46}
              src="/assets/img/root/white2.png"
              alt="Straat Africa Logo"
              loading="lazy"
            />
          </a>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12 col-lg">
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="100"
        >
          <div className="ptf-widget ptf-widget-links has-white-color">
            <FooterList />
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12 col-lg">
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="200"
        >
          <div className="ptf-widget ptf-widget-text">
            <a className="fz-36 has-white-color" href="mailto:info@straatafrica.com">
              info@straatafrica.com
            </a>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "0.625rem" }}
            ></div>
            <p className="fz-18 has-3-color">
              Johannesburg, South Africa
            </p>
          </div>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default FooterThreeDark;
