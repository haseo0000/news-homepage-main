import Logo from "../../assets/logo.svg";
import MenuIcon from "../../assets/icon-menu.svg";

import { HeaderLayout, ImageLayout } from "./header-styled";
import Menu from "../menu/menu";

function Header() {
  const handleShowMenu = () => {
    const body = document.querySelector("body");
    const overlay = document.querySelector(".overlay");
    const menu = document.querySelector(".menu");

    body!.classList.toggle("active");
    menu!.classList.toggle("active");
    overlay!.classList.toggle("active");

    // if (menu instanceof HTMLElement) {
    //   menu.classList.toggle("active");
    // }
  };

  return (
    <>
      <div className="overlay" onClick={() => handleShowMenu()}></div>
      <HeaderLayout>
        <ImageLayout>
          <img src={Logo} alt="Logo" width={"100%"} />
        </ImageLayout>
        <Menu handleShowMenu={handleShowMenu} />
        <ImageLayout onClick={() => handleShowMenu()}>
          <img src={MenuIcon} width={"100%"} alt="MenuIcon" />
        </ImageLayout>
      </HeaderLayout>
    </>
  );
}

export default Header;
