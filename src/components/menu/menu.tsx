import CloseIcon from "../../assets/icon-menu-close.svg";

import { MenuLayout, MenuList, CloseIconLayout } from "./menu-styled";

type Props = {
  handleShowMenu: () => void;
};

function Menu({ handleShowMenu }: Props) {
  return (
    <MenuLayout className="menu">
      <CloseIconLayout>
        <img src={CloseIcon} alt="CloseIcon" onClick={() => handleShowMenu()} />
      </CloseIconLayout>
      <MenuList>
        <span>Home</span>
        <span>New</span>
        <span>Popular</span>
        <span>Trending</span>
        <span>Categories</span>
      </MenuList>
    </MenuLayout>
  );
}

export default Menu;
