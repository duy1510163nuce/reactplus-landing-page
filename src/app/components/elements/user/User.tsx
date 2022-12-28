import { FC, ReactElement } from "react";
import avtUser from "public/images/user.png";
import "app/styles/user/User.scss";
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
        <button className="des-btn">
          <p className="des-btn-text">More on Our History</p>
        </button>
      </div>
    </div>
  );
};
export default User;
