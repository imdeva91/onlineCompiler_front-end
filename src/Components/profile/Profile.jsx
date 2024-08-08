import React, { useContext } from "react";
import profile from "../../assets/profile.svg";
import { FaUserTie } from "react-icons/fa";
import { MdAlternateEmail, MdEmail } from "react-icons/md";
import { editor } from "../../context/EditorContext";

const Profile = () => {
  const {user,userAllCode} = useContext(editor)
  return (
    <div className="w-[100%] h-[100%] flex ">
      <div className="w-[40vw] flex justify-center mt-20">
        <div>
          <div className="border-black border-2  flex justify-center py-5">
            <img className="w-[100px] " src={profile} alt="profile" />
          </div>
          <div className="flex flex-col gap-3 py-3">
            <div className="flex items-center gap-3">
            <MdAlternateEmail />


              <h1>{user?.username}</h1>
            </div>
            <div className="flex items-center gap-3">
            <FaUserTie />

              <h1 className="font-semibold">{user?.fullname}</h1>
            </div>
            <div className="flex items-center gap-3">
            <MdEmail />

              <h1>{user?.email}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[60vw] flex flex-col gap-7 mt-20">
        <div className="border-b py-2">Contributions</div>
        <div className="flex items-center gap-7 px-10 text-xl">
          <div className="flex flex-col items-center ">
            <h1>{userAllCode ? userAllCode?.length :0}</h1>
            <h1>Code</h1>
          </div>
          <div className="flex flex-col items-center">
            <h1>0</h1>
            <h1>Post</h1>
          </div>
          <div className="flex flex-col items-center">
            <h1>0</h1>
            <h1>Questions</h1>
          </div>
          <div className="flex flex-col items-center">
            <h1>0</h1>
            <h1>Answers</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
