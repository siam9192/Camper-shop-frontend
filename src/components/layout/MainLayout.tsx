import React from 'react'
import { Outlet } from 'react-router-dom'
import WidthLayout from './WidthLayout'
import Header from './Header'
import Footer from './Footer'
import Sidebar from '../ui/Sidebar'

const MainLayout = () => {
  return (
    <div>
     <Header/>
     <WidthLayout>
      <Outlet/>
      </WidthLayout>
      <Footer/>
      <Sidebar/>
    </div>
  )
}

export default MainLayout