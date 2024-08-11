import React, { useEffect, useState } from 'react'
import OTPInput from 'react-otp-input';

const EmailVerify = () => {
    const [otp, setOtp] = useState('');
    // const [email,setEma]

    useEffect(()=>{
       const userEmail =  sessionStorage.getItem("email")
    },[])

    return (
      <div className='w-[100%] h-[100%] flex items-center justify-center m-auto'>
        <div className='flex flex-col items-center gap-7 bg-slate-200 w-[30vw] h-[40vh] py-10 rounded my-20'>
            <h1 className='font-semibold'>Verify your email</h1>
            <p>Code are send </p>
        <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={4}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
        inputType="tel"
        // isInputNum ={tel}
        inputStyle={{
            width:"40px",
            height:"40px",
            borderRadius:"50%",
            // backgroundColor:"gray",
            border:"1px solid gray"

        }}
      />
      <button className='px-4 py-1 bg-blue-500 text-white rounded w-[200px]'>Verify</button>
        </div>
      </div>
    );
}

export default EmailVerify