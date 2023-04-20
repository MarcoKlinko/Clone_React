import React, { useState } from 'react';
import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai";
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';
import {getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {db} from "../firebase";
import { setDoc, serverTimestamp, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  const navigate = useNavigate()
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
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUser, {displayName: name});
      const user = userCredential.user;
      const formDataCopy = {...formData};
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
      await setDoc(doc(db, "users", user.uid), formDataCopy)
      toast.success("Sign up was successfully")
      navigate("/")
      
    } catch (error) {
      toast.error("Something is wrong whit registration")
      
    }
  }
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign Up</h1>
      <div className='flex justify-center flex-wrap mt-8'>
        <div className='md:w-[60%] lg:w-[35%] mb-12 md:mb-6'>
          <img src="https://media.istockphoto.com/id/507400394/photo/golden-key-and-puzzle.jpg?s=1024x1024&w=is&k=20&c=QzawDZEb2_v3ucQiDF3KyEYvNGAFfg6n3hSj_gpxk8I=" alt="key" className='w-full rounded-2xl' />
        </div>
        <div className='w-full md:w-[60%] lg:w-[35%] lg:ml-20'>
          <form onSubmit={onSubmit}>


          <input type="text" id='name' 
            value={name} onChange={onChange} 
            placeholder="Full name" 
            className='w-full px-4 py-2 tex-xl
             text-gray-600 border-gray-400 rounded 
             transition ease-in-out' />

            <input type="email" id='email' 
            value={email} onChange={onChange} 
            placeholder="Email address" 
            className='w-full px-4 py-2 tex-xl
             text-gray-600 border-gray-400 rounded 
             transition ease-in-out mt-4' />

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
              <p className='mb-6'>Have an account? <Link to="/sign-in" className='text-red-600 hover:text-red-800 transition duration-200
              ease-in-out ml-1'>Sign in</Link></p>
              <p>
                <Link to="/forgot-password" className='text-blue-600 hover:text-blue-800 transition duration-200
              ease-in-out'>Forgot password</Link>
              </p>
             </div>

             <button className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-900 transition duration-700
          ease-in-out hover:shadow-lg active:bg-blue-900' type='submit'>
            Sign up</button>

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
