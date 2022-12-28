import { FC, ReactElement } from "react";
import Util from "app/components/elements/Util/Util";
import { listServices } from "app/constant/mockApi";
import "app/styles/elements/Service.scss";

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
        {listServices.map((util,key) => {
          return <Util {...util}  key={key}/>;
        })}
      </div>
    </div>
  );
};
export default Service;
