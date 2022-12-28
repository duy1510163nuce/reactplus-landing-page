import { FC, ReactElement } from "react";
import Logo from "app/components/elements/header/logo/Logo";
import "app/styles/footer/Contact.scss";

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

export default Contact;
