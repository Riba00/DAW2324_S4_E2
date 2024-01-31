import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";

import Login from '../pages/auth/Login'
import PageNotFound from '../pages/404/PageNotFound'
import DashboardPage from '../pages/dashboard/DashboardPage'
import ProductsPage from '../pages/products/ProductsPage';

export const Router = () => {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;


