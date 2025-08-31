import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div>
      <h1 className='text-2xl font-bold text-center'>signup</h1>
      <form className='max-w-lg mx-auto m-3 justify-center text-center'>
        <input type="text" placeholder="Username" id='username' className='border border-gray-300 p-2 rounded mb-4 w-full' />
        <input type="email" placeholder="Email" id='email' className='border border-gray-300 p-2 rounded mb-4 w-full' />
        <input type="password" placeholder="Password" id='password' className='border border-gray-300 p-2 rounded mb-4 w-full' />
        <button type="submit" className=' bg-blue-500 cursor-pointer hover:bg-blue-700 text-white p-2 rounded'>Sign Up</button>
      </form>
      <div className='flex mx-auto max-w-lg'>
        <p>have an account?</p>
        <Link to="/signin" className='text-blue-500 hover:underline'>Signin</Link>
      </div>
    </div>
  )
}
