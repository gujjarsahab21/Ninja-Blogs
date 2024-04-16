//logout k bad kuch n kuch action lena pdega dispatch krna pdega, store se reduer lana pdega
//logout authservice k andr hai to wo bhi legegi import it
//dispatch ko use nd ek logouthandler banao iske andr authservice k andr jao then logout call kro 
//most of the cheeze appwrite k andr promises hoti h is promise ko handle krne k liye .then laga diay h

import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch() 
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn