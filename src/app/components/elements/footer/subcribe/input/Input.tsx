import { FC, ReactElement } from "react";
import "app/styles/footer/Input.scss";

const Input: FC = (): ReactElement => {
  return (
    <div className="sub-fill">
      <input type="text" className="sub-input" placeholder="Your email here" />
      <button className="sub-btn">Subscribe</button>
    </div>
  );
};
export default Input;
