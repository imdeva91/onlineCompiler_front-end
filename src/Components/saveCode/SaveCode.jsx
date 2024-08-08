import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./SaveCode.css";
import { GoX } from "react-icons/go";
import { editor } from "../../context/EditorContext";
import Axiosinstance from "../../axios_instance";
import { toast } from "react-toastify";

const schema = yup
  .object({
    title: yup.string().required("title is required"),
    description: yup.string(),
    isPrivate: yup.boolean(),
  })
  .required();

const SaveCode = () => {
  const { setOnSave, value,language } = useContext(editor);
  const code = value;
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
      const response = await Axiosinstance.post(
        "/user/create-code",
        { ...data, code ,language}
      );
      console.log(response)
      setOnSave(false)
      toast.success("Code save sucssesfully", {
        position: "top-right",
        autoClose: 5000,
       
        });

    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 5000,
       
        });
    }
  };

  return (
    <div className="bg-gray-400 bg-transparent w-[100%] h-[100%] flex items-center absolute top-0 ">
      <form
        className="flex flex-col bg-gray-300 px-5 py-4 rounded w-[60vw] m-auto savecode"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex items-center justify-between my-4">
          <h1 className="text-center text-xl font-semibold">Save Code</h1>
          <button
            className="text-2xl font-bold"
            onClick={() => setOnSave(false)}
          >
            <GoX />
          </button>
        </div>

        <label htmlFor="title">Title *</label>
        <input
          type="text"
          id="title"
          placeholder="Title"
          {...register("title")}
        />
        <p className="text-red-500">{errors.title?.message}</p>

        <label htmlFor="description">description*</label>
        <textarea
          type="text"
          id="description"
          placeholder="Description"
          {...register("description")}
        />
        <p className="text-red-500">{errors.description?.message}</p>
        <div className=" flex items-center gap-4 py-4">
          <label htmlFor="isPrivate" className="cursor-pointer">
            IsPrivate
          </label>
          <input
            type="checkbox"
            name="isPrivate"
            id="isPrivate"
            className="cursor-pointer"
            {...register("isPrivate")}
          />
        </div>

        <button className="w-full bg-blue-500 text-white py-2 rounded">
          Save
        </button>
      </form>
    </div>
  );
};

export default SaveCode;
