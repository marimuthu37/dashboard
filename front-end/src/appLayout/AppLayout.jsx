import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../component/Login';
import Student from '../pages/Student';
import Faculty from '../pages/Faculty';
import Admin from '../pages/Admin';

import Fattendance from '../pages/navBarPages/faculty/Fattendance';
import Fdashboard from '../pages/navBarPages/faculty/Fdashboard';
import Fclasses from '../pages/navBarPages/faculty/Fclasses';
import Fsubjects from '../pages/navBarPages/faculty/Fsubjects';
import Fstudents from '../pages/navBarPages/faculty/Fstudents';

import Sacademics from '../pages/navBarPages/student/Sacademics';
import Sachievements from '../pages/navBarPages/student/Sachievements';
import Sexam from '../pages/navBarPages/student/Sexam';
import Sfa from '../pages/navBarPages/student/Sfa';
import Splacements from '../pages/navBarPages/student/Splacements';
import Sattendance from '../pages/navBarPages/student/Sattendance';
import Sdashboard from '../pages/navBarPages/student/Sdashboard';

import Adashboard from '../pages/navBarPages/admin/Adashboard';
import AmanageUsers from '../pages/navBarPages/admin/AmanageUsers';
import Afaculty from '../pages/navBarPages/admin/Afaculty';
import Areports from '../pages/navBarPages/admin/Areports';
import Adepartments from '../pages/navBarPages/admin/Adepartments';
import Aanalytics from '../pages/navBarPages/admin/Aanalytics';

const getUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

const ProtectedRoute = ({ element, allowedRoles }) => {
  const user = getUser();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to={`/${user.role}`} />; 
  }

  return element;
};

const AppLayout = () => {
  return (
    <Routes>

      <Route path="/login" element={<Login />} />

      <Route path="/student" element={<ProtectedRoute element={<Student />} allowedRoles={['student']} />} />
      <Route path="/student/dashboard" element={<ProtectedRoute element={<Sdashboard />} allowedRoles={['student']} />} />
      <Route path="/student/attendance" element={<ProtectedRoute element={<Sattendance />} allowedRoles={['student']} />} />
      <Route path="/student/academics" element={<ProtectedRoute element={<Sacademics />} allowedRoles={['student']} />} />
      <Route path="/student/achievements" element={<ProtectedRoute element={<Sachievements />} allowedRoles={['student']} />} />
      <Route path="/student/exam" element={<ProtectedRoute element={<Sexam />} allowedRoles={['student']} />} />
      <Route path="/student/fa" element={<ProtectedRoute element={<Sfa />} allowedRoles={['student']} />} />
      <Route path="/student/placements" element={<ProtectedRoute element={<Splacements />} allowedRoles={['student']} />} />

      <Route path="/faculty" element={<ProtectedRoute element={<Faculty />} allowedRoles={['faculty']} />} />
      <Route path="/faculty/dashboard" element={<ProtectedRoute element={<Fdashboard />} allowedRoles={['faculty']} />} />
      <Route path="/faculty/classes" element={<ProtectedRoute element={<Fclasses />} allowedRoles={['faculty']} />} />
      <Route path="/faculty/subjects" element={<ProtectedRoute element={<Fsubjects />} allowedRoles={['faculty']} />} />
      <Route path="/faculty/students" element={<ProtectedRoute element={<Fstudents />} allowedRoles={['faculty']} />} />
      <Route path="/faculty/attendance" element={<ProtectedRoute element={<Fattendance />} allowedRoles={['faculty']} />} />

      <Route path="/admin" element={<ProtectedRoute element={<Admin />} allowedRoles={['admin']} />} />
      <Route path="/admin/dashboard" element={<ProtectedRoute element={<Adashboard />} allowedRoles={['admin']} />} />
      <Route path="/admin/manage-users" element={<ProtectedRoute element={<AmanageUsers />} allowedRoles={['admin']} />} />
      <Route path="/admin/faculty" element={<ProtectedRoute element={<Afaculty />} allowedRoles={['admin']} />} />
      <Route path="/admin/reports" element={<ProtectedRoute element={<Areports />} allowedRoles={['admin']} />} />
      <Route path="/admin/departments" element={<ProtectedRoute element={<Adepartments />} allowedRoles={['admin']} />} />
      <Route path="/admin/analytics" element={<ProtectedRoute element={<Aanalytics />} allowedRoles={['admin']} />} />

      <Route path="*" element={<Navigate to={getUser() ? `/${getUser().role}` : "/login"} />} />
    </Routes>
  );
};

export default AppLayout;
