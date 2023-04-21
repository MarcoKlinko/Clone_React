import React, { useState } from 'react';
import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  async function onSubmit(e){
    e.preventDefault()
    try {
      const auth = getAuth()
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      
      if(userCredential.user){
        navigate("/")
      }
      
    } catch (error) {
      toast.error("Bad user credentials")
      
    }
  }
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign In</h1>
      <div className='flex justify-center flex-wrap mt-8'>
        <div className='md:w-[60%] lg:w-[35%] mb-12 md:mb-6'>
          <img src="https://images.unsplash.com/photo-1503792070985-b4147d061915?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1123&q=80" alt="key" className='w-full rounded-2xl' />
        </div>
        <div className='w-full md:w-[60%] lg:w-[35%] lg:ml-20'>
          <form onSubmit={onSubmit}>

            <input type="email" id='email' 
            value={email} onChange={onChange} 
            placeholder="Adresse e-mail" 
            className='w-full px-4 py-2 tex-xl
             text-gray-600 border-gray-400 rounded 
             transition ease-in-out' />

            <div className='relative'>
              <input type={showPassword ? "text" : "password"} 
              id='password' 
              value={password} onChange={onChange} 
              placeholder="Mots de passe" 
              className='w-full px-4 py-2 tex-xl
              text-gray-600 border-gray-400 rounded 
              transition ease-in-out mt-4' />
              {showPassword ? (<AiFillEye className='
              absolute right-3 top-6 text-xl cursor-pointer'
              onClick={() => setShowPassword ((prevState) => !prevState)}/>) :(
              <AiFillEyeInvisible className='
              absolute right-3 top-6 text-xl cursor-pointer'
              onClick={() => setShowPassword ((prevState) => !prevState)}/>)}
             </div>

             <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg mt-4'>
              <p className='mb-6'>Don't have an account? <Link to="/sign-up" className='text-red-600 hover:text-red-800 transition duration-200
              ease-in-out ml-1'>Register</Link></p>
              <p>
                <Link to="/forgot-password" className='text-blue-600 hover:text-blue-800 transition duration-200
              ease-in-out'>Forgot password</Link>
              </p>
             </div>

             <button className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-900 transition duration-700
          ease-in-out hover:shadow-lg active:bg-blue-900' type='submit'>
            Sign in</button>

          <div className='flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300 '>
            <p className='text-center font-semibold mx-4'>OR</p>
          </div>

          <OAuth />

          </form>
          

        </div>
      </div>
    </section>
  )
}
