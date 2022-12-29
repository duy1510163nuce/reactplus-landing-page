import box from "public/images/box.png";
import theBox from "public/images/TheBox.png";
import { FC, ReactElement } from "react";

export const Logo: FC = (): ReactElement => {
  return (
    <div className="logo">
      <img alt="logo-box" src={box} className="logo-box" />
      <img alt="logo-text" src={theBox} className="logo-text" />
    </div>
  );
};
