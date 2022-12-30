import { ReactElement } from "react";
import ConsulImg from "public/images/consultation.png";
import "app/styles/modules/consultations.scss";
import Button from "app/components/elements/Button";

const Consultation = (): ReactElement => {
  return (
    <div className="consultation">
      <img
        alt="img-consultation"
        className="consultation-img"
        src={ConsulImg}
      />
      <div className="consultation-left">
        <h1 className="consultation-title">
          Free consultation with exceptional quality
        </h1>
        <p className="consultation-text">
          Just one call away:
          <span className="consultation-phone"> +84 1102 2703</span>
        </p>
      </div>
      <Button  className="consultation-btn" >Get your consultation</Button>
    </div>
  );
};
export default Consultation;
