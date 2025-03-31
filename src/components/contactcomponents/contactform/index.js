import React from "react";
import "./contactform.scss";
import Mapicon from "../../../assets/icons/mapicon";
import Mailicon from "../../../assets/icons/mailicon";
import Phoneicon from "../../../assets/icons/phoneicon";
import Arrowrighticon from "../../../assets/icons/arrowrighticon";

export default function Contactform() {
  return (
    <div className="contactform-main">
      <div className="container">
        <div className="contactform-top-links-grd-main">
          <div className="contactform-grd-item">
            <div className="contactform-grd-item-icon">
              <Mapicon />
            </div>
            <div className="contactform-grd-item-content">
              <h2>Our Address</h2>
              <p>2464 Royal Ln. Mesa, New Jersey 45463.</p>
            </div>
          </div>
          <div className="contactform-grd-item">
            <div className="contactform-grd-item-icon">
              <Mailicon />
            </div>
            <div className="contactform-grd-item-content">
              <a href="mailto:info@example.com">info@example.com</a>
              <p>Email us anytime for anykind ofquety.</p>
            </div>
          </div>
          <div className="contactform-grd-item">
            <div className="contactform-grd-item-icon">
              <Phoneicon />
            </div>
            <div className="contactform-grd-item-content">
              <h2>
                Hot:<a href="tel:+2086660112">+208-666-0112</a>
              </h2>
              <p>Call us any kind suppor,we will wait for it.</p>
            </div>
          </div>
        </div>
        <div className="contactform-grd-main">
          <div className="contactform-map">
            <iFrame
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6303.595503639633!2d144.964299!3d-37.818206!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b384a66f05%3A0xa794a69d25e1af07!2sEnvato!5e0!3m2!1sen!2sbd!4v1743398416609!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iFrame>
          </div>
          <div className="contactform-content-main">
            <h1>Ready to Get Started?</h1>
            <p>
              Nullam varius, erat quis iaculis dictum, eros urna varius eros, ut
              blandit felis odio in turpis. Quisque rhoncus, eros in auctor
              ultrices,
            </p>
            <form>
              <div className="form-devider">
                <div className="form-item">
                  <label>Your name*</label>
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="form-item">
                  <label>Your Email*</label>
                  <input type="email" placeholder="Your Email" />
                </div>
              </div>
              <div className="form-item">
                <label>Write Message*</label>
                <textarea placeholder="Write Message" />
              </div>
              <div className="form-item">
                <button type="submit">
                  Send Message <Arrowrighticon />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
