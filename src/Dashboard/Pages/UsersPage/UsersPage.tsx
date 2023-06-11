import React from 'react'
import DataGridTable, { ActionMenuButton } from '../../Components/DataGrid/DataGrid'
import { Avatar, Box, Paper } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'


const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  
 
 
  { field: "name", headerName: "Name", width: 350 },
  { field: "email", headerName: "Email", width: 350 },
  
  { field: "company", headerName: "Company", width: 350 },
 
  {
    field: "actions",
    headerName: "actions",
    width:160,
    renderCell: (params) => <ActionMenuButton params={params}  />,
  },
]

const rows = [
  {
    id:1, name:"John Smith", email:"John Smith@gmail.com", company:"John Smith LLC" ,
  },
  {
    id:2, name:"John Smith", email:"John Smith@gmail.com", company:"John Smith LLC" ,
  },
  {
    id:3, name:"John Smith", email:"John Smith@gmail.com", company:"John Smith LLC" ,
  },
  {
    id:4, name:"John Smith", email:"John Smith@gmail.com", company:"John Smith LLC" ,
  },
  {
    id:5, name:"John Smith", email:"John Smith@gmail.com", company:"John Smith LLC" ,
  },
  {
    id:6, name:"John Smith", email:"John Smith@gmail.com", company:"John Smith LLC" ,
  },
  {
    id:7, name:"John Smith", email:"John Smith@gmail.com", company:"John Smith LLC" ,
  },
]

const UsersPage = () => {
  return (
    <div  >
      <Box padding={2} >

      <DataGridTable rows={rows} columns={columns} />
      </Box>
    </div>
  )
}

export default UsersPage