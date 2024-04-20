//1 jb data db se aata h ya kahi n/w se aata h to usme time lgta h to usko show krne k loading state banate h
//2 usestate se ban jayega ye nd usko bydefault true de denge then apne ko dispatch krna h to dispatch ka use krnge
//3 import manually krna dispatch ko,, authservice ko bhi import krdo
// ab jese he ye applica load ho ek useEffect lo aur pucho usse ki aap logged in ho ya nhi
// jese he yaha aaao authservice pucho apka current user kon h 'getcurrentuser se pata lag jayega' 
// .then lagaenge mtlb agr successfully milgya toh isme callback fire hoga
//if else lga denge agr user hoga to dispatch kr denge login() ko nito logout() ko dispatch krenge
// loading ko off(false) finally block me kr denge
// purane return statment ko uda denge nd apna return statement banange
// outlet ko abhi comment kr dena kyuki wo react-router-dom ka part h
// go to main.jsx 

import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (

    


    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App


