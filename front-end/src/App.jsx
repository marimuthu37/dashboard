import React from 'react';
import AppLayout from './appLayout/AppLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './component/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
