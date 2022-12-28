import { FC, ReactElement } from "react";
import { ReasonsType } from "app/types/RepuType";
import "app/styles/modules/Reason.scss";

const Reason: FC<ReasonsType> = (reason): ReactElement => {
  
  console.log(reason.id);
  
  
  return (
    <div className="reason" key={reason.id}>
      <img alt="avtUSer" src={reason.img} className="reason-img" />
      <h1 className="reason-title">{reason.title}</h1>
      <p className="reason-description">{reason.description}</p>
    </div>
  );
};

export default Reason;
