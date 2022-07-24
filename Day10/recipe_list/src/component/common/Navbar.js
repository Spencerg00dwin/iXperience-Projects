import React from 'react'

import {signOut} from 'firebase/auth'
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase';


export default function Navbar(props) {

    async function onLogout(){
        try{
            await signOut(auth)
        } catch(err){
            console.log(err)
        }
    }


  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Recipe List</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className='bi bi-list'></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {
                props.user ?
                <>
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className ='nav-item'>
                <button className='btn btn-secondary' onClick={onLogout}>
                    Logout
                </button>
            </li>
            </>
            :
            <>
            <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">Register</Link>
          </li>
          </>

            }
        </ul>
      </div>
    </div>
  </nav>
  )
  }