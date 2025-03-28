import React from "react";
import "./footer.scss";
import Personwithlaptop from "../../assets/images/personwithlaptop.png";
import Rocket from "../../assets/images/rokect.png";
import CommonButton from "../../commoncomponents/button";
import Arrowrighticon from "../../assets/icons/arrowrighticon";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/icons/logo";
import Facebookicon from "../../assets/icons/facebookicon";
import Twittericon from "../../assets/icons/twittericon";
import Youtubeicon from "../../assets/icons/youtubeicon";
import Linkedinicon from "../../assets/icons/linkedinicon";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="footer-detailed-section">
        <div className="footer-detailed-section-rocket">
          <img src={Rocket} alt="Rocket" />
        </div>
        <div className="footer-detailed-section-top">
          <div className="footer-container">
            <div className="footer-detailed-section-top-box">
              <div className="footer-detailed-section-top-box-image">
                <img src={Personwithlaptop} alt="Personwithlaptop" />
              </div>
              <div className="footer-detailed-section-top-box-text">
                <h2>Stay Connected With Cutting Edge IT</h2>
              </div>
              <div className="footer-detailed-section-top-box-button">
                <CommonButton
                  variant="blackwhite"
                  text="contact us"
                  icon={<Arrowrighticon />}
                  to="/"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-detailed-section-bottom">
          <div className="footer-container">
            <div className="footer-detailed-section-bottom-grid">
              <div className="footer-detailed-section-bottom-grid-items-one">
                <div className="footer-detailed-section-bottom-grid-items-one-head">
                  <NavLink to={"/"}>
                    <Logo />
                  </NavLink>
                </div>
                <div className="footer-detailed-section-bottom-grid-items-one-content">
                  <p>
                    Phasellus ultricies aliquam volutpat ullamcorper laoreet
                    neque, a lacinia curabitur lacinia mollis
                  </p>
                  <div className="footer-detailed-social-media-flx">
                    <NavLink to={"/"}>
                      <button type="button">
                        <Facebookicon />
                      </button>
                    </NavLink>
                    <NavLink to={"/"}>
                      <button type="button">
                        <Twittericon />
                      </button>
                    </NavLink>
                    <NavLink to={"/"}>
                      <button type="button">
                        <Youtubeicon />
                      </button>
                    </NavLink>
                    <NavLink to={"/"}>
                      <button type="button">
                        <Linkedinicon />
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="footer-detailed-section-bottom-grid-items-two">
                <div className="footer-common-title">
                  <div className="footer-common-title-div">
                    <h3>Quick Links</h3>
                  </div>
                </div>
                <div className="footer-detailed-section-bottom-grid-items-two-content">
                  <NavLink to={"/"}>
                    <div className="footer-links-arrow">
                      <Arrowrighticon />
                    </div>
                    <span>Home</span>
                  </NavLink>
                  <NavLink to={"/"}>
                    <div className="footer-links-arrow">
                      <Arrowrighticon />
                    </div>
                    <span>About</span>
                  </NavLink>
                  <NavLink to={"/"}>
                    <div className="footer-links-arrow">
                      <Arrowrighticon />
                    </div>
                    <span>Price</span>
                  </NavLink>
                  <NavLink to={"/"}>
                    <div className="footer-links-arrow">
                      <Arrowrighticon />
                    </div>
                    <span>Service</span>
                  </NavLink>
                  <NavLink to={"/"}>
                    <div className="footer-links-arrow">
                      <Arrowrighticon />
                    </div>
                    <span>Contact</span>
                  </NavLink>
                </div>
              </div>
              <div className="footer-detailed-section-bottom-grid-items-three">
                <div className="footer-common-title">
                  <div className="footer-common-title-div">
                    <h3>Contact Us</h3>
                  </div>
                </div>
                <div className="footer-detailed-section-bottom-grid-items-three-content">
                  <div className="footer-mail">
                    <a href="mailto:info@example.com">info@example.com</a>
                  </div>
                  <div className="footer-phone">
                    <a href="tel:2086660112">+208-666-0112</a>
                  </div>
                  <div className="footer-input">
                    <input type="email" placeholder="Your email address" />
                    <button type="button">
                      <Arrowrighticon />
                    </button>
                  </div>
                  <div className="footer-policy-accept">
                    <input type="checkbox" id="flexCheckChecked" />
                    <label htmlFor="flexCheckChecked">
                      I agree to the <NavLink to={"/"}>Privacy Policy.</NavLink>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copy-right-section-main">
        <div className="footer-top-redirect-button" onClick={handleScrollToTop}>
          <div className="footer-top-redirect-button-icon">
            <Arrowrighticon />
          </div>
        </div>
        <div className="footer-copy-right-section">
          <div className="footer-container">
            <div className="footer-copy-right-section-flx">
              <p>© All Copyright 2024 by Digtek</p>
              <div className="footer-terms-flx">
                <NavLink to={"/"}>
                  <span>Terms & Condition</span>
                </NavLink>
                <NavLink to={"/"}>
                  <span>Privacy Policy</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
