import React, { MouseEventHandler, useState } from 'react'
import { Outlet } from 'react-router'
import Drawer from './Drawer/Drawer'
import { Button, ListItem, Menu } from '@mui/material'
import PrimarySearchAppBar from './Appbar/Appbar'



const DashboardLayout = () => {
  
  






  return (
    <div>
      
     
        <PrimarySearchAppBar />
      
       <div>Header</div>
       
        <Outlet/>
    </div>
  )
}

export default DashboardLayout