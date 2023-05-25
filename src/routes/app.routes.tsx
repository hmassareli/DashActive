import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Lists from '../pages/Lists';
import Layout from '../components/Layout';

const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/lists/:type' element={<Lists />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};

export default AppRoutes;
