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
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default Router
