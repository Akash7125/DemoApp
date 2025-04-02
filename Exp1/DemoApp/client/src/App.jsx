 import { useState, useEffect } from 'react';
import './App.css';
import './index.css';
// import axios from 'axios';
// import RegisterForm from './RegisterForm';

//exp4 imports below
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import AddProducts from './components/AddProduct';
import EditProduct from './components/EditProduct';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast, Bounce } from 'react-toastify';
 



function App() {
    // const [message, setMessage] = useState('');

    // useEffect(() => {
    //     // Fetch API
    //     axios.get("http://localhost:9000/")
    //         .then(response => {
    //             setMessage(response.data);
    //         })
    //         .catch(error => {
    //             setMessage(error.message);
    //         });
    // }, []);

    return (
        <>
            <BrowserRouter>
                <Header />
                <main className='bg-gray-100 flex flex-col pb-20 ' >
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/addproducts" element={<AddProducts />} />
                        <Route path="/editproduct/:id" element={<EditProduct />} />
                    </Routes>
                </main>
                <Footer />

                <ToastContainer position='top-right' autoClose={3000} hideProgressBar={false}
                                closeOnClick={true} transition={Bounce} theme="colored"/>

            </BrowserRouter>

        
            {/* <h1 className='text-red-500'>Welcome to Electricity Board Management System!</h1>
            <RegisterForm /> */}
       </>
    );
}
export default App;

// import React, { useState, useEffect } from 'react';  
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';  
// import axios from 'axios';  
// import Login from './components1/Login';  
// import Register from './components1/Register';  
// import Dashboard from './components1/Dashboard';  

// function App() {  
//   const [user, setUser] = useState(null);  
//   const [products, setProducts] = useState(null);  

//   useEffect(() => {  
//     openDashboard();  
//   }, []);  

//   const openDashboard = async () => {  
//     const token = localStorage.getItem('token');  
//     if (token) {  
//       try {  
//         const response = await axios.get('http://localhost:8000/viewProducts', {  
//           headers: { Authorization: token }  
//         });  
//         setUser(response.data.user);  
//         setProducts(response.data.products);  
//       } catch (err) {  
//         console.log(err);  
//       }  
//     }  
//   };  

//   return (  
//     <BrowserRouter>  
//       <div className="flex flex-col items-center mt-4 max-w-[80%] mx-auto">  
//         <main className="min-h-160 bg-gray-100 w-full">  
//           <Routes>  
//             <Route path='/' element={user ? <Dashboard user={user} products={products} /> : <Login />} />  
//             <Route path='/login' element={<Login />} />  
//             <Route path='/register' element={<Register />} />  
//             <Route path='/dashboard' element={user ? <Dashboard user={user} products={products} /> : <Login />} />  
//           </Routes>  
//         </main>  
//       </div>  
//     </BrowserRouter>  
//   );  
// }  

// export default App;  