 
      <div className="p-6 grid grid-cols-3 gap-6">
        
        <div className="bg-[#18181b] rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <img
              src={}
              alt="Profile"
              className="w-20 h-20 rounded-md"
            />
            <div className="ml-4">
              <h2 className="text-lg font-bold">MARIMUTHU G</h2>
              <p className="text-gray-400">7376242CB136</p>
              <p className="text-gray-400">SEMESTER - I</p>
              <p className="text-purple-400 font-bold">CONTINUING</p>
            </div>
          </div>
          <p className="mt-4 text-gray-300">B.Tech. - COMPUTER SCIENCE AND BUSINESS SYSTEMS</p>
          <p className="text-gray-400 mt-2">
            <span className="font-bold text-white">Mentor:</span> SATHIYA B (CS11088) <FaPhone className="inline text-blue-400" />
          </p>
          <p className="text-gray-400">
            <span className="font-bold text-white">Special Lab:</span> Not Assigned
          </p>
          <p className="text-gray-400">
            <span className="font-bold text-white">Boarding:</span> -
          </p>
          <p className="text-gray-400 mt-2">
            <span className="font-bold text-white"> Warden:</span>Mr.DIVAKAR R <FaPhone className="inline text-blue-400" />
          </p>
        </div>

    
        <div className="bg-[#18181b] p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-4">Attendance Overview</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 flex items-center justify-center bg-green-500 rounded-md">
                ⏳
              </div>
              <p>Total Days: <span className="font-bold">8</span></p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 flex items-center justify-center bg-orange-500 rounded-md">
                📅
              </div>
              <p>Present Days: <span className="font-bold">4</span></p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 flex items-center justify-center bg-red-500 rounded-md">
                🔄
              </div>
              <p>Leave: <span className="font-bold">4</span></p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-md">
                🎒
              </div>
              <p>On Duty: <span className="font-bold">0</span></p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 flex items-center justify-center bg-purple-500 rounded-md">
                ⏳
              </div>
              <p>Percentage: <span className="font-bold">50%</span></p>
            </div>
          </div>
        </div>

        <div className="bg-[#18181b] p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-4">Semester Grade Point Average (SGPA)</h3>
          <ul className="text-gray-300">
            <li>5</li>
            <li>4</li>
            <li>3</li>
            <li>2</li>
            <li>1</li>
            <li>0</li>
          </ul>
        </div>
      </div>



      import { FaUserGraduate, FaBriefcase, FaCheckSquare, FaTrophy, FaChevronDown, FaHome, FaPhone } from "react-icons/fa";

const Dashboard = () => {

  return (
    <div className="bg-black  text-white">
      
      <div className="flex items-center justify-between h-16 px-6 bg-[#18181b] text-white">
        <nav className="flex space-x-16 items-center">
          <a href="#" className="text-xl font-bold">Dashboard</a>
          <a href="#" className="flex items-center  text-gray-400 hover:text-whit hover:bg-gray-700 transition-colors p-2 rounded-md ">
            <FaHome />
            <span>Profile</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white  hover:bg-gray-700 transition-colors p-2 rounded-md">
            <FaUserGraduate />
            <span>Placements</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white  hover:bg-gray-700 transition-colors p-2 rounded-md">
            <FaBriefcase />
            <span>Academics</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white  hover:bg-gray-700 transition-colors p-2 rounded-md">
            <FaCheckSquare />
            <span>FA</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white  hover:bg-gray-700 transition-colors p-2 rounded-md">
            <FaTrophy />
            <span>Achievements</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white  hover:bg-gray-700 transition-colors p-2 rounded-md">
            <span>Exam</span>
            <FaChevronDown />
          </a>
        </nav>
        <div className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full">
          <span className="text-white font-bold">MG</span>
        </div>
      </div>

    
    </div>
  );
};

export default Dashboard;



  // const User = {
    //       userId: 1,
    //       name: 'ryzen',
    //       role: 'student',
    //     }

    const User ={
            userId: 2,
            name: 'intel',
            role: 'faculty',
          }
    
    // const User ={
    //         userId: 3,
    //         name: 'Victus',
    //         role: 'admin',
    //       }   