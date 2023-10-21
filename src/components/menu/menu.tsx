import CloseIcon from "../../assets/icon-menu-close.svg";

import { MenuLayout, MenuList, CloseIconLayout } from "./menu-styled";

type Props = {
  handleShowMenu: () => void;
};

const MENUS: string[] = ["Home", "New", "Popular", "Trending", "Categories"];

function Menu({ handleShowMenu }: Props) {
  return (
    <MenuLayout className="menu">
      <CloseIconLayout>
        <img src={CloseIcon} alt="CloseIcon" onClick={() => handleShowMenu()} />
      </CloseIconLayout>
      <MenuList>
        {MENUS.map((menu) => (
          <span>{menu}</span>
        ))}
      </MenuList>
    </MenuLayout>
  );
}

export default Menu;
