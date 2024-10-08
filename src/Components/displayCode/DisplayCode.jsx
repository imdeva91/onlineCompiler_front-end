import React, { useState } from "react";
import { FaCheck, FaCopy } from "react-icons/fa";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { toast } from "react-toastify";
import Loader from "../loader/Loader";
import profile from "../../assets/profile.svg";
import moment from "moment";

const DisplayCode = ({ codes }) => {
  const [copy, setCopy] = useState(null);
// console.log(codes)
  return (
    <div className="w-[100%] h-[100%] ">
      <div className="w-[60vw] flex flex-col gap-4 container m-auto py-10">
        {codes ? (
          codes.map((code) => {
            return (
              <div key={code._id} className="">
                <div className="h-[40px] w-full my-2 flex items-center gap-3">
                  <img className="h-[40px] w-[40px]" src={profile} alt="" />
                  <h1>
                    {/* <p>{code.user.fullname}</p> */}
                    <p>
                      { moment(code.createdAt).startOf("hour").fromNow()
                        // : moment(code.createdAt).startOf("hour").fromNow()
                        }
                    </p>
                  </h1>
                </div>
                <div className="flex flex-col gap-5 bg-slate-300 px-5 py-3 rounded">
                  <div className="flex items-center justify-between">
                    <h1 className="font-semibold">{code.title} </h1>
                    <h1>{code.isPrivate ? "Private" : "Public"}</h1>
                  </div>
                  <div>
                    <div className="w-[100%] bg-slate-100 h-[50px] flex items-center justify-end rounded">
                      {copy === code._id ? (
                        <button className="flex items-center gap-3 px-4 ">
                          <FaCheck />
                          Copied !
                        </button>
                      ) : (
                        <button
                          className="flex items-center gap-3 px-4"
                          onClick={() => {
                            navigator.clipboard.writeText(code.code);
                            toast.success("Code Copied !", {
                              position: "top-right",
                              autoClose: 3000,
                            });
                            setCopy(code._id);
                            setTimeout(() => {
                              setCopy(false);
                            }, 3000);
                          }}
                        >
                          <FaCopy />
                          Copy code
                        </button>
                      )}
                    </div>
                    <SyntaxHighlighter
                      language="javascript"
                      style={atomOneDark}
                      customStyle={{
                        padding: "25px",
                        borderRadius: "5px",
                      }}
                    >
                      {code.code}
                    </SyntaxHighlighter>
                  </div>
                  <p>{code.description}</p>
                </div>
              </div>
            );
          })
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default DisplayCode;
