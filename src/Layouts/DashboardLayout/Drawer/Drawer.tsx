import { Box, Button, List, ListItem, SwipeableDrawer } from '@mui/material'
import React, { useState } from 'react'
import { EnumType } from 'typescript'


interface DrawerProps  {
open :boolean 
onClose: ()=> void

}

const TraderPages = [
  {name:"Home", link:"/traders-central"},
  {name:"Add Stock", link:"/traders-central/add-stock"},
  {name:"Stock", link:"/traders-central/stock"},
  {name:"Help & Support", link:"/traders-central"},
  {name:"Website Settings", link:"/traders-central"},
  {name:"Leads", link:"/traders-central"},
  {name:"Subscription", link:"/traders-central"},
]
const AdminPages = [{name:"Home", link:"/traders-central"},
{name:"Add Stock", link:"/traders-central",roles:["admin","trader","moderator"]},
{name:"Stock", link:"/traders-central/stock"},
{name:"Help & Support", link:"/traders-central"},
{name:"Leads", link:"/traders-central"},
{name:"Subscriptions", link:"/traders-central"},
{name:"AnaLytics", link:"/traders-central"},
{name:"Users", link:"/traders-central"},
{name:"Blogs", link:"/traders-central"},
{name:"Library", link:"/traders-central"},
{name:"settings", link:"/traders-central"},
{name:"webpages", link:"/traders-central"},

]

const Drawer = ({open,onClose}:DrawerProps) => {
  const [Roles, setRoles] = useState("Admin")
  

  const HandleRoles = ( Role:string) => {
    setRoles(Role)
  }


  return (
    <Box>
      <SwipeableDrawer   anchor='left' open={open} onOpen={()=>{}} onClose={onClose}>

        <Box alignSelf={"center"} padding={2} width={"full"}  paddingX={4} >

        <Button  onClick={onClose} startIcon={"X"} >Close</Button>
       
        <Box width={"full"} >

      <ListItem onClick={()=>{ HandleRoles("Admin")}} >Admin</ListItem>
      <ListItem onClick={()=>{ HandleRoles("Trader")}} >Trader</ListItem>
        
      <List>
        {Roles === "Admin" && AdminPages.map((page)=>(

         <a href={page.link}> <ListItem>{page.name}</ListItem></a>
        )) }
        {Roles === "Trader" && TraderPages.map((page)=>(
          <a href={page.link}>
          <ListItem>{page.name}</ListItem>
          </a>
        )) }

        </List>
       
         </Box>
         </Box>
      </SwipeableDrawer>
    </Box>
    
  )
}

export default Drawer