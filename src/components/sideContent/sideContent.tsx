import { SideContentLayout, CardContentLayout, Line } from "./sideContent-styled";

function SideContent() {
  return (
    <SideContentLayout>
      <h2>New</h2>
      <CardContentLayout>
        <h3>Hydrogen VS Electric Cars</h3>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi ex
        </span>
      </CardContentLayout>
      <Line />
      <CardContentLayout>
        <h3>The DonwSides of AI Artistry</h3>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi ex
        </span>
      </CardContentLayout>
      <Line />
      <CardContentLayout>
        <h3>Is VS Funding Drying Up?</h3>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi ex
        </span>
      </CardContentLayout>
    </SideContentLayout>
  );
}

export default SideContent;
