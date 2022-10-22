import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import PrintIcon from "@mui/icons-material/Print";
import SaveIcon from "@mui/icons-material/Save";
import ShareIcon from "@mui/icons-material/Share";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import BusinessIcon from "@mui/icons-material/Business";
import {
  Backdrop,
  Button,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  styled,
} from "@mui/material";
import { green } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import Comments from "./comment";
import Products from "./products";

export const ColorButton = styled(Button)({
  backgroundColor: "#714194",
  "&:hover": {
    backgroundColor: "#333",
  },
});

export const StyledSpeeDialAction = styled(SpeedDialAction)({
  backgroundColor: green[600],
  color: "white",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#714194",
    },
  },
  components: {
    // Name of the component
    MuiSpeedDial: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          position: "fixed",
        },
      },
    },
  },
});

const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
];

function TogetherWithCancer() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <ThemeProvider theme={theme}>
      <div id="page" className="site">
        <div className="content-wrapper">
          <header
            id="page-header"
            className="page-header header-14 nav-links-hover-style-01 header-dark header-sticky-dark-logo headroom headroom--not-bottom headroom--not-top headroom--unpinned"
          >
            <div
              className="page-header-place-holder"
              style={{ height: "88.3906px" }}
            />
            <div
              id="page-header-inner"
              className="page-header-inner held"
              data-sticky={1}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="header-wrap">
                      <div className="branding">
                        <div className="branding__logo">
                          <a href="#/" rel="home">
                            <img
                              src="./files/3.-TAC-Landscape-300x121.png"
                              alt="Together Against Cancer"
                              className="dark-logo"
                            />
                          </a>
                        </div>
                      </div>
                      <div
                        className="header-right"
                        style={{ paddingRight: 20 }}
                      >
                        <ColorButton
                          variant="contained"
                          size="medium"
                          disableElevation
                          onClick={() => {
                            window.location.href =
                              "https://tawk.to/chat/6352ec70daff0e1306d3446e/1gftun61r";
                          }}
                        >
                          Contact us
                        </ColorButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div id="page-content" className="page-content">
            <div className="container">
              <div className="row">
                <div id="page-main-content" className="page-main-content">
                  <div className="rich-snippet display-none">
                    <h1 className="entry-title">Home</h1>
                    <span className="published">June 20, 2022</span>
                    <span className="updated" data-time="2022-10-04 9:42">
                      2022-10-04 9:42
                    </span>
                  </div>
                  <article
                    id="post-14863"
                    className="post-14863 page type-page status-publish hentry pmpro-has-access post-no-thumbnail"
                  >
                    <h2 className="screen-reader-text">Home</h2>
                    <div
                      data-elementor-type="wp-page"
                      data-elementor-id={14863}
                      className="elementor elementor-14863"
                    >
                      <div className="elementor-inner">
                        <div className="elementor-section-wrap">
                          <section
                            className="elementor-section elementor-top-section elementor-element elementor-element-a88f7e6 elementor-section-stretched elementor-section-height-min-height elementor-section-boxed elementor-section-gap-beside-yes elementor-section-height-default elementor-section-items-middle elementor-section-content-align-center elementor-section-column-vertical-align-stretch"
                            data-id="a88f7e6"
                            data-element_type="section"
                            data-settings='{"stretch_section":"section-stretched","background_background":"gradient","shape_divider_bottom":"opacity-fan"}'
                            style={{ width: "1349px", left: "0px" }}
                          >
                            <div
                              className="elementor-shape elementor-shape-bottom"
                              data-negative="false"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 283.5 19.6"
                                preserveAspectRatio="none"
                              >
                                <path
                                  className="elementor-shape-fill"
                                  style={{ opacity: "0.33" }}
                                  d="M0 0L0 18.8 141.8 4.1 283.5 18.8 283.5 0z"
                                />
                                <path
                                  className="elementor-shape-fill"
                                  style={{ opacity: "0.33" }}
                                  d="M0 0L0 12.6 141.8 4 283.5 12.6 283.5 0z"
                                />
                                <path
                                  className="elementor-shape-fill"
                                  style={{ opacity: "0.33" }}
                                  d="M0 0L0 6.4 141.8 4 283.5 6.4 283.5 0z"
                                />
                                <path
                                  className="elementor-shape-fill"
                                  d="M0 0L0 1.2 141.8 4 283.5 1.2 283.5 0z"
                                />
                              </svg>
                            </div>
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-row">
                                <div
                                  className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-5c9893a animated fadeInLeft"
                                  data-id="5c9893a"
                                  data-element_type="column"
                                  data-settings='{"animation":"fadeInLeft"}'
                                >
                                  <div className="elementor-column-wrap elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                      <div
                                        className="elementor-element elementor-element-45ebf77 elementor-widget elementor-widget-tm-heading"
                                        data-id="45ebf77"
                                        data-element_type="widget"
                                        data-widget_type="tm-heading.default"
                                      >
                                        <div className="elementor-widget-container">
                                          <div className="tm-modern-heading">
                                            <div className="heading-secondary-wrap">
                                              <h4 className="heading-secondary elementor-heading-title">
                                                Welcome to TOPPERS Medicine
                                              </h4>
                                            </div>
                                            <div className="heading-primary-wrap">
                                              <h1 className="heading-primary elementor-heading-title">
                                                <mark>
                                                  <strong>T</strong>ogether
                                                  <strong>A</strong>gainst
                                                  <strong>C</strong>ancer
                                                </mark>
                                              </h1>
                                            </div>
                                            <div className="heading-description-wrap">
                                              <div className="heading-description">
                                                <p>
                                                  <strong>
                                                    <strong>T</strong>oppers is
                                                    committed to helping people
                                                    diagnosed with cancer. We
                                                    equip patients and carers
                                                    with quality medication
                                                    drugs to empower them take
                                                    control of their own health.
                                                  </strong>
                                                </p>
                                                <p>
                                                  we provide a range of cancer
                                                  services, including medicines,
                                                  workshops, counselling and
                                                  events. In addition to this,
                                                  we provide support, recipes
                                                  and more via our live support
                                                  service, which is for cancer
                                                  patients and carers anywhere
                                                  in the world.
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-3c3f557"
                                  data-id="3c3f557"
                                  data-element_type="column"
                                >
                                  <div className="elementor-column-wrap elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                      <div
                                        className="elementor-element elementor-element-a9df5b4 elementor-widget__width-auto elementor-absolute elementor-widget-mobile__width-initial elementor-hidden-tablet elementor-hidden-mobile elementor-hidden-desktop elementor-invisible elementor-widget elementor-widget-image"
                                        data-id="a9df5b4"
                                        data-element_type="widget"
                                        data-settings='{"_position":"absolute","_animation":"fadeIn"}'
                                        data-widget_type="image.default"
                                      >
                                        <div className="elementor-widget-container">
                                          <div className="elementor-image">
                                            <img
                                              width={170}
                                              height={170}
                                              src="./files/bg-decoration-square.png"
                                              className="attachment-full size-full"
                                              alt=""
                                              loading="lazy"
                                              srcSet="
                                              #/wp-content/uploads/2021/07/bg-decoration-square.png         170w,
                                              #/wp-content/uploads/2021/07/bg-decoration-square-150x150.png 150w,
                                              #/wp-content/uploads/2021/07/bg-decoration-square-100x100.png 100w
                                            "
                                              sizes="(max-width: 170px) 100vw, 170px"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="elementor-element elementor-element-07365d3 maxcoach-animation-zoom-in elementor-align-center elementor-widget__width-auto elementor-widget elementor-widget-tm-popup-video"
                                        data-id="07365d3"
                                        data-element_type="widget"
                                        data-settings='{"motion_fx_motion_fx_mouse":"yes"}'
                                        data-widget_type="tm-popup-video.default"
                                      >
                                        <div className="elementor-widget-container">
                                          <div className="tm-popup-video type-poster tm-popup-video-image-play">
                                            <img
                                              src={require("./team.jpg")}
                                              style={{ borderRadius: 10 }}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section
                            className="elementor-section elementor-top-section elementor-element elementor-element-b655e65 elementor-section-boxed elementor-section-gap-beside-yes elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
                            data-id="b655e65"
                            data-element_type="section"
                            data-settings='{"shape_divider_top":"opacity-fan","shape_divider_bottom":"opacity-fan","background_background":"gradient"}'
                          >
                            <div
                              className="elementor-shape elementor-shape-top"
                              data-negative="false"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 283.5 19.6"
                                preserveAspectRatio="none"
                              >
                                <path
                                  className="elementor-shape-fill"
                                  style={{ opacity: "0.33" }}
                                  d="M0 0L0 18.8 141.8 4.1 283.5 18.8 283.5 0z"
                                />
                                <path
                                  className="elementor-shape-fill"
                                  style={{ opacity: "0.33" }}
                                  d="M0 0L0 12.6 141.8 4 283.5 12.6 283.5 0z"
                                />
                                <path
                                  className="elementor-shape-fill"
                                  style={{ opacity: "0.33" }}
                                  d="M0 0L0 6.4 141.8 4 283.5 6.4 283.5 0z"
                                />
                                <path
                                  className="elementor-shape-fill"
                                  d="M0 0L0 1.2 141.8 4 283.5 1.2 283.5 0z"
                                />
                              </svg>
                            </div>
                            <div
                              className="elementor-shape elementor-shape-bottom"
                              data-negative="false"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 283.5 19.6"
                                preserveAspectRatio="none"
                              >
                                <path
                                  className="elementor-shape-fill"
                                  style={{ opacity: "0.33" }}
                                  d="M0 0L0 18.8 141.8 4.1 283.5 18.8 283.5 0z"
                                />
                                <path
                                  className="elementor-shape-fill"
                                  style={{ opacity: "0.33" }}
                                  d="M0 0L0 12.6 141.8 4 283.5 12.6 283.5 0z"
                                />
                                <path
                                  className="elementor-shape-fill"
                                  style={{ opacity: "0.33" }}
                                  d="M0 0L0 6.4 141.8 4 283.5 6.4 283.5 0z"
                                />
                                <path
                                  className="elementor-shape-fill"
                                  d="M0 0L0 1.2 141.8 4 283.5 1.2 283.5 0z"
                                />
                              </svg>
                            </div>
                            <div className="elementor-container elementor-column-gap-extended">
                              <div className="elementor-row">
                                <div
                                  className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9eed170"
                                  data-id="9eed170"
                                  data-element_type="column"
                                >
                                  <div className="elementor-column-wrap elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                      <div
                                        className="elementor-element elementor-element-4a66bcc elementor-widget elementor-widget-tm-heading animated maxcoachFadeInUp"
                                        data-id="4a66bcc"
                                        data-element_type="widget"
                                        data-settings='{"_animation":"maxcoachFadeInUp"}'
                                        data-widget_type="tm-heading.default"
                                      >
                                        <div className="elementor-widget-container">
                                          <div className="tm-modern-heading">
                                            <div className="heading-primary-wrap">
                                              <h2 className="heading-primary elementor-heading-title">
                                                Our <mark>Product</mark>
                                              </h2>
                                              <div>
                                                <h2>
                                                  <mark>Bitter kola</mark>
                                                </h2>
                                                <h4 className="elementor-size-default">
                                                  This medication for centuries
                                                  in folk medicine to treat
                                                  cancer, its a species of
                                                  flowering plant belonging to
                                                  the Mangosteen genus Garcinia
                                                  of the family Clusiaceae.
                                                </h4>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <section
                                        className="elementor-section elementor-inner-section elementor-element elementor-element-604ab16 elementor-section-gap-beside-no elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
                                        data-id="604ab16"
                                        data-element_type="section"
                                      >
                                        <Products />
                                      </section>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section
                            className="elementor-section elementor-top-section elementor-element elementor-element-1beef84 elementor-section-stretched statement-banner elementor-section-boxed elementor-section-gap-beside-yes elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
                            data-id="1beef84"
                            data-element_type="section"
                            data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                            style={{ width: "1349px", left: "0px" }}
                          >
                            <div className="elementor-container elementor-column-gap-extended">
                              <div className="elementor-row">
                                <div
                                  className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1015969"
                                  data-id={1015969}
                                  data-element_type="column"
                                >
                                  <div className="elementor-column-wrap elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                      <section
                                        className="elementor-section elementor-inner-section elementor-element elementor-element-fd8b2c7 elementor-section-gap-beside-no elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
                                        data-id="fd8b2c7"
                                        data-element_type="section"
                                      >
                                        <div className="elementor-container elementor-column-gap-extended">
                                          <div className="elementor-row">
                                            <div
                                              className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-1b99f81"
                                              data-id="1b99f81"
                                              data-element_type="column"
                                            >
                                              <div className="elementor-column-wrap elementor-element-populated">
                                                <div className="elementor-widget-wrap">
                                                  <div
                                                    className="elementor-element elementor-element-98955cf elementor-widget elementor-widget-heading"
                                                    data-id="98955cf"
                                                    data-element_type="widget"
                                                    data-widget_type="heading.default"
                                                  >
                                                    <div className="elementor-widget-container">
                                                      <h3 className="elementor-heading-title elementor-size-default">
                                                        Receive our recipe book
                                                        '5-day plant based
                                                        reset'
                                                      </h3>
                                                    </div>
                                                  </div>
                                                  <div
                                                    className="elementor-element elementor-element-96da788 elementor-widget elementor-widget-heading"
                                                    data-id="96da788"
                                                    data-element_type="widget"
                                                    data-widget_type="heading.default"
                                                  >
                                                    <div className="elementor-widget-container">
                                                      <h4 className="elementor-heading-title elementor-size-default">
                                                        Contact us in order to
                                                        recieve a copy of our
                                                        recipe book
                                                      </h4>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </section>
                                      <div
                                        className="elementor-element elementor-element-3c06497 elementor-align-center elementor-mobile-align-center elementor-widget elementor-widget-tm-button"
                                        data-id="3c06497"
                                        data-element_type="widget"
                                        data-widget_type="tm-button.default"
                                      >
                                        <div className="elementor-widget-container">
                                          <div className="tm-button-wrapper">
                                            <a
                                              href="https://tawk.to/chat/6352ec70daff0e1306d3446e/1gftun61r"
                                              target="_blank"
                                              className="tm-button-link tm-button style-flat tm-button-sm"
                                              role="button"
                                            >
                                              <div className="button-content-wrapper">
                                                <span className="button-text">
                                                  Contact us
                                                </span>
                                              </div>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>

                          <section
                            className="elementor-section elementor-top-section elementor-element elementor-element-6286ab42 elementor-section-stretched statement-banner elementor-section-boxed elementor-section-gap-beside-yes elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
                            data-id="6286ab42"
                            data-element_type="section"
                            data-settings='{"stretch_section":"section-stretched"}'
                            style={{ width: "1349px", left: "0px" }}
                          >
                            <div className="elementor-container elementor-column-gap-extended">
                              <div className="elementor-row">
                                <div
                                  className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-40392b97"
                                  data-id="40392b97"
                                  data-element_type="column"
                                >
                                  <div className="elementor-column-wrap elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                      <section
                                        className="elementor-section elementor-inner-section elementor-element elementor-element-2b46d50e elementor-section-gap-beside-no elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
                                        data-id="2b46d50e"
                                        data-element_type="section"
                                      >
                                        <div className="elementor-container elementor-column-gap-extended">
                                          <div className="elementor-row">
                                            <div
                                              className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-34c2e23d"
                                              data-id="34c2e23d"
                                              data-element_type="column"
                                            >
                                              <div className="elementor-column-wrap elementor-element-populated">
                                                <div className="elementor-widget-wrap">
                                                  <div
                                                    className="elementor-element elementor-element-7c4f1426 elementor-widget elementor-widget-heading"
                                                    data-id="7c4f1426"
                                                    data-element_type="widget"
                                                    data-widget_type="heading.default"
                                                  >
                                                    <div className="elementor-widget-container">
                                                      <h4 className="elementor-heading-title elementor-size-default">
                                                        Supported by
                                                        fundraising, TAC
                                                        Wellness Centre can
                                                        provide support to you.
                                                      </h4>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </section>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>

                          <section
                            className="elementor-section elementor-top-section elementor-element elementor-element-483c6b2 elementor-section-stretched statement-banner elementor-section-boxed elementor-section-gap-beside-yes elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
                            data-id="483c6b2"
                            data-element_type="section"
                            data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                            style={{ width: "1349px", left: "0px" }}
                          >
                            <div className="elementor-container elementor-column-gap-extended">
                              <div className="elementor-row">
                                <div
                                  className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-655aaa3"
                                  data-id="655aaa3"
                                  data-element_type="column"
                                >
                                  <div className="elementor-column-wrap elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                      <div
                                        className="elementor-element elementor-element-a210f7a elementor-widget elementor-widget-tm-heading animated maxcoachFadeInUp"
                                        data-id="a210f7a"
                                        data-element_type="widget"
                                        data-settings='{"_animation":"maxcoachFadeInUp"}'
                                        data-widget_type="tm-heading.default"
                                      >
                                        <div className="elementor-widget-container">
                                          <div className="tm-modern-heading">
                                            <div className="heading-primary-wrap">
                                              <h2 className="heading-primary elementor-heading-title">
                                                Client <mark>testimonials</mark>
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <Comments />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section
                            className="elementor-section elementor-top-section elementor-element elementor-element-0f31b4c elementor-section-boxed elementor-section-gap-beside-yes elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
                            data-id="0f31b4c"
                            data-element_type="section"
                          >
                            <div className="elementor-container elementor-column-gap-extended">
                              <div className="elementor-row">
                                <div
                                  className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-93786fc"
                                  data-id="93786fc"
                                  data-element_type="column"
                                >
                                  <div className="elementor-column-wrap elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                      <div
                                        className="elementor-element elementor-element-c4b4db5 elementor-widget elementor-widget-tm-heading animated maxcoachFadeInUp"
                                        data-id="c4b4db5"
                                        data-element_type="widget"
                                        data-settings='{"_animation":"maxcoachFadeInUp"}'
                                        data-widget_type="tm-heading.default"
                                      >
                                        <div className="elementor-widget-container">
                                          <div className="tm-modern-heading">
                                            <div className="heading-secondary-wrap">
                                              <h4 className="heading-secondary elementor-heading-title">
                                                The latest from
                                                <strong>T</strong>ogether
                                                <strong>A</strong>gainst
                                                <strong>C</strong>ancer
                                              </h4>
                                            </div>
                                            <div className="heading-primary-wrap">
                                              <h2 className="heading-primary elementor-heading-title">
                                                <mark>News</mark> and Blogs
                                              </h2>
                                            </div>
                                            <div className="heading-description-wrap">
                                              <div className="heading-description">
                                                &nbsp;
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="elementor-element elementor-element-5cbe1a3 elementor-widget elementor-widget-tm-blog"
                                        data-id="5cbe1a3"
                                        data-element_type="widget"
                                        data-widget_type="tm-blog.default"
                                      >
                                        <div className="elementor-widget-container">
                                          <div className="maxcoach-grid-wrapper maxcoach-blog maxcoach-blog-one-left-featured maxcoach-blog-caption-style-03">
                                            <input
                                              type="hidden"
                                              className="maxcoach-query-input"
                                              defaultValue='{"source":"custom_query","action":"post_infinite_load","max_num_pages":13,"found_posts":38,"count":3,"query_vars":{"post_type":"post","posts_per_page":3,"orderby":"date","order":"DESC","post_status":"publish","paged":1},"settings":{"show_caption":"yes","read_more_text":null,"meta_data":[{"meta":"date","_id":"72859e7"},{"meta":"author","_id":"ead3c7d"}],"show_overlay":null,"grid_metro_layout":null,"layout":"one-left-featured","grid_columns":null,"grid_gutter":null,"query_number":3,"query_include":["terms"],"query_include_term_ids":[],"overlay_meta_data":[],"banners":null,"caption_style":"03","show_caption_meta":[],"excerpt_length":18,"show_caption_read_more":"","caption_title_typography_font_size":null,"caption_excerpt_typography_font_size":null,"show_caption_category":"","pmpro_require_membership":["0","1","2","3"],"hover_effect":"","show_thumbnail":null,"show_caption_excerpt":"yes","show_caption_share":"","overlay_style":"float","show_overlay_category":"yes","show_overlay_title":"","metro_image_size_width":null,"metro_image_ratio":null,"thumbnail_default_size":"1","thumbnail_size":null,"thumbnail_custom_dimension":null,"grid_columns_tablet":null,"grid_columns_mobile":null,"grid_gutter_tablet":null,"grid_gutter_mobile":null,"pagination_type":"","pagination_custom_button_id":null,"box_border_radius":{"unit":"px","size":"","sizes":[]},"box_box_shadow_box_shadow_type":"","box_box_shadow_box_shadow":null,"box_box_shadow_box_shadow_position":null,"box_box_shadow_hover_box_shadow_type":"","box_box_shadow_hover_box_shadow":null,"box_box_shadow_hover_box_shadow_position":null,"thumbnail_border_radius":{"unit":"px","size":"","sizes":[]},"thumbnail_box_shadow_box_shadow_type":"","thumbnail_box_shadow_box_shadow":null,"thumbnail_box_shadow_box_shadow_position":null,"css_filters_css_filter":"","css_filters_blur":null,"css_filters_brightness":null,"css_filters_contrast":null,"css_filters_saturate":null,"css_filters_hue":null,"thumbnail_opacity":{"unit":"px","size":"","sizes":[]},"thumbnail_box_shadow_hover_box_shadow_type":"","thumbnail_box_shadow_hover_box_shadow":null,"thumbnail_box_shadow_hover_box_shadow_position":null,"css_filters_hover_css_filter":"","css_filters_hover_blur":null,"css_filters_hover_brightness":null,"css_filters_hover_contrast":null,"css_filters_hover_saturate":null,"css_filters_hover_hue":null,"thumbnail_opacity_hover":{"unit":"px","size":"","sizes":[]},"text_align":"","text_align_tablet":"","text_align_mobile":"","caption_margin":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"caption_margin_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"caption_margin_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"caption_padding":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"caption_padding_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"caption_padding_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"caption_meta_margin":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"caption_meta_margin_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"caption_meta_margin_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"caption_meta_typography_typography":"","caption_meta_typography_font_family":null,"caption_meta_typography_font_size":null,"caption_meta_typography_font_size_tablet":null,"caption_meta_typography_font_size_mobile":null,"caption_meta_typography_font_weight":null,"caption_meta_typography_text_transform":null,"caption_meta_typography_font_style":null,"caption_meta_typography_text_decoration":null,"caption_meta_typography_line_height":null,"caption_meta_typography_line_height_tablet":null,"caption_meta_typography_line_height_mobile":null,"caption_meta_typography_letter_spacing":null,"caption_meta_typography_letter_spacing_tablet":null,"caption_meta_typography_letter_spacing_mobile":null,"caption_meta_typography_word_spacing":null,"caption_meta_typography_word_spacing_tablet":null,"caption_meta_typography_word_spacing_mobile":null,"caption_meta_text_color":"","caption_meta_link_color":"","caption_meta_link_hover_color":"","caption_category_margin":null,"caption_category_margin_tablet":null,"caption_category_margin_mobile":null,"caption_category_typography_typography":null,"caption_category_typography_font_family":null,"caption_category_typography_font_size":null,"caption_category_typography_font_size_tablet":null,"caption_category_typography_font_size_mobile":null,"caption_category_typography_font_weight":null,"caption_category_typography_text_transform":null,"caption_category_typography_font_style":null,"caption_category_typography_text_decoration":null,"caption_category_typography_line_height":null,"caption_category_typography_line_height_tablet":null,"caption_category_typography_line_height_mobile":null,"caption_category_typography_letter_spacing":null,"caption_category_typography_letter_spacing_tablet":null,"caption_category_typography_letter_spacing_mobile":null,"caption_category_typography_word_spacing":null,"caption_category_typography_word_spacing_tablet":null,"caption_category_typography_word_spacing_mobile":null,"caption_category_color":null,"caption_category_bg_background":null,"caption_category_bg_color":null,"caption_category_bg_color_stop":null,"caption_category_bg_color_b":null,"caption_category_bg_color_b_stop":null,"caption_category_bg_gradient_type":null,"caption_category_bg_gradient_angle":null,"caption_category_bg_gradient_position":null,"caption_category_bg_image":null,"caption_category_bg_image_tablet":null,"caption_category_bg_image_mobile":null,"caption_category_bg_position":null,"caption_category_bg_position_tablet":null,"caption_category_bg_position_mobile":null,"caption_category_bg_xpos":null,"caption_category_bg_xpos_tablet":null,"caption_category_bg_xpos_mobile":null,"caption_category_bg_ypos":null,"caption_category_bg_ypos_tablet":null,"caption_category_bg_ypos_mobile":null,"caption_category_bg_attachment":null,"caption_category_bg_repeat":null,"caption_category_bg_repeat_tablet":null,"caption_category_bg_repeat_mobile":null,"caption_category_bg_size":null,"caption_category_bg_size_tablet":null,"caption_category_bg_size_mobile":null,"caption_category_bg_bg_width":null,"caption_category_bg_bg_width_tablet":null,"caption_category_bg_bg_width_mobile":null,"caption_category_bg_video_link":null,"caption_category_bg_video_start":null,"caption_category_bg_video_end":null,"caption_category_bg_play_once":null,"caption_category_bg_play_on_mobile":null,"caption_category_bg_privacy_mode":null,"caption_category_bg_video_fallback":null,"caption_category_bg_slideshow_gallery":null,"caption_category_bg_slideshow_loop":null,"caption_category_bg_slideshow_slide_duration":null,"caption_category_bg_slideshow_slide_transition":null,"caption_category_bg_slideshow_transition_duration":null,"caption_category_bg_slideshow_background_size":null,"caption_category_bg_slideshow_background_size_tablet":null,"caption_category_bg_slideshow_background_size_mobile":null,"caption_category_bg_slideshow_background_position":null,"caption_category_bg_slideshow_background_position_tablet":null,"caption_category_bg_slideshow_background_position_mobile":null,"caption_category_bg_slideshow_lazyload":null,"caption_category_bg_slideshow_ken_burns":null,"caption_category_bg_slideshow_ken_burns_zoom_direction":null,"caption_category_hover_color":null,"caption_category_hover_bg_background":null,"caption_category_hover_bg_color":null,"caption_category_hover_bg_color_stop":null,"caption_category_hover_bg_color_b":null,"caption_category_hover_bg_color_b_stop":null,"caption_category_hover_bg_gradient_type":null,"caption_category_hover_bg_gradient_angle":null,"caption_category_hover_bg_gradient_position":null,"caption_category_hover_bg_image":null,"caption_category_hover_bg_image_tablet":null,"caption_category_hover_bg_image_mobile":null,"caption_category_hover_bg_position":null,"caption_category_hover_bg_position_tablet":null,"caption_category_hover_bg_position_mobile":null,"caption_category_hover_bg_xpos":null,"caption_category_hover_bg_xpos_tablet":null,"caption_category_hover_bg_xpos_mobile":null,"caption_category_hover_bg_ypos":null,"caption_category_hover_bg_ypos_tablet":null,"caption_category_hover_bg_ypos_mobile":null,"caption_category_hover_bg_attachment":null,"caption_category_hover_bg_repeat":null,"caption_category_hover_bg_repeat_tablet":null,"caption_category_hover_bg_repeat_mobile":null,"caption_category_hover_bg_size":null,"caption_category_hover_bg_size_tablet":null,"caption_category_hover_bg_size_mobile":null,"caption_category_hover_bg_bg_width":null,"caption_category_hover_bg_bg_width_tablet":null,"caption_category_hover_bg_bg_width_mobile":null,"caption_category_hover_bg_video_link":null,"caption_category_hover_bg_video_start":null,"caption_category_hover_bg_video_end":null,"caption_category_hover_bg_play_once":null,"caption_category_hover_bg_play_on_mobile":null,"caption_category_hover_bg_privacy_mode":null,"caption_category_hover_bg_video_fallback":null,"caption_category_hover_bg_slideshow_gallery":null,"caption_category_hover_bg_slideshow_loop":null,"caption_category_hover_bg_slideshow_slide_duration":null,"caption_category_hover_bg_slideshow_slide_transition":null,"caption_category_hover_bg_slideshow_transition_duration":null,"caption_category_hover_bg_slideshow_background_size":null,"caption_category_hover_bg_slideshow_background_size_tablet":null,"caption_category_hover_bg_slideshow_background_size_mobile":null,"caption_category_hover_bg_slideshow_background_position":null,"caption_category_hover_bg_slideshow_background_position_tablet":null,"caption_category_hover_bg_slideshow_background_position_mobile":null,"caption_category_hover_bg_slideshow_lazyload":null,"caption_category_hover_bg_slideshow_ken_burns":null,"caption_category_hover_bg_slideshow_ken_burns_zoom_direction":null,"caption_title_margin":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"caption_title_margin_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"caption_title_margin_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"caption_title_typography_typography":"","caption_title_typography_font_family":null,"caption_title_typography_font_size_tablet":null,"caption_title_typography_font_size_mobile":null,"caption_title_typography_font_weight":null,"caption_title_typography_text_transform":null,"caption_title_typography_font_style":null,"caption_title_typography_text_decoration":null,"caption_title_typography_line_height":null,"caption_title_typography_line_height_tablet":null,"caption_title_typography_line_height_mobile":null,"caption_title_typography_letter_spacing":null,"caption_title_typography_letter_spacing_tablet":null,"caption_title_typography_letter_spacing_mobile":null,"caption_title_typography_word_spacing":null,"caption_title_typography_word_spacing_tablet":null,"caption_title_typography_word_spacing_mobile":null,"caption_title_color":"","caption_title_hover_color":"","caption_excerpt_margin":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"caption_excerpt_margin_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"caption_excerpt_margin_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"caption_excerpt_typography_typography":"","caption_excerpt_typography_font_family":null,"caption_excerpt_typography_font_size_tablet":null,"caption_excerpt_typography_font_size_mobile":null,"caption_excerpt_typography_font_weight":null,"caption_excerpt_typography_text_transform":null,"caption_excerpt_typography_font_style":null,"caption_excerpt_typography_text_decoration":null,"caption_excerpt_typography_line_height":null,"caption_excerpt_typography_line_height_tablet":null,"caption_excerpt_typography_line_height_mobile":null,"caption_excerpt_typography_letter_spacing":null,"caption_excerpt_typography_letter_spacing_tablet":null,"caption_excerpt_typography_letter_spacing_mobile":null,"caption_excerpt_typography_word_spacing":null,"caption_excerpt_typography_word_spacing_tablet":null,"caption_excerpt_typography_word_spacing_mobile":null,"caption_excerpt_color":"","caption_read_more_margin":null,"caption_read_more_margin_tablet":null,"caption_read_more_margin_mobile":null,"button_text_color":null,"button_background_color":null,"button_border_color":null,"button_hover_text_color":null,"button_hover_background_color":null,"button_hover_border_color":null,"overlay_category_typography_typography":"","overlay_category_typography_font_family":null,"overlay_category_typography_font_size":null,"overlay_category_typography_font_size_tablet":null,"overlay_category_typography_font_size_mobile":null,"overlay_category_typography_font_weight":null,"overlay_category_typography_text_transform":null,"overlay_category_typography_font_style":null,"overlay_category_typography_text_decoration":null,"overlay_category_typography_line_height":null,"overlay_category_typography_line_height_tablet":null,"overlay_category_typography_line_height_mobile":null,"overlay_category_typography_letter_spacing":null,"overlay_category_typography_letter_spacing_tablet":null,"overlay_category_typography_letter_spacing_mobile":null,"overlay_category_typography_word_spacing":null,"overlay_category_typography_word_spacing_tablet":null,"overlay_category_typography_word_spacing_mobile":null,"overlay_category_color":"","overlay_category_bg_color":"","overlay_category_hover_color":"","overlay_category_hover_bg_color":"","pagination_alignment":null,"pagination_alignment_tablet":null,"pagination_alignment_mobile":null,"pagination_spacing":null,"pagination_spacing_tablet":null,"pagination_spacing_mobile":null,"pagination_typography_typography":null,"pagination_typography_font_family":null,"pagination_typography_font_size":null,"pagination_typography_font_size_tablet":null,"pagination_typography_font_size_mobile":null,"pagination_typography_font_weight":null,"pagination_typography_text_transform":null,"pagination_typography_font_style":null,"pagination_typography_text_decoration":null,"pagination_typography_line_height":null,"pagination_typography_line_height_tablet":null,"pagination_typography_line_height_mobile":null,"pagination_typography_letter_spacing":null,"pagination_typography_letter_spacing_tablet":null,"pagination_typography_letter_spacing_mobile":null,"pagination_typography_word_spacing":null,"pagination_typography_word_spacing_tablet":null,"pagination_typography_word_spacing_mobile":null,"pagination_link_color":null,"pagination_link_hover_color":null,"pagination_loading_color":"","query_source":"custom_query","query_include_authors":null,"query_exclude":"","query_exclude_term_ids":null,"query_exclude_authors":null,"query_orderby":"date","query_sort_meta_key":null,"query_order":"DESC","_title":"","_margin":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"_margin_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"_margin_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"_padding":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"_padding_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"_padding_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"_element_width":"","_element_width_tablet":"","_element_width_mobile":"","_element_custom_width":null,"_element_custom_width_tablet":null,"_element_custom_width_mobile":null,"_element_vertical_align":null,"_element_vertical_align_tablet":null,"_element_vertical_align_mobile":null,"_position":"","_offset_orientation_h":null,"_offset_x":null,"_offset_x_tablet":null,"_offset_x_mobile":null,"_offset_x_end":null,"_offset_x_end_tablet":null,"_offset_x_end_mobile":null,"_offset_orientation_v":null,"_offset_y":null,"_offset_y_tablet":null,"_offset_y_mobile":null,"_offset_y_end":null,"_offset_y_end_tablet":null,"_offset_y_end_mobile":null,"_z_index":"","_z_index_tablet":"","_z_index_mobile":"","_element_id":"","_css_classes":"","motion_fx_motion_fx_scrolling":"","motion_fx_translateY_effect":null,"motion_fx_translateY_direction":null,"motion_fx_translateY_speed":null,"motion_fx_translateY_affectedRange":null,"motion_fx_translateX_effect":null,"motion_fx_translateX_direction":null,"motion_fx_translateX_speed":null,"motion_fx_translateX_affectedRange":null,"motion_fx_opacity_effect":null,"motion_fx_opacity_direction":null,"motion_fx_opacity_level":null,"motion_fx_opacity_range":null,"motion_fx_blur_effect":null,"motion_fx_blur_direction":null,"motion_fx_blur_level":null,"motion_fx_blur_range":null,"motion_fx_rotateZ_effect":null,"motion_fx_rotateZ_direction":null,"motion_fx_rotateZ_speed":null,"motion_fx_rotateZ_affectedRange":null,"motion_fx_scale_effect":null,"motion_fx_scale_direction":null,"motion_fx_scale_speed":null,"motion_fx_scale_range":null,"motion_fx_transform_origin_x":null,"motion_fx_transform_origin_y":null,"motion_fx_devices":null,"motion_fx_range":null,"motion_fx_motion_fx_mouse":"","motion_fx_mouseTrack_effect":null,"motion_fx_mouseTrack_direction":null,"motion_fx_mouseTrack_speed":null,"motion_fx_tilt_effect":null,"motion_fx_tilt_direction":null,"motion_fx_tilt_speed":null,"sticky":"","sticky_on":null,"sticky_offset":null,"sticky_offset_tablet":null,"sticky_offset_mobile":null,"sticky_effects_offset":null,"sticky_effects_offset_tablet":null,"sticky_effects_offset_mobile":null,"sticky_parent":null,"_animation":"","_animation_tablet":"","_animation_mobile":"","animation_duration":null,"_animation_delay":null,"_transform_rotate_popover":"","_transform_rotateZ_effect":null,"_transform_rotateZ_effect_tablet":null,"_transform_rotateZ_effect_mobile":null,"_transform_rotate_3d":null,"_transform_rotateX_effect":null,"_transform_rotateX_effect_tablet":null,"_transform_rotateX_effect_mobile":null,"_transform_rotateY_effect":null,"_transform_rotateY_effect_tablet":null,"_transform_rotateY_effect_mobile":null,"_transform_perspective_effect":null,"_transform_perspective_effect_tablet":null,"_transform_perspective_effect_mobile":null,"_transform_translate_popover":"","_transform_translateX_effect":null,"_transform_translateX_effect_tablet":null,"_transform_translateX_effect_mobile":null,"_transform_translateY_effect":null,"_transform_translateY_effect_tablet":null,"_transform_translateY_effect_mobile":null,"_transform_scale_popover":"","_transform_keep_proportions":"yes","_transform_scale_effect":null,"_transform_scale_effect_tablet":null,"_transform_scale_effect_mobile":null,"_transform_scaleX_effect":null,"_transform_scaleX_effect_tablet":null,"_transform_scaleX_effect_mobile":null,"_transform_scaleY_effect":null,"_transform_scaleY_effect_tablet":null,"_transform_scaleY_effect_mobile":null,"_transform_skew_popover":"","_transform_skewX_effect":null,"_transform_skewX_effect_tablet":null,"_transform_skewX_effect_mobile":null,"_transform_skewY_effect":null,"_transform_skewY_effect_tablet":null,"_transform_skewY_effect_mobile":null,"_transform_flipX_effect":"","_transform_flipY_effect":"","_transform_rotate_popover_hover":"","_transform_rotateZ_effect_hover":null,"_transform_rotateZ_effect_hover_tablet":null,"_transform_rotateZ_effect_hover_mobile":null,"_transform_rotate_3d_hover":null,"_transform_rotateX_effect_hover":null,"_transform_rotateX_effect_hover_tablet":null,"_transform_rotateX_effect_hover_mobile":null,"_transform_rotateY_effect_hover":null,"_transform_rotateY_effect_hover_tablet":null,"_transform_rotateY_effect_hover_mobile":null,"_transform_perspective_effect_hover":null,"_transform_perspective_effect_hover_tablet":null,"_transform_perspective_effect_hover_mobile":null,"_transform_translate_popover_hover":"","_transform_translateX_effect_hover":null,"_transform_translateX_effect_hover_tablet":null,"_transform_translateX_effect_hover_mobile":null,"_transform_translateY_effect_hover":null,"_transform_translateY_effect_hover_tablet":null,"_transform_translateY_effect_hover_mobile":null,"_transform_scale_popover_hover":"","_transform_keep_proportions_hover":"yes","_transform_scale_effect_hover":null,"_transform_scale_effect_hover_tablet":null,"_transform_scale_effect_hover_mobile":null,"_transform_scaleX_effect_hover":null,"_transform_scaleX_effect_hover_tablet":null,"_transform_scaleX_effect_hover_mobile":null,"_transform_scaleY_effect_hover":null,"_transform_scaleY_effect_hover_tablet":null,"_transform_scaleY_effect_hover_mobile":null,"_transform_skew_popover_hover":"","_transform_skewX_effect_hover":null,"_transform_skewX_effect_hover_tablet":null,"_transform_skewX_effect_hover_mobile":null,"_transform_skewY_effect_hover":null,"_transform_skewY_effect_hover_tablet":null,"_transform_skewY_effect_hover_mobile":null,"_transform_flipX_effect_hover":"","_transform_flipY_effect_hover":"","_transform_transition_hover":{"unit":"px","size":"","sizes":[]},"motion_fx_transform_x_anchor_point":null,"motion_fx_transform_x_anchor_point_tablet":null,"motion_fx_transform_x_anchor_point_mobile":null,"motion_fx_transform_y_anchor_point":null,"motion_fx_transform_y_anchor_point_tablet":null,"motion_fx_transform_y_anchor_point_mobile":null,"_background_background":"","_background_color":null,"_background_color_stop":null,"_background_color_b":null,"_background_color_b_stop":null,"_background_gradient_type":null,"_background_gradient_angle":null,"_background_gradient_position":null,"_background_image":null,"_background_image_tablet":null,"_background_image_mobile":null,"_background_position":null,"_background_position_tablet":null,"_background_position_mobile":null,"_background_xpos":null,"_background_xpos_tablet":null,"_background_xpos_mobile":null,"_background_ypos":null,"_background_ypos_tablet":null,"_background_ypos_mobile":null,"_background_attachment":null,"_background_repeat":null,"_background_repeat_tablet":null,"_background_repeat_mobile":null,"_background_size":null,"_background_size_tablet":null,"_background_size_mobile":null,"_background_bg_width":null,"_background_bg_width_tablet":null,"_background_bg_width_mobile":null,"_background_video_link":null,"_background_video_start":null,"_background_video_end":null,"_background_play_once":null,"_background_play_on_mobile":null,"_background_privacy_mode":null,"_background_video_fallback":null,"_background_slideshow_gallery":null,"_background_slideshow_loop":null,"_background_slideshow_slide_duration":null,"_background_slideshow_slide_transition":null,"_background_slideshow_transition_duration":null,"_background_slideshow_background_size":null,"_background_slideshow_background_size_tablet":null,"_background_slideshow_background_size_mobile":null,"_background_slideshow_background_position":null,"_background_slideshow_background_position_tablet":null,"_background_slideshow_background_position_mobile":null,"_background_slideshow_lazyload":null,"_background_slideshow_ken_burns":null,"_background_slideshow_ken_burns_zoom_direction":null,"_background_hover_background":"","_background_hover_color":null,"_background_hover_color_stop":null,"_background_hover_color_b":null,"_background_hover_color_b_stop":null,"_background_hover_gradient_type":null,"_background_hover_gradient_angle":null,"_background_hover_gradient_position":null,"_background_hover_image":null,"_background_hover_image_tablet":null,"_background_hover_image_mobile":null,"_background_hover_position":null,"_background_hover_position_tablet":null,"_background_hover_position_mobile":null,"_background_hover_xpos":null,"_background_hover_xpos_tablet":null,"_background_hover_xpos_mobile":null,"_background_hover_ypos":null,"_background_hover_ypos_tablet":null,"_background_hover_ypos_mobile":null,"_background_hover_attachment":null,"_background_hover_repeat":null,"_background_hover_repeat_tablet":null,"_background_hover_repeat_mobile":null,"_background_hover_size":null,"_background_hover_size_tablet":null,"_background_hover_size_mobile":null,"_background_hover_bg_width":null,"_background_hover_bg_width_tablet":null,"_background_hover_bg_width_mobile":null,"_background_hover_video_link":null,"_background_hover_video_start":null,"_background_hover_video_end":null,"_background_hover_play_once":null,"_background_hover_play_on_mobile":null,"_background_hover_privacy_mode":null,"_background_hover_video_fallback":null,"_background_hover_slideshow_gallery":null,"_background_hover_slideshow_loop":null,"_background_hover_slideshow_slide_duration":null,"_background_hover_slideshow_slide_transition":null,"_background_hover_slideshow_transition_duration":null,"_background_hover_slideshow_background_size":null,"_background_hover_slideshow_background_size_tablet":null,"_background_hover_slideshow_background_size_mobile":null,"_background_hover_slideshow_background_position":null,"_background_hover_slideshow_background_position_tablet":null,"_background_hover_slideshow_background_position_mobile":null,"_background_hover_slideshow_lazyload":null,"_background_hover_slideshow_ken_burns":null,"_background_hover_slideshow_ken_burns_zoom_direction":null,"_background_hover_transition":{"unit":"px","size":"","sizes":[]},"_border_border":"","_border_width":null,"_border_width_tablet":null,"_border_width_mobile":null,"_border_color":null,"_border_radius":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"_border_radius_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"_border_radius_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"_box_shadow_box_shadow_type":"","_box_shadow_box_shadow":null,"_box_shadow_box_shadow_position":null,"_border_hover_border":"","_border_hover_width":null,"_border_hover_width_tablet":null,"_border_hover_width_mobile":null,"_border_hover_color":null,"_border_radius_hover":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"_border_radius_hover_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"_border_radius_hover_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"_box_shadow_hover_box_shadow_type":"","_box_shadow_hover_box_shadow":null,"_box_shadow_hover_box_shadow_position":null,"_border_hover_transition":{"unit":"px","size":"","sizes":[]},"_mask_switch":"","_mask_shape":null,"_mask_image":null,"_mask_notice":null,"_mask_size":null,"_mask_size_tablet":null,"_mask_size_mobile":null,"_mask_size_scale":null,"_mask_size_scale_tablet":null,"_mask_size_scale_mobile":null,"_mask_position":null,"_mask_position_tablet":null,"_mask_position_mobile":null,"_mask_position_x":null,"_mask_position_x_tablet":null,"_mask_position_x_mobile":null,"_mask_position_y":null,"_mask_position_y_tablet":null,"_mask_position_y_mobile":null,"_mask_repeat":null,"_mask_repeat_tablet":null,"_mask_repeat_mobile":null,"hide_desktop":"","hide_tablet":"","hide_mobile":"","_attributes":"","custom_css":""}}'
                                            />
                                            <div className="maxcoach-grid">
                                              <div className="row row-no-gutter">
                                                <div className="col-md-6 featured-post">
                                                  <div className="grid-item post-16098 post type-post status-publish format-standard has-post-thumbnail hentry category-blog tag-cancer tag-charity tag-healing tag-health tag-immunity tag-nutrition tag-wellbeing pmpro-has-access animate">
                                                    <div className="post-wrapper maxcoach-box">
                                                      <div className="post-feature post-thumbnail maxcoach-image">
                                                        <a
                                                          href="#/prepare-for-winter-boost-immunity/"
                                                          className="link-secret"
                                                        >
                                                          <img
                                                            src="./files/blog-banner-570x330.png"
                                                            alt="Prepare for winter & boost immunity"
                                                            width={570}
                                                          />
                                                          <div className="post-overlay-background" />
                                                        </a>
                                                        <div className="post-overlay-content">
                                                          <div className="post-overlay-content-inner">
                                                            <div className="post-overlay-info">
                                                              <div className="post-overlay-meta">
                                                                <div className="post-overlay-categories">
                                                                  <a
                                                                    href="#/category/blog/"
                                                                    rel="category tag"
                                                                  >
                                                                    <span>
                                                                      Blog
                                                                    </span>
                                                                  </a>
                                                                </div>
                                                                <div className="post-date">
                                                                  <span className="meta-icon">
                                                                    <i className="far fa-calendar" />
                                                                  </span>
                                                                  October 6,
                                                                  2022
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="post-caption">
                                                        <h3 className="post-title">
                                                          <a href="#/prepare-for-winter-boost-immunity/">
                                                            How To Prepare For
                                                            Winter &amp; Boost
                                                            Your Immunity
                                                          </a>
                                                        </h3>
                                                        <div className="post-excerpt">
                                                          <p>
                                                            Seasonal changes can
                                                            affect us all, both
                                                            positively and
                                                            negatively in
                                                            various ways. Some
                                                            people find it
                                                            stressful when the …
                                                          </p>
                                                        </div>
                                                        <div className="tm-button-wrapper post-read-more">
                                                          <a
                                                            className="tm-button style-bottom-line tm-button-nm icon-right"
                                                            href="#/prepare-for-winter-boost-immunity/"
                                                          >
                                                            <div className="button-content-wrapper">
                                                              <span className="button-text">
                                                                Read more
                                                              </span>
                                                              <span className="button-icon">
                                                                <i className="far fa-long-arrow-right" />
                                                              </span>
                                                            </div>
                                                          </a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-md-6 normal-posts">
                                                  <div className="grid-item post-16059 post type-post status-publish format-standard has-post-thumbnail hentry category-blog tag-cancer tag-charity tag-community tag-healing tag-health tag-wellbeing tag-wellness pmpro-has-access animate">
                                                    <div className="maxcoach-box">
                                                      <div className="post-thumbnail-wrap">
                                                        <div className="post-feature post-thumbnail maxcoach-image">
                                                          <a
                                                            href="#/6th-anniversary-open-day/"
                                                            className="link-secret"
                                                          >
                                                            <img
                                                              src="./files/facebook-banner-1-200x130.png"
                                                              alt="Open Day"
                                                              width={200}
                                                            />
                                                          </a>
                                                        </div>
                                                      </div>
                                                      <div className="post-info">
                                                        <div className="post-caption">
                                                          <h3 className="post-title">
                                                            <a href="#/6th-anniversary-open-day/">
                                                              6th Anniversary
                                                              Open Day
                                                            </a>
                                                          </h3>
                                                          <div className="post-excerpt">
                                                            <p>
                                                              <strong>T</strong>
                                                              oppers is turning
                                                              6 years old! We’re
                                                              so excited to
                                                              announce our 6th
                                                              anniversary Open
                                                              Day …
                                                            </p>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="grid-item post-15863 post type-post status-publish format-standard has-post-thumbnail hentry category-blog tag-cancer tag-charity tag-healing tag-health tag-ketogenic tag-nutrition tag-plant-based pmpro-has-access animate">
                                                    <div className="maxcoach-box">
                                                      <div className="post-thumbnail-wrap">
                                                        <div className="post-feature post-thumbnail maxcoach-image">
                                                          <a
                                                            href="#/plant-based-or-keto-diet-for-cancer/"
                                                            className="link-secret"
                                                          >
                                                            <img
                                                              src="./files/Bean-Salad--200x130.jpg"
                                                              alt="plant-based or keto for cancer"
                                                              width={200}
                                                            />
                                                          </a>
                                                        </div>
                                                      </div>
                                                      <div className="post-info">
                                                        <div className="post-caption">
                                                          <h3 className="post-title">
                                                            <a href="#/plant-based-or-keto-diet-for-cancer/">
                                                              Plant-Based or
                                                              Ketogenic Diet for
                                                              Cancer – Which is
                                                              Best?
                                                            </a>
                                                          </h3>
                                                          <div className="post-excerpt">
                                                            <p>
                                                              The search for the
                                                              optimal diet
                                                              continues as
                                                              health minded
                                                              people hear very
                                                              encouraging
                                                              stories about the
                                                              power …
                                                            </p>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.content-wrapper */}
        <div id="page-footer-wrapper" className="page-footer-wrapper">
          <div className="page-footer elementor-footer" id="page-footer">
            <div
              data-elementor-type="footer"
              data-elementor-id={375}
              className="elementor elementor-375 elementor-location-footer"
            >
              <div className="elementor-section-wrap">
                <section
                  className="elementor-section elementor-top-section elementor-element elementor-element-6bb94e7 elementor-section-stretched elementor-section-boxed elementor-section-gap-beside-yes elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
                  data-id="6bb94e7"
                  data-element_type="section"
                  id="footer"
                  data-settings='{"stretch_section":"section-stretched"}'
                  style={{ width: "1349px", left: "0px" }}
                >
                  <div className="elementor-container elementor-column-gap-extended">
                    <div className="elementor-row">
                      <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3ed6c40"
                        data-id="3ed6c40"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <section
                              className="elementor-section elementor-inner-section elementor-element elementor-element-6f88be7 elementor-section-gap-beside-no elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
                              data-id="6f88be7"
                              data-element_type="section"
                            >
                              <div className="elementor-container elementor-column-gap-extended">
                                <div className="elementor-row">
                                  <div
                                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-65e1d86"
                                    data-id="65e1d86"
                                    data-element_type="column"
                                  >
                                    <div className="elementor-column-wrap elementor-element-populated">
                                      <div className="elementor-widget-wrap">
                                        <div
                                          className="elementor-element elementor-element-35e6c07 elementor-widget elementor-widget-tm-heading"
                                          data-id="35e6c07"
                                          data-element_type="widget"
                                          data-widget_type="tm-heading.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <div className="tm-modern-heading">
                                              <div className="heading-primary-wrap">
                                                <h4 className="heading-primary elementor-heading-title">
                                                  TOPPERS Wellness Centre
                                                </h4>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="elementor-element elementor-element-b82f47d maxcoach-list-layout-block elementor-widget elementor-widget-tm-list"
                                          data-id="b82f47d"
                                          data-element_type="widget"
                                          data-widget_type="tm-list.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <div className="maxcoach-list">
                                              <div className="item">
                                                <div className="link">
                                                  <div className="list-header">
                                                    <div className="maxcoach-icon icon">
                                                      <BusinessIcon />
                                                    </div>
                                                    <div
                                                      className="text-wrap"
                                                      style={{ marginLeft: 10 }}
                                                    >
                                                      <div className="text">
                                                        Unit S1, Troon Way
                                                        Business Centre,
                                                        Humberstone Lane, LE4
                                                        9HA.
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="item">
                                                <div className="link">
                                                  <div className="list-header">
                                                    <div className="maxcoach-icon icon">
                                                      <CallIcon />
                                                    </div>
                                                    <div
                                                      className="text-wrap"
                                                      style={{ marginLeft: 10 }}
                                                    >
                                                      <div className="text">
                                                        Telephone:
                                                        <strong>
                                                          1-916 426 3618
                                                        </strong>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="item">
                                                <a
                                                  className="link"
                                                  href="mailto:info@toppers.web.app"
                                                >
                                                  <div className="list-header">
                                                    <div className="maxcoach-icon icon">
                                                      <EmailIcon />
                                                    </div>
                                                    <div
                                                      className="text-wrap"
                                                      style={{ marginLeft: 10 }}
                                                    >
                                                      <div className="text">
                                                        Email:
                                                        <strong>
                                                          info@toppers.web.app
                                                        </strong>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="elementor-element elementor-element-b5dca47 elementor-widget elementor-widget-tm-social-networks"
                                          data-id="b5dca47"
                                          data-element_type="widget"
                                          data-widget_type="tm-social-networks.default"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-01d7fe1"
                                    data-id="01d7fe1"
                                    data-element_type="column"
                                  >
                                    <div className="elementor-column-wrap elementor-element-populated">
                                      <div className="elementor-widget-wrap">
                                        <div
                                          className="elementor-element elementor-element-ed3e5ab elementor-widget elementor-widget-tm-heading"
                                          data-id="ed3e5ab"
                                          data-element_type="widget"
                                          data-widget_type="tm-heading.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <div className="tm-modern-heading">
                                              <div className="heading-primary-wrap">
                                                <h4 className="heading-primary elementor-heading-title">
                                                  Policies &amp; Guidance
                                                </h4>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="elementor-element elementor-element-4401015 elementor-widget elementor-widget-wp-widget-nav_menu"
                                          data-id={4401015}
                                          data-element_type="widget"
                                          data-widget_type="wp-widget-nav_menu.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <div className="menu-policies-and-guidance-container">
                                              <ul
                                                id="menu-policies-and-guidance"
                                                className="menu"
                                              >
                                                <li
                                                  id="menu-item-12981"
                                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-12981"
                                                >
                                                  <a href="#/forms/">
                                                    Online Forms
                                                  </a>
                                                </li>
                                                <li
                                                  id="menu-item-12285"
                                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-12285"
                                                >
                                                  <a href="#/coronavirus-covid-19/">
                                                    Coronavirus (Covid-19)
                                                  </a>
                                                </li>
                                                <li
                                                  id="menu-item-12284"
                                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-12284"
                                                >
                                                  <a href="#/terms/">
                                                    Terms and Conditions
                                                  </a>
                                                </li>
                                                <li
                                                  id="menu-item-12281"
                                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-12281"
                                                >
                                                  <a href="#/privacy-notice/">
                                                    Privacy Notice
                                                  </a>
                                                </li>
                                                <li
                                                  id="menu-item-12282"
                                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-12282"
                                                >
                                                  <a href="#/comments-and-complaints/">
                                                    Comments and complaints
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <Backdrop open={open} />
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ bottom: 16, right: 16 }}
          icon={<TelegramIcon fontSize="large" />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          <StyledSpeeDialAction
            icon={<WhatsAppIcon />}
            tooltipTitle="Whatsapp"
            onClick={() => {
              window.location.href =
                "https://tawk.to/chat/6352ec70daff0e1306d3446e/1gftun61r";
            }}
          />
          <SpeedDialAction
            icon={<TelegramIcon />}
            tooltipTitle="Livechat"
            onClick={() => {
              window.open(
                "https://api.whatsapp.com/send?phone=19254661079&text=",
                "_blank"
              );
            }}
          />
        </SpeedDial>
      </div>
    </ThemeProvider>
  );
}

export default TogetherWithCancer;
