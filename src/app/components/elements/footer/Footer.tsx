import { FC, ReactElement } from "react";
import Subscribe from "./subcribe/Subscribe";
import Contact from "./contact/Contact";
import "app/styles/footer/Footer.scss"

const Footer: FC = (): ReactElement => {
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
