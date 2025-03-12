import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminLayout from '../../components/layouts/AdminLayout';

function AdminDashboard() {
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
}

export default AdminDashboard;
