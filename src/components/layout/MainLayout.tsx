import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import WidthLayout from './WidthLayout';
import Header from './Header';
import Footer from './Footer';
import Sidebar from '../ui/Sidebar';

const MainLayout = () => {
  const { pathname } = useLocation();

  const hiddenPaths = ['/my-cart', '/login', '/signup'];
  return (
    <div>
      <Header />
      <WidthLayout>
        <Outlet />
      </WidthLayout>
      {!hiddenPaths.includes(pathname) && <Footer />}
      <Sidebar />
    </div>
  );
};

export default MainLayout;
