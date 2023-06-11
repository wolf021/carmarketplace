import React, { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import DashboardLayout from '../Layouts/DashboardLayout/DashboardLayout'
import CarDetails from '../Pages/CarDetails/CarDetails'
import NotFound from '../Pages/NotFoundPage/NotFound'
import StockPage from '../Dashboard/Pages/StockPage'
import AddListingPage from '../Dashboard/Pages/AddListingPage/AddLiatingPage'
import TradersRegistrationPage from '../Dashboard/Pages/TradersRegistrationPage/TradersRegistrationPage'
import TradersLoginPage from '../Dashboard/Pages/TradersLoginPage/TradersLoginPage'
import UsersPage from '../Dashboard/Pages/UsersPage/UsersPage'





const DashboardRoutes = () => {
  const [isAdmin, setisAdmin] = useState(true)
  return (
    
    <Routes>
       
        <Route path='/' element={<DashboardLayout/>} >
          <Route path="/stock" element={<StockPage />} />
          <Route path="/add-stock" element={<AddListingPage />} />
          {isAdmin &&
          <Route path='/' >

          <Route path="/users" element={<UsersPage />} />
          </Route>
          }
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/trader-registration" element={<TradersRegistrationPage />} />
        <Route path="/trader-login" element={<TradersLoginPage />} />
    </Routes>
  )
}

export default DashboardRoutes