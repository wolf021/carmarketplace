import {
  Avatar,
  Box,
  Button,
  Menu,
  MenuItem,
  Paper,
  Typography,
  backdropClasses,
} from "@mui/material"
import {
  DataGrid,
  GridColDef,
  GridToolbar,
  GridValueGetterParams,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
  GridToolbarQuickFilter,
  GridFilterOperator
} from "@mui/x-data-grid"
import React, { useState } from "react"
import { Link } from "react-router-dom"



interface MyTableProps {
  rows: any[]
  columns: any[]
}


export const ActionMenuButton =({params}:any)=>{
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  
  const handleActionClick =(e: React.MouseEvent<HTMLButtonElement>) =>{
  setAnchorEl(e.currentTarget)
  }
  const handleActionClose =() =>{
  setAnchorEl(null)
  }
  
    return(
      <div>
      <Button onClick={handleActionClick}>Actions</Button>
      <Menu open={Boolean(anchorEl)}
      onClose={handleActionClose}
      anchorEl={anchorEl}
  
      >
  <Link to={`/traders-central/add-stock/${params.row.id}`}>
  
  <MenuItem >Edit</MenuItem>
  </Link>
  <MenuItem>Re Advertise</MenuItem>
  <MenuItem onClick={()=>alert(`item deleted:${params.row.id}`)} >Sold & Delete</MenuItem>
      </Menu>
      </div>
    )
  }

   //Handle Status Button

   export const HandleStatus = ({item}:{item:boolean}) =>(
    <>
    
    {item ? (
      <Typography
        variant="body1"
        fontWeight={"500"}
        color={"green"}
      >
        Active
      </Typography>
    ) : (
      <Typography
        variant="body1"
        fontWeight={"500"}
       color={"grey"}
      >
        Inactive
      </Typography>
    )}
    </>
  )
  

const customToolBar = () => {
  return (
   

    <GridToolbarContainer sx={{justifyContent:"space-between"}} >
      <Box>

      <GridToolbarColumnsButton  />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
      </Box>
      <Box width={"auto"} >

      <GridToolbarQuickFilter variant="outlined"  fullWidth />
      </Box>
    </GridToolbarContainer>
    
  )
}

const DataGridTable = ({rows,columns}:MyTableProps) => {
 
 


  return (
    <Box style={{ width: "100%",position:"relative" }}>
      <DataGrid
     
      disableRowSelectionOnClick
      checkboxSelection
        getRowHeight={() => "auto"}
        slots={{ toolbar: customToolBar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: {
              debounceMs: 500,
              sx: { backgroundColor: "white" },
            },
           
          },
          filterPanel:{
            
            sx:{
             '& .MuiDataGrid-filterForm':{flexDirection: "column"}
            },
            filterFormProps: {
              columnInputProps: {
                variant: 'outlined',
                size: 'small',
                sx: { mt: '0.9rem',width:"100%" },
              },
              operatorInputProps: {
                variant: 'outlined',
                size: 'small',
                sx: { mt: '0.9rem',width:"100%" },
              },
              valueInputProps: {
                InputComponentProps: {
                  variant: 'outlined',
                  size: 'small',
                  sx: { mt: 'auto',width:"100%" },
                },
                sx: { mt: '0.9rem',width:"100%" },
              },
              deleteIconProps: {
                sx: {
                  '& .MuiSvgIcon-root': { color: '#d32f2f',borderRadius:"0"},
                },
              },
            }
           }
        }}
        
        sx={{
          "&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell": {
            py: "9px",
          },
        }}
        rows={rows}
        columns={columns}
      />
    </Box>
  )
}

export default DataGridTable
