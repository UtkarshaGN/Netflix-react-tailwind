import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className='main flex justify-between lg:justify-around md:justify-around py-5 px-5 lg:mb-28 md:mb-28 mb-10'>
        {/*left side*/}
        <div className="left">
            <div className="img">
                <img className=' lg:w-44 md:w-44 w-28' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo"/>
            </div>
        </div>
        
        {/* Right side */}
        
            <div className='flex items-center'>
                <div className=' bg-black text-white lg:px-4 md:px-4 px-3 py-1 mx-3 rounded-md border-[1.5px] border-gray-600 hover:ring-2 hover:ring- gray-200'>
                    <select 
                    name="" 
                    id=""
                    className='cursor-pointer bg-transparent outline-none'>
                        <option value ="English">English</option>
                        <option value ="Hindi" >Hindi</option>
                    </select>
                </div>
                <Link to ={'/signin'}>
                <button type='button' 
                className=' bg-red-600 text-white rounded-md px-5 py-1.5 font-bold hover:bg-red-500'>Sign in
                </button></Link>
            </div>
        

    </div>
      
    </>
  )
}

export default Navbar
