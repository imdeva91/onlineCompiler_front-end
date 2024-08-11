import React, { useContext } from "react";
import profile from "../../assets/profile.svg";
import { FaUserTie } from "react-icons/fa";
import { MdAlternateEmail, MdEmail } from "react-icons/md";
import { editor } from "../../context/EditorContext";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = () => {
  const navigate = useNavigate()
  const {user,userAllCode,setUser} = useContext(editor)
  const logOut = () => {
    confirm("are you sore !")
    sessionStorage.removeItem("user");
    setUser(null);
    toast.success("Logout succsesfully", {
      position: "top-right",
      autoClose: 5000,
    });
    navigate("/");
  };
  // console.log(user)
  return (
    <div className="w-[100%] h-[100%] flex ">
      <div className="w-[40vw] flex justify-center mt-10">
      <div className="bg-white overflow-hidden shadow rounded-lg border">
    <div className="px-4 py-5 sm:px-6">
    <div className="  flex justify-center py-5">
            <img className="w-[100px] " src={profile} alt="profile" />
          </div>
        <p className="mt-1 max-w-2xl  text-center text-xl text-gray-500">
            {user?.username}
        </p>
    </div>
    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Full name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user?.fullname}
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user?.email}

                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Account Cteated
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {
                      moment(user?.createdAt).format( 'MMMM Do YYYY')
                    }
                </dd>
            </div>
            {/* <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    123 Main St<br/>
                     Anytown, USA 12345
                </dd>
            </div> */}
            <div className="flex items-center justify-between px-6 py-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit Profile</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={logOut}>Logout</button>

            </div>
        </dl>
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
