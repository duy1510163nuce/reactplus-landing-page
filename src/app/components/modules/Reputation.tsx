import { FC, ReactElement } from "react";
import "app/styles/elements/reputation.scss";

type ReasonsType = {
  img: string;
  title: string;
  description: string;
  id: number;
};
type ReasonsListProps = {
  reasons: ReasonsType[];
};

const Reputation: FC<ReasonsListProps> = ({ reasons }): ReactElement => {
  const Reason = (reason: ReasonsType) => {
    return (
      <div className="reason" key={reason.id}>
        <img alt="avtUSer" src={reason.img} className="reason-img" />
        <h1 className="reason-title">{reason.title}</h1>
        <p className="reason-description">{reason.description}</p>
      </div>
    );
  };
  return (
    <div className="reputation">
      <h1 className="repu-title">Our Reputation</h1>
      <div className="list-reasons">
        {reasons?.map((reason, key) => {
          return <Reason {...reason} key={key} />;
        })}
      </div>
    </div>
  );
};

export default Reputation;
