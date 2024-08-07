import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './pages/home/Home'
import SignIn from './pages/signIn/SignIn'
import SignUp from './pages/signUp/SignUp'
import Profile from './pages/profile/Profile'
import SearchPage from './pages/search/SearchPage'

const App = () => {

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:([
      {
        index:true,
        element:<Home/>
      },
      {
        path:"/signin",
        element:<SignIn/>

      },
      {
        path:"/signup",
        element:<SignUp/>
      },
      {
        path:"/search",
        element:<SearchPage/>
      },
      {
        path:"/profile",
        element:<Profile/>
      }
      
    ])
  }
])

  return (
    <RouterProvider router={router}/>
  )
}

export default App