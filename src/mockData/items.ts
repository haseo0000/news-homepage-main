import RetroImg from "../assets/image-retro-pcs.jpg";
import GamingIcon from "../assets/image-gaming-growth.jpg";
import TopLaptopIcon from "../assets/image-top-laptops.jpg";

export interface ItemsT {
  id: number;
  title: string;
  subTitle: string;
  image: string;
}

export const items: ItemsT[] = [
  {
    id: 1,
    title: "Reviving Retro PC's",
    subTitle: "What happens when old PC's are given modern upgrades?",
    image: RetroImg,
  },
  {
    id: 2,
    title: "Top 10 Laptops of 2022",
    subTitle: "Our best picks for various needs and budgets.",
    image: GamingIcon,
  },
  {
    id: 3,
    title: "The Growth of Gaming",
    subTitle: "How the pandemic has sparked fresh opportunities.",
    image: TopLaptopIcon,
  },
];
