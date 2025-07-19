import { useState } from 'react'

function App() {
  
  const [color,setColor] = useState('#1a1a1a')

  const changeColor = (clr)=>{
    setColor(clr);
  }

  return (
    <>
      <div className="p-10 border flex items-end justify-center min-h-screen duration-300" style={{backgroundColor:color}}>
        <button className="bg-orange-500 px-4 py-2 text-white rounded-md font-semibold mx-1 cursor-pointer hover:bg-orange-700  hover:scale-110 hover:ring-2 transition duration-300" onClick={()=>changeColor('#EA580C')}>
          Orange
        </button>{" "}
        <button className="bg-green-500 px-4 py-2 text-white rounded-md font-semibold mx-1 cursor-pointer hover:bg-green-700  hover:scale-110 hover:ring-2 transition duration-300" onClick={()=>changeColor('#16A34A')}>
          Green
        </button>{" "}
        <button className="bg-purple-600 px-4 py-2 text-white rounded-md font-semibold mx-1 cursor-pointer hover:bg-purple-800  hover:scale-110 hover:ring-2 transition duration-300" onClick={()=>changeColor('#6B21A8')}>
          Purple
        </button>
      </div>
    </>
  )
}

export default App
