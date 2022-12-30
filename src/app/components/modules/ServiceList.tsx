import { FC, ReactElement } from "react";
import "app/styles/elements/service.scss";

type ServiceType = {
  img: string;
  name: string;
  id: number;
};
type ServiceListProps = {
  services: ServiceType[]
}

const ServiceList: FC<ServiceListProps> = ({services}): ReactElement => {
  
  const Util = (util:ServiceType) => {
    const key = util.id;
    return (
      <div className={util.id % 2 === 0 ? "util-1" : "util-2"} key={key}>
        <img
          alt="utilUSer"
          src={util.img}
          className={util.id % 2 === 0 ? "util-1-img" : "util-2-img"}
        />
        <div
          className={util.id % 2 === 0 ? "util-1-border" : "util-2-border"}
        ></div>
        <p className={util.id % 2 === 0 ? "util-1-des" : "util-2-des"}>
          {util.name}
        </p>
      </div>
    );
  };
  return (
    <div className="services">
      <div className="service-title">
        <h1 className="service-title-text">Services</h1>
      </div>
      <div className="list-service">
        {services?.map((util, key) => {
          return <Util {...util} key={key} />;
        })}
      </div>
    </div>
  );
};
export default ServiceList;
