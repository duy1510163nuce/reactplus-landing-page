import { FC, ReactElement } from "react";
// import Subscribe from "./subcribe/Subscribe";
import "app/styles/elements/Footer.scss"
import IconFace from "public/images/iconFace .png";
import IconInsta from "public/images/iconInsta.png";
import IconTwist from "public/images/iconTwit.png";
import Logo from "../header/logo/Logo";

const Footer: FC = (): ReactElement => {
    const Contact: FC = (): ReactElement => {
    return (
      <div className="contact">
        <div className="contact-item">
          <p className="label-address">ADDRESS:</p>
          <p className="content-address">6391 Elgin St. Celina, Delaware 10299</p>
        </div>
        <div className="contact-item">
          <p className="label-phone">PHONE:</p>
          <p className="content-phone">+84 1102 2703</p>
        </div>
        <div className="contact-item">
          <p className="label-email">EMAIL:</p>
          <p className="content-email">hello@thebox.com</p>
        </div>
        <div className="contact-logo">
          <Logo />
        </div>
      </div>
    );
  };
  const Subscribe: FC = (): ReactElement => {
      const Input: FC = (): ReactElement => {
      return (
        <div className="sub-fill">
          <input type="text" className="sub-input" placeholder="Your email here" />
          <button className="sub-btn">Subscribe</button>
        </div>
      );
    };
    return (
      <div className="subscribe">
        <h1 className="subscribe-title">Newsletter:</h1>
        <Input />
        <p className="subscribe-content">Social:</p>
        <div className="sub-social">
          <div className="sub-item">
            <img alt="icon-face" src={IconFace} className="icon-face" />
          </div>
          <div className="sub-item">
            <img alt="icon-insta" src={IconInsta} className="icon-insta" />
          </div>
          <div className="sub-item">
            <img alt="icon-twist" src={IconTwist} className="icon-twist" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="content-footer">
      <div className="footer">
        <Contact />
        <Subscribe />
      </div>
      <div className="footer-text">
        <p className="footer-path">
          TheBox Company © 2022. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
