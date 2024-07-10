import { IconType } from 'react-icons';
import { AiOutlineProduct } from 'react-icons/ai';
import { FaRegStar, FaStar, FaStarHalf } from 'react-icons/fa';
import { FiInfo } from 'react-icons/fi';
import { GoHome } from 'react-icons/go';
import { SiManageiq } from 'react-icons/si';

export const productCategories = [
  'Tents',
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

export const loadingItems = [1, 2, 3, 4, 5, 6, 7, 8];
