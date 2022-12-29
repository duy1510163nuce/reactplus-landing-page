import { FC, ReactElement } from "react";
import avtUser from "public/images/user.png";
import "app/styles/elements/User.scss";
import Button from 'app/components/elements/Button'
const User: FC = (): ReactElement => {
  return (
    <div className="user">
      <img alt="avt-user" className="avt-user" src={avtUser} />
      <div className="use-description">
        <h1 className="des-title">About us</h1>
        <p className="des-paragraph1">
          For more than 30 years we have been delivering world-class
          construction and we’ve built many lasting relationships along the way.
        </p>
        <p className="des-paragraph2">
          We’ve matured into an industry leader and trusted resource for those
          seeking quality, innovation and reliability when building in the U.S.
        </p>
        <Button className="des-btn" >More on Our History</Button>
      </div>
    </div>
  );
};
export default User;
