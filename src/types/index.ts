import { IconType } from "react-icons";

export type TProduct = {
    _id?: any;
    name: string;
    images: Array<string>;
    description: string;
    price: number;
    stock: number;
    category: string;
    rating: number;
    isDeleted: boolean;
  };

  export type TProductCategory = {
    name:string,
    icon:IconType
  }