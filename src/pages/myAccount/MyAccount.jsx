import React, { useContext } from 'react'
import MyAccountNav from '../../Components/myAccountNav/MyAccountNav'
import { Outlet } from 'react-router-dom'
import { editor } from '../../context/EditorContext'

const MyAccount = () => {
  const {theam} = useContext(editor)

  return (
    <div className={`w-[100%] h-[100%] ${theam === "dark" ? "bg-gray-950 text-white":" "}`}>
      <MyAccountNav/>
      <Outlet/>
    </div>
  )
}

export default MyAccount