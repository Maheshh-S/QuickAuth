import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface FormData { 
  username: string;
  email: string;
  password: string;
}

export default function Signup() {
  // ✅ useState should be at the top

  const [loading,setLoading] = useState(false);
  const[error , setError] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: ""
  });

  // ✅ handleChange function
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   
   const{id,value} = e.target;
   
   setFormData(prev =>({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();


    try {
      
      setLoading(true);
      const res = await fetch('/api/auth/signup',{
        method:"POST",
        headers:{
          "Content-Type" : "application/json",
        },
        body:JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      setLoading(false);
      if(data.sucess == false){
        setError(true);
        return;
      }
     setError(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
    
  }


  return (
    <div>
      <h1 className='text-2xl font-bold text-center'>Signup</h1>
      <form onSubmit={handleSubmit}
        className='max-w-lg mx-auto m-3 justify-center text-center'
      >
        <input 
          type="text" 
          placeholder="Username" 
          id='username' 
          className='border border-gray-300 p-2 rounded mb-4 w-full' 
          onChange={handleChange} 
        />
        <input 
          type="email" 
          placeholder="Email" 
          id='email' 
          className='border border-gray-300 p-2 rounded mb-4 w-full' 
          onChange={handleChange} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          id='password' 
          className='border border-gray-300 p-2 rounded mb-4 w-full' 
          onChange={handleChange} 
        />
        <button disabled={loading}
          type="submit" 
          className='bg-blue-500 cursor-pointer hover:bg-blue-700 text-white p-2 rounded'
        >
         {loading ? 'Loaadinnggg...' : 'Sign Up' }
        </button>
      </form>
      <div className='flex mx-auto max-w-lg'>
        <p>Have an account?</p>
        <Link to="/signin" className='text-blue-500 hover:underline ml-1'>
          Signin
        </Link>
      <p className='text-red-600 mt-5'>{error && 'somthing went wrong'}</p>
    </div>
      </div>
  )
}
