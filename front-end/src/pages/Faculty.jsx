import React from 'react';
import { Link } from 'react-router-dom';
import { FaChalkboardTeacher, FaBook, FaUsers, FaClipboardList, FaHome } from "react-icons/fa";

const Faculty = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex items-center justify-between h-16 px-6 bg-[#18181b] text-white">
        <nav className="flex space-x-16 items-center">
          <Link to="/faculty" className="text-xl font-bold">Faculty Dashboard</Link>
          <Link to="/faculty/dashboard" className="flex items-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors p-2 rounded-md">
            <FaHome />
            <span>Dashboard</span>
          </Link>
          <Link to="/faculty/classes" className="flex items-center space-x-2 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors p-2 rounded-md">
            <FaChalkboardTeacher />
            <span>Classes</span>
          </Link>
          <Link to="/faculty/subjects" className="flex items-center space-x-2 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors p-2 rounded-md">
            <FaBook />
            <span>Subjects</span>
          </Link>
          <Link to="/faculty/students" className="flex items-center space-x-2 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors p-2 rounded-md">
            <FaUsers />
            <span>Students</span>
          </Link>
          <Link to="/faculty/attendance" className="flex items-center space-x-2 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors p-2 rounded-md">
            <FaClipboardList />
            <span>Attendance</span>
          </Link>
           <Link to="/login" className="flex items-center space-x-2 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors p-2 rounded-md">
              <span>LogOut</span>
            </Link>
        </nav>
        <div className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full">
          <span className="text-white font-bold">FC</span>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
