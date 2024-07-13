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
 
  const {pathname} = useLocation();
  const cartItems = useAppSelector(state=>state.cart.cartItems)
  
  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [pathname]);
  useEffect(() => {
    const handleBeforeUnload = (event:any) => {
      event.preventDefault();
   
      // // Modern browsers require setting returnValue for the event
      if(cartItems.length){
        event.returnValue = 'Are you sure you want to leave?';
      }
    };
  
   
    window.addEventListener('beforeunload', handleBeforeUnload);
   
  
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
   
  return <MainLayout />;
}

export default App;
