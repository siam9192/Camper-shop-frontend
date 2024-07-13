import { IconType } from 'react-icons';

export type TProduct = {
  _id?: any;
  name: string;
  images: Array<string>;
  description: string;
  price: number;
  stock: number;
  quantity: number;
  category: string;
  rating: number;
  isDeleted: boolean;
};

export type TProductCategory = {
  name: string;
  icon: IconType;
};

export type TCartProduct = {
  _id: string;
  name: string;
  images: string;
  category: string;
  price: number;
  quantity: number;
  stock: number;
};
