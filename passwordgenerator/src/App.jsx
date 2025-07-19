import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passRef = useRef(null)

  const generatePassword = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstwxyz"

    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*_+"

    for(let i=0;i<length;i++){
      let idx = Math.floor(Math.random()*str.length - 1)
      pass += str.charAt(idx)
    }

    setPassword(pass)
  },[length, numberAllowed, charAllowed])


  useEffect(()=>{
    generatePassword()
  },[length, numberAllowed, charAllowed])

  const copyToClipboard = ()=>{
    window.navigator.clipboard.writeText(password)
    passRef.current.select()
  }

  return (
    <>
      <div className="px-16 py-6 bg-gray-500 rounded-md shadow-2xl shadow-gray-400/30">
        <h1 className="text-center font-bold text-2xl mb-8">Password Generator</h1>

        <div className="flex flex-col">

          <div className="flex w-full">
            <input type="text" className="bg-gray-600 w-[350px] rounded-tl-md rounded-bl-md px-3 py-1" 
            value={password} 
            placeholder='Password' 
            readOnly
            ref={passRef}
            />
            <button onClick={()=>copyToClipboard()} className="bg-emerald-500 rounded-tr-md rounded-br-md px-9 py-1">copy</button>
          </div>

          <div className="pt-3 flex gap-2 text-violet-800">

            <input type="range"
             min={6} 
             max={100} 
             value={length} 
             onChange={(e)=>setLength(e.target.value)} 
             name="" id="" className="cursor-pointer"/>

            <span className="">Length: {length}</span>

            <input type="checkbox" 
            defaultChecked={numberAllowed}
            onChange={()=>{
              setNumberAllowed((prev)=>!prev)
            }} 
            name="" id="" />
            <span className="">Numbers</span>

            <input type="checkbox" 
            defaultChecked={charAllowed}
            onChange={()=>{
              setCharAllowed((prev)=>!prev)
            }} 
            name="" id="" />
            <span className="">Characters</span>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
