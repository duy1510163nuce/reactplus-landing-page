import { FC, ReactElement } from "react";
import Banner from "app/components/modules/banner/Banner";
import Achievement from "app/components/modules/achievement/Achievement";
import Consultation from "app/components/modules/consultation/Consultation";
import Footer from "app/components/modules/footer/Footer";
import Header from "app/components/modules/header/Header";
import Projects from "app/components/modules/Project/Projects";
import Reputation from "app/components/modules/reputation/Reputation";
import Service from "app/components/modules/services/Services";
import Submit from "app/components/modules/submit/Submit";
import User from "app/components/modules/user/User";

export const HomeContainer: FC = (): ReactElement => {
  return (
    <div className="homeContainer">
      <Header />
      <Banner />
      <Reputation />
      <User />
      <Service />
      <Achievement/>
      <Consultation/>
      <Projects/>
      <Submit/>
      <Footer />
    </div>
  );
};
