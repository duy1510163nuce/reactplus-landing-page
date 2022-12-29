import { FC, ReactElement } from "react";
import "app/styles/elements/Header.scss";
import { Logo } from "app/components/elements/Logo";

type ItemType = {
  id: number;
  name: string;
};
type ListItemProps = {
  items: ItemType[];
}

const Header: FC<ListItemProps> = ({items}): ReactElement => {
  // const Navbar = () => {
  //   return (
  //     <ul className="navbar">
  //       {items.map((item, index) => {
  //         return (
  //           <li
  //             className={item.id === 5 ? "nav-item item-contact" : "nav-item"}
  //             key={index}
  //           >
  //             {item.name}
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   );
  // };
  return (
    <div className="header">
      <Logo />
      {/* <Navbar /> */}
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
