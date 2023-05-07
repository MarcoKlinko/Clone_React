import React from 'react'
import { useState } from 'react'

export default function CreateListing() {
    const [fromData, setFormData] = useState({
    type: "rent",
    name: "",
    address: "",
    description: "",
    bedrooms: 1,
    bathrooms: 1,
    regularPrice: 0,
    discounted: 1,
    parking: false,
    furnished: false,
    offer: false,
});
    const {type, name, bedrooms, bathrooms, address, description, parking, furnished, offer, regularPrice, discounted} = fromData;
    function onChange(){}
  return (
    <main className='max-w-md px-2 mx-auto'>
        <h1 className='text-3xl text-center mt-6 font-bold'>Create a listing</h1>
        <form >
            <p className='text-lg mt-6 font-semibold'>Sell / Rent</p>
            <div className='flex'>
                <button type='button' id='type' value="sale" onClick={onChange} 
                className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
                transition duration-150 ease-in-out w-full ${type === "rent" ? "bg-white text-black" : "bg-slate-700 text-white"}`} >sell</button>

                <button type='button' id='type' value="sale" onClick={onChange} 
                className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
                transition duration-150 ease-in-out w-full ${type === "sale" ? "bg-white text-black" : "bg-slate-700 text-white"}`} >rent</button>
            </div>
            <p className='text-lg mt-6 font-semibold'>Name</p>
            <input type="text" id='name' value={name} onChange={onChange} placeholder="Name" maxLength="32" minLength="4" required 
            className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700
            focus:bg-white focus:border-slate-600 mb-6' />

            <div className='flex space-x-8 mb-6'>
                <div>
                    <p className='text-lg font-semibold'>Beds</p>
                    <input type="number" id='bedrooms' value={bedrooms} onChange={onChange} min="1" max="50" required 
                    className='w-full px-4 py-2 text-gray-700 bg-white border-gray-700 rounded transition duration-150 ease-in-out focus:text-gray-300 
                    focus:border-slate-600 text-center' />
                </div>

                <div>
                    <p className='text-lg font-semibold'>Baths</p>
                    <input type="number" id='bathrooms' value={bathrooms} onChange={onChange} min="1" max="50" required 
                    className='w-full px-4 py-2 text-gray-700 bg-white border-gray-700 rounded transition duration-150 ease-in-out focus:text-gray-300 
                    focus:border-slate-600 text-center' />
                </div>
            </div>

            <p className='text-lg mt-6 font-semibold'>Parking spot</p>
            <div className='flex'>
                <button type='button' id='parking' value={true} onClick={onChange} 
                className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
                transition duration-150 ease-in-out w-full ${!parking ? "bg-white text-black" : "bg-slate-700 text-white"}`} >yes</button>

                <button type='button' id='parking' value={false} onClick={onChange} 
                className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
                transition duration-150 ease-in-out w-full ${parking ? "bg-white text-black" : "bg-slate-700 text-white"}`} >no</button>
            </div>

            <p className='text-lg mt-6 font-semibold'>Furnished</p>
            <div className='flex'>
                <button type='button' id='furnished' value={true} onClick={onChange} 
                className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
                transition duration-150 ease-in-out w-full ${!furnished ? "bg-white text-black" : "bg-slate-700 text-white"}`} >yes</button>

                <button type='button' id='furnished' value={false} onClick={onChange} 
                className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
                transition duration-150 ease-in-out w-full ${furnished ? "bg-white text-black" : "bg-slate-700 text-white"}`} >no</button>
            </div>

            <p className='text-lg mt-6 font-semibold'>Address</p>
            <textarea type="text" id='address' value={address} onChange={onChange} placeholder="Address" required 
            className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700
            focus:bg-white focus:border-slate-600 mb-6' />

            <p className='text-lg font-semibold'>Description</p>
            <textarea type="text" id='description' value={description} onChange={onChange} placeholder="Description" required 
            className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700
            focus:bg-white focus:border-slate-600 ' />

            <p className='text-lg font-semibold mt-6'>Offer</p>
            <div className='flex mb-6'>
                <button type='button' id='offer' value={true} onClick={onChange} 
                className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
                transition duration-150 ease-in-out w-full ${!offer ? "bg-slate-700 text-white" : "bg-white text-black"}`} >yes</button>

                <button type='button' id='offer' value={false} onClick={onChange} 
                className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
                transition duration-150 ease-in-out w-full ${offer ? "bg-slate-700 text-white" : "bg-white text-black"}`} >no</button>
            </div>

            <div className='flex items-center mb-6'>
                <div className=''>
                    <p className='text-lg font-semibold'>Regular Price</p>
                    <div className='flex w-full justify-center items-center'>
                        <input type="number" id='regular price' value={regularPrice} onChange={onChange} min="50" max="50000000" required className="w-full
                        px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700
                        focus:bg-white focus:border-slate-600 text-center" />
                        {type === "rent" && (
                        <div>
                            <p className='text-md w-full whitespace-nowrap'>$ / Month</p>
                        </div>
                    )}
                    </div>
                    
                </div>
            </div>


            <div className='mb-6'>
                    <p className='text-lg font-semibold mt-6'>Discounted Price</p>
                    <input type="number" id='discounted' value={discounted} onChange={onChange} min="50" max="50000000" required 
                    className='px-8 py-2 text-gray-700 bg-white border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-300 
                    focus:border-slate-600 text-center' />
            </div>

            <div className='mb-6'>
                <p className='text-lg font-semibold'>Images</p>
                <p className='text-gray-600'>The first image will be the cover (max 6)</p>
                <input className='w-full px-3 py-1.5 bg-white border border-gray-300
                rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600'
                 type="file" id='image' onChange={onChange} accept=".jpg, .png, .jpeg" multiple required />

            </div>

            <button type='submit' className='mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md 
            hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
                create listing
            </button>

        </form>
    </main>
  )
}
