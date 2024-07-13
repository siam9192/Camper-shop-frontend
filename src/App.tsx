import { useEffect, useState } from 'react';

import MainLayout from './components/layout/MainLayout';
import 'preline/preline';
import { IStaticMethods } from 'preline/preline';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from './redux/hook';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function App() {
  const { pathname } = useLocation();
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [pathname]);
  useEffect(() => {
    const handleBeforeUnload = (event: any) => {
      event.preventDefault();

      event.returnValue = 'For reload You will loss your cart data';
    };

    if (cartItems.length) {
      window.addEventListener('beforeunload', handleBeforeUnload);
      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }
  }, [cartItems]);

  return <MainLayout />;
}

export default App;
