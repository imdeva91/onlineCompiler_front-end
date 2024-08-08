import React, { useContext, useEffect, useState } from 'react'
import DisplayCode from '../../Components/displayCode/DisplayCode'
import Axiosinstance from '../../axios_instance'
import { editor } from '../../context/EditorContext'

const Code = () => {
  const [codes,setCodes] = useState(null)
  // const {setUserCodeCount} = useContext(editor)
  useEffect(()=>{
    const fetchCode =async()=>{
      const response = await Axiosinstance.get("/user/user-all-code")
      setCodes(response.data.data)
    }
    fetchCode()
    // console.log(codes?.length)
    // setUserCodeCount(codes?.length)

  },[])
  return (
    <div className='h-[100%]'>
      <DisplayCode codes={codes}/>
    </div>
  )
}

export default Code