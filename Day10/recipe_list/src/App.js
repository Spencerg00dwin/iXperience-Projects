import React, {useState, useEffect} from 'react'
import{
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/dist/collapse'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import RecipePage from './component/recipes/RecipePage'
import RegisterPage from './component/auth/RegisterPage'
import LoginPage from './component/auth/LoginPage'
import Navbar from './component/common/Navbar'
import {onAuthStateChanged} from 'firebase/auth'
import { auth } from './firebase/firebase'

export default function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  })

  return (
    <BrowserRouter>
      <Navbar user={user} />
      <Routes>
        <Route path='/' element={<RecipePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

