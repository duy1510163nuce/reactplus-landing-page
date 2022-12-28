import { FC, ReactElement } from "react";
import Banner from "../elements/banner/Banner";
import Achievement from "./achievement/Achievement";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Reputation from "./reputation/Reputation";
import Service from "./services/Services";
import User from "./user/User";

export const HomeContainer: FC = (): ReactElement => {
  return (
    <div className="homeContainer">
      <Header />
      <Banner />
      <Reputation />
      <User />
      <Service />
      <Achievement/>
      <Footer />
    </div>
  );
};
