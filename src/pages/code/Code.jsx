import React, { useContext} from 'react'
import DisplayCode from '../../Components/displayCode/DisplayCode'
import { editor } from '../../context/EditorContext'

const Code = () => {

  const {userAllCode} = useContext(editor)

  return (
    <div className='h-[100%]'>
      <DisplayCode codes={userAllCode}/>
    </div>
  )
}

export default Code