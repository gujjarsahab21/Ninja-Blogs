// selector bhi legega kyuki selector hoga tbhi toh store me jake payunga ki user logged in hai ya nhi user logged in hai ya nhi.
// sbse phle state me se nikalna pdega authenticated hai ya nhi kese nikalenge useSelector se
//state me se auth me jao auth me se status lo wo intialstate wala milega jisme status false hoga
// is tarah ki navigation bar jb bhi banti h to ek array banaya jata h aur uspe loop kiya jata h
//home,login,signup,allpost,addpost in sbko array me rkh denge 
//return k andar header banaenge header k andr container apka nav bar bhi container k andr he hai
// sbse phle ek nav component lenge fir logo lga denge flex me he aur fir unordered list ke andr loop lga denge
// line71 me likha hua statement ye batata h li ki agr '&&' iske phle likha hua statement(jo ki authStatus  hai) agr true ...
// hoga tb he && iske baad likhi hui cheez chalegi

import React, { useState } from "react";
import {Container , Logo , LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Header() {

    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    const navItems = [
        {
            name : 'Home' ,
            slug : '/' ,
            active : true 
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
        
    ]

    return (
        <header className='py-3 shadow bg-gray-500'>
          <Container>
            <nav className='flex'>
              <div className='mr-4'>
                <Link to='/'>
                  <Logo width='70px'   />
    
                  </Link>
              </div>
              <ul className='flex ml-auto'>
                {navItems.map((item) => 
                item.active ? (
                  <li key={item.name}>
                    <button
                    onClick={() => navigate(item.slug)}
                    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                    >{item.name}</button>
                  </li>
                ) : null
                )}
                {authStatus && (
                  <li>
                    <LogoutBtn />
                  </li>
                )}
              </ul>
            </nav>
            </Container>
        </header>
      )
    }
    
    export default Header