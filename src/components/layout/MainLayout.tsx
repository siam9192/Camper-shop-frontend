import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import WidthLayout from './WidthLayout';
import Header from './Header';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

      <ToastContainer />
    </div>
  );
};

export default MainLayout;
