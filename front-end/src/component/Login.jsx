import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      localStorage.removeItem("role");
      const response = await fetch('http://localhost:7777/users'); 
      const users = await response.json(); 
  
      const user = users.find(u => u.email === email);
  
      if (user) {
        if (`${user.role.toLowerCase()}123` === password.toLowerCase()){
          localStorage.setItem('user', JSON.stringify(user)); 
          navigate(`/${user.role.toLowerCase()}`); 
        } else {
          alert('Invalid password'); 
        }
      } else {
        alert('Invalid email or password'); 
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      alert('Error logging in. Please try again later.');
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input 
            type="email" 
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300 outline-none" 
            placeholder="Enter email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input 
            type="password" 
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300 outline-none" 
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <button 
          onClick={handleLogin} 
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
