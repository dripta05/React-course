import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter] = useState(15)

  const addVal = ()=>{
    setCounter(counter+1)
    console.log(counter);
    
  }
  const subVal = ()=>{
    // same output will come ......It is called Batching but asynchronous
    // setCounter(counter-1)
    // setCounter(counter-1) 
    // setCounter(counter-1)
    // setCounter(counter-1)
    // setCounter(counter-1)

    // counter will be reduced 5 times......It is called Batching but synchronous
    setCounter((prev)=>prev-1)
    // setCounter((prev)=>prev-1)
    // setCounter((prev)=>prev-1)
    // setCounter((prev)=>prev-1)
    // setCounter((prev)=>prev-1)
    console.log(counter);
  }

  return (
    <>
      <h1>Hello There {counter}</h1>
      <h3>counter: {counter}</h3>
      <button onClick={()=>addVal()}>Add value</button>{" "}
      <button onClick={()=>subVal()}>Subtract value</button>
    </>
  )
}

export default App
