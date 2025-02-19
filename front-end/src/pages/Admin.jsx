import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsersCog, FaUserTie, FaClipboardCheck, FaBuilding, FaChartBar, FaHome } from "react-icons/fa";

const Admin = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex items-center justify-between h-16 px-6 bg-[#18181b] text-white">
        <nav className="flex space-x-14 items-center">
          <Link to="/admin" className="text-xl font-bold">Admin Dashboard</Link>
          <Link to="/admin/dashboard" className="flex items-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors p-2 rounded-md">
            <FaHome />
            <span>Dashboard</span>
          </Link>
          <Link to="/admin/manage-users" className="flex items-center space-x-2 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors p-2 rounded-md">
            <FaUsersCog />
            <span>Manage Users</span>
          </Link>
          <Link to="/admin/faculty" className="flex items-center space-x-2 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors p-2 rounded-md">
            <FaUserTie />
            <span>Faculty</span>
          </Link>
          <Link to="/admin/reports" className="flex items-center space-x-2 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors p-2 rounded-md">
            <FaClipboardCheck />
            <span>Reports</span>
          </Link>
          <Link to="/admin/departments" className="flex items-center space-x-2 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors p-2 rounded-md">
            <FaBuilding />
            <span>Departments</span>
          </Link>
          <Link to="/admin/analytics" className="flex items-center space-x-2 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors p-2 rounded-md">
            <FaChartBar />
            <span>Analytics</span>
          </Link>
          <Link to="/login" className="flex items-center space-x-2 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors p-2 rounded-md">
            <span>LogOut</span>
          </Link>
        </nav>
        <div className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full">
          <span className="text-white font-bold">AD</span>
        </div>
      </div>
    </div>
  );
};

export default Admin;
