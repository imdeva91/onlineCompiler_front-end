import React, { useContext } from "react";
import login from "../../assets/login.svg";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { editor } from "../../context/EditorContext";
import Axiosinstance from "../../axios_instance";

const schema = yup
  .object({
    email: yup.string().email("invalid email").required("email is required"),
    password: yup
      .string()
      .required(" password is required")
      .min(6, "Password is too short - should be 6 chars minimum")
      .max(15, "Password is too long - should be 15 chars maximum")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
        " One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  })
  .required();

const Login = () => {
  const navigat = useNavigate();
  const { setUser, theam } = useContext(editor);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onSubmit = async (data) => {
    try {
      const response = await Axiosinstance.post("/user/login", data);
      localStorage.setItem("token", response.data.token);
      sessionStorage.setItem("user", JSON.stringify(response.data.data));
      setUser(response.data.data);

      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 5000,
      });
      navigat("/");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  return (
    <div
      className={`w-[100%] h-[100%] flex  login  py-6 ${
        theam === "dark" ? "bg-gray-950 " : "bg-red-50"
      }`}
    >
      <div>
        <img className="w-[43vw] py-2" src={login} alt="" />
      </div>
      <div className="w-[40vw] ml-20 mt-10 ">
        <form
          className={`flex flex-col px-5 py-4 rounded ${
            theam === "dark" ? "bg-gray-700 " : " bg-gray-300"
          }`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-center text-xl font-semibold">Login</h1>

          <label htmlFor="email">email *</label>
          <input
            type="email"
            id="email"
            placeholder="email"
            {...register("email")}
          />
          <p className="text-red-500">{errors.email?.message}</p>

          <label htmlFor="password">password *</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            {...register("password")}
          />
          <p className="text-red-500">{errors.password?.message}</p>

          <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded">
            Login
          </button>
          <p className="mt-1">
            Don't have an account ?{" "}
            <span className="text-blue-400">
              <Link to="/signup">Sign Up</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
