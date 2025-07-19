import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        //Prevent the page from refreshing
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div>
        <h3>Login</h3>
        <input type="text" placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)} />

        <input type="password" name="" id="" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

        <button
            onClick={handleSubmit}
        >Submit</button>
    </div>
  )
}

export default Login