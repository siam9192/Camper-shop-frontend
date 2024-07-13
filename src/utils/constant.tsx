import HSOverlay from '@preline/overlay';
import { IconType } from 'react-icons';
import { AiOutlineProduct } from 'react-icons/ai';
import { FaRegStar, FaStar, FaStarHalf } from 'react-icons/fa';
import { FiInfo } from 'react-icons/fi';
import { GoHome } from 'react-icons/go';
import { SiManageiq } from 'react-icons/si';
import { Bounce, toast } from 'react-toastify';
import Swal from 'sweetalert2';

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

export const toastSuccess = (message: string) =>
  toast.success(message, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
    transition: Bounce,
  });
export const toastError = (message: string) =>
  toast.error(message, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
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

export const openPopUp = (clickFn: () => void) => {
  Swal.fire({
    titleText: 'Are You sure',
    showCancelButton: true,
    icon: 'question',
    text: 'You want to delete it ',
    color: 'black',
    confirmButtonText: 'Delete',
    confirmButtonColor: 'black',
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      clickFn();
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info');
    }
  });
};

export const openModal = (id: string) => {
  const modal = document.querySelector(`#${id}`) as HTMLElement;
  modal.setAttribute(
    'class',
    'hs-overlay-backdrop transition duration fixed inset-0 bg-gray-900 bg-opacity-50 dark:bg-opacity-80 dark:bg-neutral-900 z-50 open',
  );

  // HSOverlay.open(modal)
  // HSOverlay.close(modal)
};

export const closeModal = (id: string) => {
  const modal = document.querySelector(`#${id}`) as HTMLElement;
  modal.setAttribute(
    'class',
    'hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none',
  );
  // HSOverlay.close(modal);
};
