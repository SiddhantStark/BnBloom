import React from 'react'
import Header from './header.layout'
import { Outlet } from 'react-router'
import Footer from './footer.layout'

const RegularUserLayout = () => {
  return (
    <>
    <Header showServiceList={true}/>
    <main>
        <Outlet/>    
    </main> 
    <Footer/>
    </>
  )
}

export default RegularUserLayout
