import React, { useState } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';  

function Login() {  
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');  
  const [error, setError] = useState('');  

  const handleSubmit = async (e) => {  
    e.preventDefault();  
    try {  
      const response = await axios.post('http://localhost:8000/login', { email, password });  
      if (response.data.token) {  
        localStorage.setItem('token', response.data.token);  
        window.location.href = '/dashboard';  
      } else {  
        setError(response.data.msg);  
      }  
    } catch (err) {  
      console.log(err);  
      setError('Error');  
    }  
  };  

  return (  
    <div className="flex flex-col mt-12 bg-white p-12">  
      <h1 className="text-2xl font-bold text-center">Login</h1>  
      <form onSubmit={handleSubmit} className="w-80 max-auto">  
        <input  
          type="email"  
          placeholder="Email ID"  
          value={email}  
          onChange={(e) => setEmail(e.target.value)}  
          className="w-full px-4 py-2.5 mb-4 border border-gray-300 focus:border-blue-500"  
          required  
        />  
        <input  
          type="password"  
          placeholder="Password"  
          value={password}  
          onChange={(e) => setPassword(e.target.value)}  
          className="w-full px-4 py-2.5 mb-4 border border-gray-300 focus:border-blue-500"  
          required  
        />  
        <button  
          type="submit"  
          className="w-full px-4 py-2.5 bg-indigo-900 text-white cursor-pointer"  
        >  
          Login  
        </button>  
      </form>  
      {error && <div className="mt-4 text-center text-red-500">{error}</div>}  
      <div className="mt-4">  
        New User? <Link to="/register" className="inline underline text-blue-500">Sign Up</Link>  
      </div>  
    </div>  
  );  
}  

export default Login;  