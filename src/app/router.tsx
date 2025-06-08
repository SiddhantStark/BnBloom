import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router'
import Home from './home'
import Header from '@/components/layout/header.layout'
import Footer from '@/components/layout/footer.layout'
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


const Router = () => {
  return (
    <BrowserRouter>
     <Header/>
        <Routes>
            <Route path="/" element={<Home />} /> 

            <Route element={<WithSearchLayout />}>
              <Route path={PATHS.SEARCH} element={<SearchPage />}/>
              <Route path={PATHS.HOTEL} element={<HotelDetails />}/>
            </Route>
            <Route path={PATHS.SIGN_IN} element={<SignInPage />}/>
            <Route path={PATHS.SIGN_UP} element={<SignUpPage />}/>

            <Route element={<WithAuthProvider/>}>
            <Route path={PATHS.CHECKOUT} element={<CheckoutPage />} />
            <Route path={PATHS.PAYMENT_STATUS} element={<PaymentStatus/>} />
            </Route>

            <Route element={<WithAuthProvider/>}>
            <Route path={PATHS.CHECKOUT} element={<CheckoutPage />} />
            <Route path={PATHS.PAYMENT_STATUS} element={<PaymentStatus/>} />
            </Route>

            <Route element={<SettingLayout/>}>
            <Route path={PATHS.SETTINGS.PROFILE} element={<Profile />} />
            <Route path={PATHS.SETTINGS.BOOKING_HISTORY} element={<BookingHistory/>} />
            <Route path={PATHS.SETTINGS.TRAVELERS_MANAGEMENT} element={<TravellersManagement/>} />
            </Route>

        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default Router
