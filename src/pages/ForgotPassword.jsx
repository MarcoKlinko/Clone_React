import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import OAuth from '../components/OAuth';

export default function SignIn() {
  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }

  async function onSubmit(e){
    e.preventDefault()
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was sent, see your inbox email");
      
    } catch (error) {
      toast.error("Could not send reset password")
    }
  }
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Forgot password</h1>
      <div className='flex justify-center flex-wrap mt-8'>
        <div className='md:w-[60%] lg:w-[35%] mb-12 md:mb-6'>
          <img src="https://media.istockphoto.com/id/1415234405/photo/closeup-photo-of-young-funny-grimace-girl-touching-head-forgot-turn-off-computer-home.jpg?s=1024x1024&w=is&k=20&c=1SOCeLulk2PHsWlOP9V-nk2KxGyd4UBe4DnR97alrIY=" alt="key" className='w-full rounded-2xl' />
        </div>
        <div className='w-full md:w-[60%] lg:w-[35%] lg:ml-20'>
          <form onSubmit={onSubmit}>

            <input type="email" id='email' 
            value={email} onChange={onChange} 
            placeholder="Adresse e-mail" 
            className='w-full px-4 py-2 tex-xl
             text-gray-600 border-gray-400 rounded 
             transition ease-in-out' />


             <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg mt-4'>
              <p className='mb-6'>Don't have an account? <Link to="/sign-up" className='text-red-600 hover:text-red-800 transition duration-200
              ease-in-out ml-1'>Register</Link></p>
              <p>
                <Link to="/sign-in" className='text-blue-600 hover:text-blue-800 transition duration-200
              ease-in-out'>Sign in instead</Link>
              </p>
             </div>

             <button className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-900 transition duration-700
          ease-in-out hover:shadow-lg active:bg-blue-900' type='submit'>
            Send reset password</button>

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
