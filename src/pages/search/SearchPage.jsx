import React, { useEffect, useState } from 'react'
import Axiosinstance from '../../axios_instance'
import { toast } from 'react-toastify'
import DisplayCode from '../../Components/displayCode/DisplayCode'
import Search from '../../Components/search/Search'

const SearchPage = () => {

    const [codes,setCodes] = useState(null)

    useEffect(()=>{
        const fetchCode = async()=>{
           try {
            const respons = await Axiosinstance.get("/user/user-all-code")
            console.log(respons)
            setCodes(respons?.data.data)
           } catch (error) {
            toast.error(error.response.data.message, {
                position: "top-right",
                autoClose: 5000,
               
                });
            
           }
        }
        fetchCode()
    },[])
    // console.log(codes)
  return (
    <div>
      <Search/>
      <DisplayCode codes={codes} />
    </div>
  )
}

export default SearchPage