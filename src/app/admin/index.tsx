import Header from '@/components/layout/header.layout';
import { Outlet } from 'react-router';

const Admin = () => {
  return (
    <div>
      <Header showServiceList={false} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Admin;
