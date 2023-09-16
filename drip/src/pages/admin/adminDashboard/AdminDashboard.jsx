import React from 'react'
import AdminLayout from '../../../components/adminDashboard/AdminLayout';
import { useLocation } from 'react-router-dom';

import AdminProfile from '../../../components/adminDashboard/AdminProfile';
import ManageUsers from '../../../components/adminDashboard/ManageUsers';
import AddCategory from '../../../components/adminDashboard/AddCategory';
import ManageProducts from '../../../components/adminDashboard/ManageProducts';
import ManageOrders from '../../../components/adminDashboard/ManageOrders';

function AdminDashboard() {
   const location=useLocation();
    console.log(location.pathname)
  return (
    <AdminLayout>
      {location.pathname==="/admin"&&<AdminProfile/>}
      {location.pathname==="/admin/manage-users"&&<ManageUsers/>}
      {location.pathname==="/admin/manage-orders"&&<ManageOrders/>}
      {location.pathname==="/admin/category"&&<AddCategory/>}
      {location.pathname==="/admin/products"&&<ManageProducts/>}
    </AdminLayout>
  )
}

export default AdminDashboard