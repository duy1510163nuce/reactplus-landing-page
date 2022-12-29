import { FC, ReactElement } from "react";
import "app/styles/elements/Footer.scss";
import IconFace from "public/images/iconFace .png";
import IconInsta from "public/images/iconInsta.png";
import IconTwist from "public/images/iconTwit.png";
import { Logo } from "app/components/elements/Logo";
import Button from "app/components/elements/Button";
import Input from "app/components/elements/Input";

const Footer: FC = (): ReactElement => {
  return (
    <div className="content-footer">
      <div className="footer">
        <div className="contact">
          <div className="contact-item">
            <p className="label-address">ADDRESS:</p>
            <p className="content-address">
              6391 Elgin St. Celina, Delaware 10299
            </p>
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
        <div className="subscribe">
          <h1 className="subscribe-title">Newsletter:</h1>
          <div className="sub-fill">
            <Input
              type="text"
              className="sub-input"
              placeholder="Your email here"
            />
            <Button title="Subscribe" className="sub-btn" />
          </div>
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
