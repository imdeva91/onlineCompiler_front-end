import React, { useContext } from 'react'
import Navbar from '../Components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editor } from '../context/EditorContext';

const Layout = () => {
  const {theam} = useContext(editor)
  return (
    <div className={`w-[100%] h-[100%] ${theam === "dark" ? "bg-gray-950 text-white":" "}`}>
        <Navbar/>
        <Outlet/>
        <ToastContainer/>

    </div>
  )
}

export default Layout