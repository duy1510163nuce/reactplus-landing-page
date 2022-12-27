import { FC, ReactElement } from "react";
import Reason from "app/components/modules/reason/Reason";
import "./Reputation.scss";
import { listReason } from "app/constant/mockApi";

const Reputation: FC = (): ReactElement => {
  return (
    <div className="reputation">
      <h1 className="repu-title">Our Reputation</h1>
      <div className="list-reasons">
        {listReason.map((reason, key) => {
          return <Reason {...reason} key={key} />;
        })}
      </div>
    </div>
  );
};

export default Reputation;
