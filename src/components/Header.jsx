import React from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {getAuth, onAuthStateChanged} from "firebase/auth";
import { useEffect } from 'react';

export default function Header() {
  const [pageState, setPageState] = useState("Sign in");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      }else{
        setPageState("Sign in");
      }
    })
  })
  function pathMatchRoute(route){
    if(route === location.pathname){
      return true
    }
  }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-40'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto' >
        <div>
          <img src='https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg' alt='Logo' 
          className='h-5 cursor-pointer' onClick={()=>navigate("/")} />
        </div>
        <div>
          <ul className='flex space-x-10'>
            <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-transparent
             ${pathMatchRoute("/") && "text-slate-950 border-b-slate-400"} cursor-pointer`} onClick={()=>navigate("/")}>Home</li>

            <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-transparent
             ${pathMatchRoute("/offers") && " text-green-800 border-b-green-400"} cursor-pointer`} onClick={()=>navigate("/offers")}>Offers</li>

            <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-transparent
             ${(pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) && "text-rose-800 border-b-rose-400"} cursor-pointer`}
              onClick={()=>navigate("/profile")}>{pageState}</li>

          </ul>
        </div>
      </header>
    </div>
  )
}
