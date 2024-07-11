import { IconType } from 'react-icons';
import { AiOutlineProduct } from 'react-icons/ai';
import { FaRegStar, FaStar, FaStarHalf } from 'react-icons/fa';
import { FiInfo } from 'react-icons/fi';
import { GoHome } from 'react-icons/go';
import { SiManageiq } from 'react-icons/si';
import { Bounce, toast } from 'react-toastify';

export const productCategories = [
  'Tents',
  'Shelter',
  'Sleeping Bags',
  'Backpacks',
  'Camp Furniture',
  'Cooking Gear',
  'Hiking Boots',
  'Outdoor Clothing',
  'Navigation & GPS',
  'Campsite Essentials',
  'Emergency & Safety Gear',
  'Water Filtration',
  'Lighting & Lanterns',
  'Knives & Tools',
  'Electronics & Gadgets',
  'First Aid Kits',
  'Coolers & Storage',
  'Hydration Packs & Bottles',
  'Outdoor Games',
  'Pet Gear',
  'Books & Maps',
  'Gifts & Gadgets',
];

type TNavRoute = {
  name: string;
  path: string;
  icon: IconType;
};

export const navRoutes: TNavRoute[] = [
  {
    name: 'home',
    path: '/',
    icon: GoHome,
  },
  {
    name: 'products',
    path: '/products',
    icon: AiOutlineProduct,
  },
  {
    name: 'manage products',
    path: '/manage-products',
    icon: SiManageiq,
  },
  {
    name: 'about',
    path: '/about',
    icon: FiInfo,
  },
];

export const toastSuccess = (message:string)=> toast.success(message, {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  transition: Bounce,
});
export const toastError = (message:string)=> toast.error(message, {
position: "top-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});

export const generatePages = (totalItem: number, perPage: number) => {
  const pages: number[] = [];
  const totalPage: number = Math.ceil(totalItem / perPage);

  for (let i = 1; i <= totalPage; i++) {
    pages.push(i);
  }

  return pages;
};

export const loadingItems = [1, 2, 3, 4, 5, 6, 7, 8];
