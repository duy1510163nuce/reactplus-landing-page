import { ReactElement } from "react";
import ConsulImg from "public/images/consultation.png";
import "app/styles/elements/Consultation.scss";

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
      <button className="consultation-btn">
        <p className="btn-text">Get your consultation</p>
      </button>
    </div>
  );
};
export default Consultation;
