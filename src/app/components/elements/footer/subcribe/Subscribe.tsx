import { FC, ReactElement } from "react";
import IconFace from "public/images/iconFace .png";
import IconInsta from "public/images/iconInsta.png";
import IconTwist from "public/images/iconTwit.png";
import Input from "./input/Input";
import "./Subscribe.scss";

const Subscribe: FC = (): ReactElement => {
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

export default Subscribe;
