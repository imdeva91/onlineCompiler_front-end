import React, { useContext } from 'react'
import { editor } from '../../context/EditorContext'

const Output = () => {
  const {output,loading} = useContext(editor)
  return (
    <div className='w-[30vw] h-[80vh] bg-black text-white px-5 py-2 overflow-y-auto'>
        {
          loading ? <h1>Loading....</h1> : output ? output.map((line,i)=><p key={i}>{line}</p>) : 'Click "Run Code" to see output here'

        }
    </div>
  )
}

export default Output