import { Link, useLocation } from 'react-router-dom';
import { navRoutes } from '../../utils/constant';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { Ref, useEffect, useRef } from 'react';
import { toggleSidebar } from '../../redux/features/toggle/toggleSlice';

const Sidebar = () => {
  const { pathname } = useLocation();
  const { isSidebarOpen } = useAppSelector((state) => state.toggle);
  const navRef = useRef(null);

  const dispatch = useAppDispatch();

  return (
    <div
      className={`top-0 ${!isSidebarOpen ? '-left-[200%]' : 'left-0'} fixed w-full h-[100vh] bg-gray-900 bg-opacity-40 lg:hidden block transition-all duration-300`}
    >
      <div className="bg-white w-[80%] h-full" ref={navRef}>
        <nav className=" p-5 ">
          {navRoutes.map((route, index) => {
            return (
              <Link
                to={route.path}
                className={`p-2 ${pathname === route.path ? 'text-primary_color' : 'text-black'} font-bold`}
                key={index}
              >
                <div className="flex items-center gap-3 uppercase">
                  <route.icon className="text-2xl" />
                  <span>{route.name}</span>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
