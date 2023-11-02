import { TCard } from "src/components/list-card/card";
import { IRelatedProduct } from "../detail/type";

export type TProductAPI = {
  id: number;
  name: string;
  alias: string;
  price: number;
  description: string;
  size: string;
  shortDescription: string;
  quantity: number;
  deleted: boolean;
  categories: string;
  relatedProducts: string;
  feature: boolean;
  image: string;
};

export const convert = (data: IRelatedProduct[]): TCard[] => {
  return data.map((item) => ({
    desc: item.shortDescription,
    price: item.price,
    name: item.name,
    src: item.image,
    alt: item.name,
    id: item.id,
  }));
};
