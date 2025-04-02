import React, { useState } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';  

function Register() {  
  const [username, setUsername] = useState('');  
  const [password, setPassword] = useState('');  
  const [email, setEmail] = useState('');  
  const [status, setStatus] = useState('');  

  const handleSubmit = async (e) => {  
    e.preventDefault();  
    try {  
      const response = await axios.post('http://localhost:8000/register', { username, password, email });  
      setStatus(response.data.msg);  
    } catch (err) {  
      setStatus('Error registering ' + err.message);  
    }  
  };  

  return (  
    <div className="flex flex-col mt-12 bg-white p-6">  
      <h2 className="text-2xl font-bold text-center">Register</h2>  
      <form onSubmit={handleSubmit} className="w-80 max-auto">  
        <input  
          type="text"  
          placeholder="Username"  
          value={username}  
          onChange={(e) => setUsername(e.target.value)}  
          className="w-full px-4 py-2.5 mb-2 border border-gray-300 focus:border-blue-500"  
          required  
        />  
        <input  
          type="password"  
          placeholder="Password"  
          value={password}  
          onChange={(e) => setPassword(e.target.value)}  
          className="w-full px-4 py-2.5 mb-2 border border-gray-300"  
          required  
        />  
        <input  
          type="email"  
          placeholder="Email-ID"  
          value={email}  
          onChange={(e) => setEmail(e.target.value)}  
          className="w-full px-4 py-2.5 mb-2 border border-gray-300"  
          required  
        />  
        <button  
          type="submit"  
          className="w-full px-4 py-2.5 bg-indigo-900 text-white border cursor-pointer"  
        >  
          Register  
        </button>  
        <div className="mt-4 text-center text-red-500">{status}</div>  
        <div className="mt-4">  
          Existing User? <Link to="/login" className="inline underline text-blue-500">Login</Link>  
        </div>  
      </form>  
    </div>  
  );  
}  

export default Register;  