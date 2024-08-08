import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './pages/home/Home'
import SignIn from './pages/signIn/SignIn'
import SignUp from './pages/signUp/SignUp'
import SearchPage from './pages/search/SearchPage'
import MyAccount from './pages/myAccount/MyAccount'
import Profile from './Components/profile/Profile'
import Code from './pages/code/Code'

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
        path:"/user",
        element:<MyAccount/>,
        children:[
          {
            path:"/user",
            element:<Profile/>
          },{
            path:"code",
            element:<Code/>
          },
          {
            path:"post",
            element:<Code/>
          }
        ]
      }
      
    ])
  }
])

  return (
    <RouterProvider router={router}/>
  )
}

export default App