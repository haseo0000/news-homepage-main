import { SideContentLayout, CardContentLayout, Line } from "./sideContent-styled";
import { sideItems } from "../../mockData/sideItems";

function SideContent() {
  return (
    <SideContentLayout>
      <h2>New</h2>
      {sideItems.map((item, idx) => (
        <div key={item.id}>
          <CardContentLayout>
            <h3>{item.title}</h3>
            <span>{item.subTitle}</span>
          </CardContentLayout>
          {idx !== sideItems.length - 1 && <Line />}
        </div>
      ))}
    </SideContentLayout>
  );
}

export default SideContent;
