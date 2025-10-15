"use client";

import { useState } from "react";

// sections
import BlogSidebarPost from "../../../components/blog/blog-sidebar/BlogSidebarPost";
import BlogFive from "../../../components/blog/BlogFive";
import BlogFour from "../../../components/blog/BlogFour";
import Pagination from "../../../components/blog/Pagination";

// dark header / footer (same set used on About Us)
import HeaderDark from "../../../components/header/HeaderDark";
import FooterThreeDark from "../../../components/footer/FooterThreeDark";
import CopyRightThreeDark from "../../../components/footer/copyright/CopyRightThreeDark";

// data
import { blogContentfive } from "../../../data/blog";

const BlogSidebar = () => {
  const [page, setPage] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  return (
    // use the same dark wrapper class as About Us
    <div className="ptf-site-wrapper animsition ptf-is--home-dark">
      <div className="ptf-site-wrapper__inner">
        {/* Dark header */}
        <HeaderDark />

        <div className="ptf-main">
          {/* give the page the dark variant class */}
          <div className="ptf-page ptf-page--blog-sidebar has-dark-color">
            {/* =============================================
                Intro / hero
            ============================================== */}
            <section>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              />
              <div className="container-xxl">
                <div className="row">
                  <div className="col-xl-10">
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      {/* white heading like About Us */}
                      <h1 className="large-heading has-white-color">Recent Works</h1>
                    </div>
                  </div>
                </div>

                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "6.875rem" }}
                />
              </div>

              <div className="container-xxl">
                <div
                  className="row"
                  style={{
                    "--bs-gutter-x": "3.75rem",
                    "--bs-gutter-y": "3.75rem",
                  }}
                >
                  {/* this section inherits the dark text colors from the wrapper */}
                  {/* <BlogFour /> */}
                </div>
              </div>

              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "7.5rem", "--ptf-md": "3.75rem" }}
              />
            </section>

            {/* =============================================
                Divider
            ============================================== */}
            <section>
              <div className="container-xxl">
                <div
                  className="ptf-divider"
                  style={{
                    "--ptf-height": "1px",
                    // lighter line for dark bg
                    "--ptf-color": "rgba(255,255,255,0.15)",
                  }}
                />
              </div>
            </section>

            {/* =============================================
                Blog + Sidebar
            ============================================== */}
            <section>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "7.5rem", "--ptf-md": "3.75rem" }}
              />
              <div className="container-xxl">
                <div className="row">
                  {/* posts */}
                  <div className="col-xl-8">
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <div className="ptf-isotope-grid">
                        <BlogFive
                          blogContentfive={blogContentfive}
                          pageNumber={pageNumber}
                        />
                      </div>
                    </div>

                    <div
                      className="ptf-spacer"
                      style={{
                        "--ptf-xxl": "9.375rem",
                        "--ptf-md": "4.6875rem",
                      }}
                    />

                    {/* <Pagination
                      page={page}
                      setPage={setPage}
                      pageNumber={pageNumber}
                      setPageNumber={setPageNumber}
                      blogContentfive={blogContentfive}
                    /> */}
                  </div>

                  {/* sidebar (forced dark surface just in case your theme lacks a built-in class) */}
                  <div className="col-xl-4">
                    {/* <aside
                      className="ptf-sidebar ptf-sidebar--right"
                      style={{
                        background: "var(--ptf-color-16)", // dark surface
                        borderRadius: "12px",
                        padding: "2rem",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <BlogSidebarPost />
                    </aside> */}
                  </div>
                </div>
              </div>

              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              />
            </section>
          </div>
        </div>
      </div>

      {/* Dark footer (same as About Us) */}
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

export default BlogSidebar;
