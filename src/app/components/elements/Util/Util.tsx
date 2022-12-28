import { FC, ReactElement } from "react";
import { ServiceType } from "app/types/ServicesType";
import "app/styles/modules/Util.scss";

const Util: FC<ServiceType> = (util): ReactElement => {
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

export default Util;
