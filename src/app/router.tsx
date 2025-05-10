import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router'
import Home from './home'
import Header from '@/components/layout/header.layout'
import Footer from '@/components/layout/footer.layout'
import { PATHS } from '@/config/path.config'
import SearchPage from './search'
import HotelDetails from './hotel-details'
import { SignInPage, SignUpPage } from './auth'


const Router = () => {
  return (
    <BrowserRouter>
     <Header/>
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path={PATHS.SEARCH} element={<SearchPage />}/>
            <Route path={PATHS.HOTEL} element={<HotelDetails />}/>
            <Route path={PATHS.SIGN_IN} element={<SignInPage />}/>
            <Route path={PATHS.SIGN_UP} element={<SignUpPage />}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default Router
