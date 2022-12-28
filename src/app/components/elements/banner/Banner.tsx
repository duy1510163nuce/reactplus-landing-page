import { FC, ReactElement } from "react";
import Hero from "public/images/Hero.png";
import "app/styles/banner/Banner.scss";
const Banner: FC = (): ReactElement => {
  return (
    <div className="banner">
      <img alt="logo-box" src={Hero} className="banner-img" />
    </div>
  );
};
export default Banner;
