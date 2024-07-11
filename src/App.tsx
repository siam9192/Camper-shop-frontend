import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import MainLayout from './components/layout/MainLayout';
import 'preline/preline';
import { IStaticMethods } from 'preline/preline';
import { useLocation } from 'react-router-dom';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}


function App() {
 
  const {pathname} = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [pathname]);
   
  // useEffect(() => {
  //   const handleLoad = () => {
  //   const confirmation =  confirm("On Page reload you may lose your browser")
  //   if(confirmation){
  //     // window.location.href = pathname
      
  //   }
  //   else{
      
  //   }
  //   };
  //   window.addEventListener('load', handleLoad);
  //   return () => {
  //     window.removeEventListener('load', handleLoad);
  //   };
  // }, []);

  return <MainLayout />;
}

export default App;
