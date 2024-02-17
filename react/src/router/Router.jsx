import React, { Children } from 'react'
import { Navigate, Route, Routes } from "react-router-dom";

import Login from '../pages/auth/Login'
import PageNotFound from '../pages/404/PageNotFound'
import DashboardPage from '../pages/dashboard/DashboardPage'
import ProductsPage from '../pages/products/ProductsPage';
import { CustomersPage, CustomersCreate, CustomersShow, CustomersEdit } from '../pages/customers';
import ProductDetailsPage from '../pages/products/ProductDetailsPage';
import BenefitsPage from '../pages/benefits/BenefitsPage';
import BenefitsCreate from '../pages/benefits/create/BenefitsCreate';
import BenefitsEdit from '../pages/benefits/edit/BenefitsEdit';

import User from '../pages/users/User'
import RegisterForm from '../pages/users/RegisterForm';
import SettingPage from '../pages/setting/SettingPage'
import SettingForm from '../pages/setting/SettingForm'


export const Router = () => {

  return (
    <Routes>
      <Route path="/*" element={<PageNotFound />} />
    
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/" element={<Login />} />

      // SETTINGS
      <Route path="/settings" element={<SettingPage />} />
      <Route path="/settings/create" element={<SettingForm />} />

      // CUSTOMERS
      <Route path="/customers" element={<CustomersPage />} />
      <Route path="/customers/create" element={<CustomersCreate />} />
      <Route strict path="/customers/:customerId" element={<CustomersShow />} />
      <Route path="/customers/:customerId/edit" element={<CustomersEdit />} />

      // PRODUCTS
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:productId" element={<ProductDetailsPage />} />

      // BENEFITS
      <Route path="/benefits" element={<BenefitsPage></BenefitsPage>} />
      <Route path="/benefits=create" element={<BenefitsCreate></BenefitsCreate>} />
      <Route path="/benefits=edit/:id" element={<BenefitsEdit />} />

      <Route path="/user" element={<User />} />
      <Route path="/user/create" element={<RegisterForm />} />

      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;


