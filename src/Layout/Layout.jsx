import React from 'react'
import Navbar from '../Components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <ToastContainer/>

    </div>
  )
}

export default Layout