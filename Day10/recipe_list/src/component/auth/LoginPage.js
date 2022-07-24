import React, {useState} from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../firebase/firebase'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {


    const [password,setPassword] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    async function onLogin(e) {
        e.preventDefault()

        try{
            const userCred =  await signInWithEmailAndPassword(
                auth,
                email,
                password
            )

            console.log(userCred.user)
            navigate('/')
       } catch(err){
        console.log(err)
       }
    }


  return (
    <div className='container mt-4'>
        <div className = 'card card-body'>
            <h1 className='m-0'>Login</h1>
            <form onSubmit = {onLogin}>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                    value = {email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control"></input>
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                    value = {password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="form-control"></input>
                </div>

                <div className='d-grid mt-4'>
                    <button className='btn btn-primary'>
                        Register
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}