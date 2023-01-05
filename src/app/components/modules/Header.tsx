import { FC, ReactElement } from "react";
import "app/styles/modules/headerPage.scss";
import { Logo } from "app/components/elements/Logo";

type ItemType = {
  id: number;
  name: string;
};
type ListItemProps = {
  items: ItemType[];
};

const Header: FC<ListItemProps> = ({ items }): ReactElement => {
  return (
    <div className="header">
      <Logo />
      <ul className="navbar">
        {items.map((item, index) => {
          return (
            <li
              className={item.id === 5 ? "nav-item item-contact" : "nav-item"}
              key={index}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
