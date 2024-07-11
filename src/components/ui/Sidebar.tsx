import { Link, useLocation } from 'react-router-dom';
import { navRoutes } from '../../utils/constant';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { Ref, useEffect, useRef } from 'react';
import { toggleSidebar } from '../../redux/features/toggle/toggleSlice';
import IconButton from './IconButton';
import { HiMenuAlt3 } from 'react-icons/hi';

const Sidebar = () => {
  const { pathname } = useLocation();
  const { isSidebarOpen } = useAppSelector((state) => state.toggle);
  const navRef = useRef(null);

  const dispatch = useAppDispatch();

  return (
    
    // <div
    //    classNameName={`top-0 ${!isSidebarOpen ? '-left-[200%]' : 'left-0'} fixed w-full h-[100vh] bg-gray-900 bg-opacity-40 lg:hidden block transition-all duration-300`}
    // >
    //   <div  classNameName="bg-white w-[80%] h-full" ref={navRef}>
    //     <nav  classNameName=" p-5 ">
    //       {navRoutes.map((route, index) => {
    //         return (
    //           <Link
    //             to={route.path}
    //              classNameName={`p-2 ${pathname === route.path ? 'text-primary_color' : 'text-black'} font-bold`}
    //             key={index}
    //           >
    //             <div  classNameName="flex items-center gap-3 uppercase">
    //               <route.icon  classNameName="text-2xl" />
    //               <span>{route.name}</span>
    //             </div>
    //           </Link>
    //         );
    //       })}
    //     </nav>
    //   </div>
    // </div>
   
<div>
<button type="button"  className="text-gray-500 hover:text-gray-600" data-hs-overlay="#docs-sidebar" aria-controls="docs-sidebar" aria-label="Toggle navigation">
<IconButton
              icon={HiMenuAlt3}
              size="25px"
              className="lg:hidden"
            ></IconButton>
</button>



<div id="docs-sidebar"  className="hs-overlay  [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-[60%] bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:hidden lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-800 dark:border-neutral-700 ">
 
  <nav  className=" p-5 ">
        {navRoutes.map((route, index) => {
            return (
              <Link
                to={route.path}
                 className={`p-2 ${pathname === route.path ? 'text-primary_color' : 'text-black'} font-bold`}
                key={index}
              >
                <div  className="flex items-center gap-3 uppercase">
                  <route.icon  className="text-2xl" />
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
