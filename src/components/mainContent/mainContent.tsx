import ContentMobileIMG from "../../assets/image-web-3-mobile.jpg";
import ContentDesktopIMG from "../../assets/image-web-3-desktop.jpg";
import {
  DetailsContentLayout,
  ImageContentLayout,
  MainContentLayout,
  TitleContentLayout,
  ButtonContentLayout,
} from "./mainContent-styled";

function MainContent() {
  return (
    <MainContentLayout>
      <ImageContentLayout>
        <picture>
          <source srcSet={ContentDesktopIMG} media="(min-width: 796px)" />
          <img src={ContentMobileIMG} alt="ContentIMG" width={"100%"} height={"100%"} />
        </picture>
      </ImageContentLayout>
      <TitleContentLayout>The Bright Future of Web 3.0?</TitleContentLayout>
      <DetailsContentLayout>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi debitis facilis
          natus deleniti. Libero porro nostrum, ducimus minima iusto obcaecati doloribus
          neque, pariatur voluptatibus sunt corporis, quod quae veritatis ea.
        </span>
        <ButtonContentLayout>READ MORE</ButtonContentLayout>
      </DetailsContentLayout>
    </MainContentLayout>
  );
}

export default MainContent;
