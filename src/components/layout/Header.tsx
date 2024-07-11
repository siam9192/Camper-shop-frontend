import React from 'react';
import WidthLayout from './WidthLayout';
import { Link, useLocation } from 'react-router-dom';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import { LuHeart } from 'react-icons/lu';
import { BsCart2 } from 'react-icons/bs';
import IconButton from '../ui/IconButton';
import { HiMenuAlt3 } from 'react-icons/hi';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import toggleSlice, {
  toggleSidebar,
} from '../../redux/features/toggle/toggleSlice';
import Sidebar from '../ui/Sidebar';
type TNavigaion = {
  name: string;
  path: string;
};
const Header = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems.length);

  const navigations: TNavigaion[] = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Products',
      path: '/products',
    },
    {
      name: 'Manage Products',
      path: '/manage-products',
    },
    {
      name: 'About Us',
      path: '/about',
    },
  ];

  const openSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="md:py-10  py-5">
      <WidthLayout>
        <div className="flex justify-between items-center">
          <div className=" flex gap-3 items-center">
            <img
              src="/images/logo.jpg"
              alt=""
              className="w-10 h-10 md:w-14 md:h-14 rounded-full"
            />
            <h1 className=" md:text-2xl text-xl font-medium">
              <span className=" md:text-3xl text-2xl font-semibold text-primary_color">
                Camp
              </span>{' '}
              Shop
            </h1>
          </div>
          <div className="hidden lg:block space-x-5 ">
            {navigations.map((item: TNavigaion, index: number) => {
              return (
                <Link
                  to={item.path}
                  key={index}
                  className={`font-bold ${pathname === item.path ? 'text-secondary_color' : 'text-black'}`}
                >
                  {item.name.toUpperCase()}
                </Link>
              );
            })}
          </div>

          {/* Icons routes */}
          <div className=" flex items-center md:gap-3 gap-1">
            <IconButton icon={HiMiniMagnifyingGlass}></IconButton>
            <IconButton icon={LuHeart} value={'5+'}></IconButton>
            <IconButton
              icon={BsCart2}
              value={cartItems}
              path="/my-cart"
            ></IconButton>
            <Sidebar/>
          </div>
        </div>
      </WidthLayout>
    </div>
  );
};

export default Header;
