import React, { useState } from 'react';  
import { Link } from 'react-router-dom';  

function Dashboard({ user, products }) {  
  const logout = () => {  
    localStorage.removeItem('token');  
    window.location.replace('/login'); // This prevents going back  
  };  

  return (  
    <div>  
      <header className="bg-indigo-900 w-full p-4">  
        <div className="flex justify-between items-baseline">  
          <h1 className="text-2xl font-semibold text-white">Inventory Management System</h1>  
          <div className="flex flex-row items-baseline">  
            <p className="text-white text-md me-3">Welcome, {user.username}</p>  
            <button onClick={() => logout()} 
            className="text-white underline underline-offset-4 text-lg px-3 py-1.5 cursor-pointer">  
              Logout  
            </button>  
          </div>  
        </div>  
      </header>  

      <div className="flex flex-col py-5 px-5 mb-80">  
        <p className="text-xl text-indigo-900">Welcome!! <br /></p>  
        <span className="text-indigo-600 text-md">Dashboard Functionalities Goes Here </span>   
        <h1 className="text-center font-bold text-2xl text-blue-500">
            Stock Details
        </h1>  

        <table className="border border-gray-400 w-[80%] mx-auto mt-8 text-lg">  
          <caption className="text-left mb-4">  
            <Link to="/addproduct" className="text-blue-700 text-xl underline">Add New Product</Link>  
          </caption>  
          <thead>  
            <tr className="bg-green-200 border border-gray-400">  
              <th className="border border-gray-400 px-3 py-2">S.No.</th>  
              <th className="border border-gray-400 px-3 py-2">Name</th>  
              <th className="border border-gray-400 px-3 py-2">Quantity</th>  
              <th className="border border-gray-400 px-3 py-2">Price</th>  
              <th colSpan={2} className="border border-gray-400 px-3 py-2">Actions</th>  
            </tr>  
          </thead> 
          <tbody>  
  {products.map((item, index) => {  
    return (  
      <tr key={index} className="border border-gray-400">  
        <td className="border border-gray-400 px-3 py-2">{index + 1}</td>  
        <td className="border border-gray-400 px-3 py-2">{item.name}</td>  
        <td className="border border-gray-400 px-3 py-2">{item.quantity}</td>  
        <td className="border border-gray-400 px-3 py-2">{item.price}</td>  
        <td className="border border-gray-400 px-3 py-2">  
          <Link to={`/editproduct/${item._id}`} 
          className="text-blue-800 underline">  
            Edit  
          </Link>  
        </td>  
        <td className="border border-gray-400 px-3 py-3">  
          <button className="text-red-500 underline">
            Delete
            </button>  
        </td>  
      </tr> 
    ) 
})} 
</tbody> 
</table>  
</div> 

<footer className="w-full p-4 bg-indigo-900">  
  <p className="text-white text-center text-sm">  
    &copy;2025 MERN Full Stack Authentication System, All Rights Reserved.  
  </p>  
</footer>  
</div>
);
}
export default Dashboard;