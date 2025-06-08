import { Outlet } from 'react-router'
import SettingsSidebar from './setting-sidebar';
import TravellersContextProvider from '@/lib/providers/travellers-context';

const SettingsLayout = () => {
  return (
    <div className="container flex gap-6 mt-6 mb-12">
      <SettingsSidebar />
      <div className="flex-1">
        <TravellersContextProvider>
          <Outlet />
        </TravellersContextProvider>
      </div>
    </div>
  );
}

export default SettingsLayout