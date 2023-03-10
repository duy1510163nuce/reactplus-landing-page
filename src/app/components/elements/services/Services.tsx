import { FC, ReactElement } from "react";
import Util from "app/components/modules/Util/Util";
import { listServices } from "app/constant/mockApi";
import "../services/Service.scss";

// const type  ServicePropType = {
//     listService:listServices
// }

const Service: FC = (): ReactElement => {
  return (
    <div className="services">
      <div className="service-title">
        <h1 className="service-title-text">Services</h1>
      </div>
      <div className="list-service">
        {listServices.map((util) => {
          return <Util {...util} />;
        })}
      </div>
    </div>
  );
};
export default Service;
