import React from 'react'
import { Outlet } from 'react-router'
import { SidebarProvider } from '../ui/sidebar';
import { AdminHeader } from './admin-header.layout';
import AdminSidebar from './admin-sidebar.layout';

const AdminLayout = () => {
  return (
    <div className="flex items-center justify-start min-h-screen">
      <SidebarProvider
        style={{
          '--sidebar-width': '16rem',
          '--sidebar-width-mobile': '16rem',
          '--sidebar-width-icon': '53px',
        }}
      >
        <AdminSidebar />
        <div className="w-full min-h-screen">
          <AdminHeader />
          <Outlet />
        </div>
      </SidebarProvider>
    </div>
  );
}

export default AdminLayout
