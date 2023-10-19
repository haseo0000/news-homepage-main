import GamingIcon from "../../assets/image-gaming-growth.jpg";
import RetroIcon from "../../assets/image-retro-pcs.jpg";
import TopLaptopIcon from "../../assets/image-top-laptops.jpg";

import { ItemsContentLayout, ItemLayout, DetailsLayout } from "./itemsContent-styled";

function ItemsContent() {
  return (
    <ItemsContentLayout>
      <ItemLayout>
        <img src={RetroIcon} alt="RetroIcon" width={"100%"} height={130} />
        <DetailsLayout>
          <h2>01</h2>
          <h3>Reviving Retro PC's</h3>
          <span>What happens when old PC's are given modern upgrades?</span>
        </DetailsLayout>
      </ItemLayout>
      <ItemLayout>
        <img src={TopLaptopIcon} alt="TopLaptopIcon" width={"100%"} height={130} />
        <DetailsLayout>
          <h2>02</h2>
          <h3>Reviving Retro PC's</h3>
          <span>What happens when old PC's are given modern upgrades?</span>
        </DetailsLayout>
      </ItemLayout>
      <ItemLayout>
        <img src={GamingIcon} alt="GamingIcon" width={"100%"} height={130} />
        <DetailsLayout>
          <h2>03</h2>
          <h3>Reviving Retro PC's</h3>
          <span>What happens when old PC's are given modern upgrades?</span>
        </DetailsLayout>
      </ItemLayout>
    </ItemsContentLayout>
  );
}

export default ItemsContent;
