import React, { useContext } from 'react'
import signUp from "../../assets/signup.svg"
import { Link, useNavigate } from 'react-router-dom'
import "./Register.css"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { toast } from 'react-toastify'
import Axiosinstance from '../../axios_instance'
import { editor } from '../../context/EditorContext'
import UsersAxiosinstance from '../../user_axios_instance'

const schema = yup
  .object({
    username: yup.string().required("username is required"),
    fullname: yup.string().required("name is required"),
    email:yup.string().email("invalid email").required("email is required"),
    password:yup.string()
    .required(' password is required') 
    .min(6, 'Password is too short - should be 6 chars minimum')
    .max(15, 'Password is too long - should be 15 chars maximum')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
      " One Uppercase, One Lowercase, One Number and One Special Case Character"),
      confirm_password:yup
      .string()
      .required('confirm password is required.')
      .oneOf([yup.ref('password')], 'Your passwords do not match.'),
      terms_conditions:yup.boolean()
  })
  .required()

const Register = () => {
  const {theam} = useContext(editor)
  const navigat = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode:'onChange'
  })
  const onSubmit = async(data) => {
    try {
      const response = await Axiosinstance.post('user/sign-up',data)

      console.log(response)
      sessionStorage.setItem("email",data.email)
      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 5000,
       
        });
  navigat("/signin")

    } catch (error) {
      console.log(error)
      // toast.error(error.response.data.message, {
      //   position: "top-right",
      //   autoClose: 5000,
       
      //   });
      
    }
  }
  return (
    <div className={`flex items-center w-[100%] register py-3  ${
      theam === "dark" ? "bg-gray-950 text-white " : " bg-red-50"
    }`}>
      <div>
        <img className='w-[50vw] py-1 ' src={signUp} alt="" />
      </div>
      <div className='w-[40vw] m-5' >
        <form className={`flex flex-col  px-5 py-4 rounded  ${
      theam === "dark" ? "bg-gray-700  " : " bg-gray-300"
    } `} onSubmit={handleSubmit(onSubmit)}>
          <h1 className='text-center text-xl font-semibold'>Sign Up</h1>
          
            <label htmlFor="username">username *</label>
            <input type="text" id='username' placeholder='Username' {...register("username")} />
            <p className='text-red-500'>{errors.username?.message}</p>

            <label htmlFor="fullname">fullname*</label>
            <input type="text" id="fullname" placeholder='fullname' {...register("fullname")}/>
            <p className='text-red-500'>{errors.fullname?.message}</p>

            <label htmlFor="email">email *</label>
            <input type="email" id='email' placeholder='email' {...register("email")} />
            <p className='text-red-500'>{errors.email?.message}</p>

            <label htmlFor="password">password *</label>
            <input type="password" id='password' placeholder='password' {...register("password")} />
            <p className='text-red-500'>{errors.password?.message}</p>

            <label htmlFor="conform_password"> conform password *</label>
            <input type="password" id='conform_password' placeholder='confirm password' {...register("confirm_password")} />
            <p className='text-red-500'>{errors.confirm_password?.message}</p>
            
            <p className='flex items-center gap-2 mt-1'>
              <input type="checkbox"  className='cursor-pointer' {...register("terms_conditions")}/>
              <span>term & condition</span>
            </p>
            <button className='w-full bg-blue-500 text-white py-2 rounded'>Sign Up</button>
            <p className='mt-1'>
              Alredy have an account ?  <span className='text-blue-400'><Link to="/signIn">Login</Link></span>
            </p>
        </form>
      </div>
    </div>
  )
}

export default Register