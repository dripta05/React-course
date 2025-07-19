import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='text-xl p-3 bg-green-500 rounded-tr-xl rounded-tl-xl'>Vite with Tailwindcss</h1>
      <Card username="Quinine" post="Malaria-opt" no="1"/>
      <Card  username="Raserpine" no="2"/>
      <Card post="Medicine" no="3"/>
    </>
  )
}

export default App
