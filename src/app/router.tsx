import {BrowserRouter, Routes, Route, Navigate} from 'react-router'
import Home from './home'
import { PATHS } from '@/config/path.config'
import SearchPage from './search'
import HotelDetails from './hotel-details'
import { SignInPage, SignUpPage } from './auth'
import WithSearchLayout from '@/components/layout/with-search-layout'
import CheckoutPage from './checkout'
import { WithAuthProvider } from '@/lib/providers/auth-context-provider'
import PaymentStatus from './payments'
import SettingLayout from './settings/setting-layout'
import Profile from './settings/profile'
import TravellersManagement from './settings/travellers'
import BookingHistory from './settings/booking-history'
import RegularUserLayout from '@/components/layout/regular-user-layout'
import { WithAdminProvider } from '@/lib/providers/admin-context-provider'
import Admin from './admin'
import Hotels from './admin/hotels'
import CreateHotels from './admin/create-hotels'
import AdminLayout from '@/components/layout/admin-layout'
import Bookings from './admin/bookings'
import Overview from './admin/overview'
import Rooms from './admin/rooms'


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RegularUserLayout />}>
          <Route path="/" element={<Home />} />

          <Route element={<WithSearchLayout />}>
            <Route path={PATHS.SEARCH} element={<SearchPage />} />
            <Route path={PATHS.HOTEL} element={<HotelDetails />} />
          </Route>

          <Route path={PATHS.SIGN_IN} element={<SignInPage />} />
          <Route path={PATHS.SIGN_UP} element={<SignUpPage />} />

          <Route element={<WithAuthProvider />}>
            <Route path={PATHS.CHECKOUT} element={<CheckoutPage />} />
            <Route path={PATHS.PAYMENT_STATUS} element={<PaymentStatus />} />
          </Route>

          <Route element={<SettingLayout />}>
            <Route path={PATHS.SETTINGS.PROFILE} element={<Profile />} />
            <Route
              path={PATHS.SETTINGS.BOOKING_HISTORY}
              element={<BookingHistory />}
            />
            <Route
              path={PATHS.SETTINGS.TRAVELERS_MANAGEMENT}
              element={<TravellersManagement />}
            />
          </Route>
        </Route>

        <Route element={<WithAuthProvider />}>
          <Route element={<WithAdminProvider />}>
            <Route path={PATHS.ADMIN.LIST_HOTELS} element={<Admin />}>
              <Route index element={<Hotels />} />
              <Route
                path={PATHS.ADMIN.CREATE_HOTEL}
                element={<CreateHotels />}
              />
            </Route>
            <Route path={PATHS.ADMIN.DASHBOARD.ROOT} element={<AdminLayout />}>
              <Route
                index
                element={<Navigate to={PATHS.ADMIN.DASHBOARD.OVERVIEW} />}
              />
              <Route
                path={PATHS.ADMIN.DASHBOARD.OVERVIEW}
                element={<Overview />}
              />
              <Route
                path={PATHS.ADMIN.DASHBOARD.BOOKINGS}
                element={<Bookings />}
              />
              <Route
                path={PATHS.ADMIN.DASHBOARD.ROOMS.ROOT}
                element={<Rooms />}
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router
