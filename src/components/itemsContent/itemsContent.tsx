import { ItemsContentLayout, ItemLayout, DetailsLayout } from "./itemsContent-styled";
import { ItemsT, items } from "../../mockData/items";

function ItemsContent() {
  return (
    <ItemsContentLayout>
      {items.map((item, idx) => (
        <ItemCard key={item.id} item={item} idx={idx} />
      ))}
    </ItemsContentLayout>
  );
}

export default ItemsContent;

type ItemCardProps = {
  item: ItemsT;
  idx: number;
};

const ItemCard = ({ item, idx }: ItemCardProps) => {
  const num = idx + 1;

  return (
    <ItemLayout>
      <img src={item.image} alt={item.image} width={"100%"} height={130} />
      <DetailsLayout>
        <h2>{idx < 10 ? `0${num}` : num}</h2>
        <h3>{item.title}</h3>
        <span>{item.subTitle}</span>
      </DetailsLayout>
    </ItemLayout>
  );
};
