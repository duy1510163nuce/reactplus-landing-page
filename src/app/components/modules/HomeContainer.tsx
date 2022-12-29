import { FC, ReactElement } from "react";
import Banner from "app/components/modules/Banner";
import Achievement from "app/components/modules/Achievement";
import Consultation from "app/components/modules/Consultation";
import Footer from "app/components/modules/Footer";
import Header from "app/components/modules/Header";
import ProjectList from "app/components/modules/Projects";
import Reputation from "app/components/modules/Reputation";
import Service from "app/components/modules/ServiceList";
import Submit from "app/components/modules/Submit";
import User from "app/components/modules/User";
import { listServices } from "app/constant/mockApi";
import {listReason} from "app/constant/mockApi";
import { listAchievement } from "app/constant/mockApi";
import { listProjects } from "app/constant/mockApi";
import { listNavbar } from "app/constant/mockApi";

export const HomeContainer: FC = (): ReactElement => {
  return (
    <div className="homeContainer">
      <Header  items={listNavbar}/>
      <Banner />
      <Reputation reasons = {listReason} />
      <User />
      <Service services = {listServices} />
      <Achievement achievements = {listAchievement} />
      <Consultation/>
      <ProjectList projects = {listProjects} />
      <Submit/>
      <Footer />
    </div>
  );
};
