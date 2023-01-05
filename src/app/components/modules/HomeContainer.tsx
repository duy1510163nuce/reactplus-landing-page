import { FC, ReactElement } from "react";
import Achievement from "app/components/modules/Achievement";
import Footer from "app/components/modules/Footer";
import Header from "app/components/modules/Header";
import ProjectList from "app/components/modules/Projects";
import Reputation from "app/components/modules/Reputation";
import Service from "app/components/modules/ServiceList";
import Submit from "app/components/modules/Submit";
import Button from "app/components/elements/Button";
import Hero from "public/images/Hero.png";
import avtUser from "public/images/user.png";
import ConsulImg from "public/images/consultation.png";
import "app/styles/modules/homeContainer.scss";
import {
  listServices,
  listReason,
  listAchievement,
  listProjects,
  listNavbar,
} from "app/const/mockApi";

export const HomeContainer: FC = (): ReactElement => {
  return (
    <div className="homeContainer">
      <Header items={listNavbar} />

      <div className="banner">
        <img alt="logo-box" src={Hero} className="banner-img" />
      </div>
      <Reputation reasons={listReason} />

      <div className="user">
        <img alt="avt-user" className="avt-user" src={avtUser} />
        <div className="use-description">
          <h1 className="des-title">About us</h1>
          <p className="des-paragraph1">
            For more than 30 years we have been delivering world-class
            construction and we’ve built many lasting relationships along the
            way.
          </p>
          <p className="des-paragraph2">
            We’ve matured into an industry leader and trusted resource for those
            seeking quality, innovation and reliability when building in the
            U.S.
          </p>
          <Button className="des-btn">More on Our History</Button>
        </div>
      </div>

      <Service services={listServices} />

      <Achievement achievements={listAchievement} />

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
        <Button className="consultation-btn">Get your consultation</Button>
      </div>

      <ProjectList projects={listProjects} />
      <Submit />
      <Footer />
    </div>
  );
};
