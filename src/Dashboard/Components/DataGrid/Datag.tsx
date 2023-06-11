import React, { useEffect, useState } from "react"
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  IconButton,
  Menu,
  MenuItem,
  TablePagination,
  TextField,
  Box,
  Button,
  Typography,
  CircularProgress,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  InputAdornment,
  Paper,
  Avatar,
  TableContainer,
  
} from "@mui/material"
import {
  GridFilterListIcon,
  GridMoreVertIcon,
  GridSearchIcon,
} from "@mui/x-data-grid"

interface DataItem {
  id: number
  make?: string
  model?: string
  price?: string | number
  imageUrl?: string
  mileage?: number
  vrm?: String | null
  color?: string
  status?: boolean | string
}

interface MyTableProps {
  Data: DataItem[]
}
const MyTable = ({ Data }: MyTableProps) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([])
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [columns, setColumns] = useState([
    "make",
    "model",
    "price",
    "image",
    "action",
    "mileage",
    "status",
    "colors",
    "description",
    "vrm"
   
  ])
  const [columnsMenu, setColumnsMenu] = useState([
    "make",
    "model",
    "price",
    "image",
    "action",
    "mileage",
    "status",
    "colors",
    "description",
    "vrm"
    
  ])
  const [columnMenuAnchorEl, setColumnMenuAnchorEl] =
    useState<null | HTMLElement>(null)
  const [searchValue, setSearchValue] = useState("")
  const [sortColumn, setSortColumn] = useState("") // Track the current sort column
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc") // Track the current sort direction
  const [isLoading, setIsLoading] = useState(true) // New state variable for loading indicator
  const [selectedValue, setSelectedValue] = useState("")
  const [data, setData] = useState<any[]>([])
  const [priceInput, setPriceInput] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setData(Data)
      setIsLoading(false)
      console.log(data)
    }, 1000)
  }, [])

  const handleRowSelect = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const isChecked = event.target.checked
    setSelectedRows((prevSelectedRows) =>
      isChecked
        ? [...prevSelectedRows, id]
        : prevSelectedRows.filter((rowId) => rowId !== id)
    )
  }

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLButtonElement>,
    rowId: number
  ) => {
    setAnchorEl(event.currentTarget)
    // Perform actions based on the rowId, e.g., open a specific menu for the row
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const toggleColumn = (column: string) => {
    if (columns.includes(column)) {
      setColumns(columns.filter((col) => col !== column))
    } else {
      setColumns([...columns, column])
    }
  }

  const handleColumnMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setColumnMenuAnchorEl(event.currentTarget)
  }

  const handleColumnMenuClose = () => {
    setColumnMenuAnchorEl(null)
  }

  const isColumnVisible = (column: string) => {
    return columns.includes(column)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) => {
      if (typeof value === "string") {
        return value.toLowerCase().includes(searchValue.toLowerCase())
      } else if (typeof value === "number") {
        const stringValue = String(value)
        return stringValue.toLowerCase().includes(searchValue.toLowerCase())
      }
      return false
    })
  )

  // Handle column header click to update sort column and direction
  const handleSort = (column: string) => {
    if (column === sortColumn) {
      // If the same column is clicked, toggle the sort direction
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      // If a different column is clicked, set it as the new sort column
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setSelectedValue(event.target.value)
  }

  const handlePriceInput=() =>{
    setPriceInput(true)
  }

  const displayedData = data.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  )

  return (
    <>
      <Box
        bgcolor={"#f3f3f3"}
        sx={{ display: "flex" }}
        alignItems={"center"}
        gap={2}
        paddingX={1}
        marginY={0}
        
      >
        <Box sx={{display:"flex", flexDirection:"row"}} marginTop={2} gap={2}>
          <TextField
            sx={{ backgroundColor: "white", border: "none",marginBottom: "16px", width:"100%" }}
            InputProps={{
              startAdornment: <GridSearchIcon />,
            }}
            placeholder="Search"
            value={searchValue}
            onChange={handleSearchChange}
            style={{  }}
          />
          <IconButton aria-label="columns-menu" onClick={handleColumnMenuOpen}>
            <GridFilterListIcon />
          </IconButton>
          <Menu
            id="columns-menu"
            anchorEl={columnMenuAnchorEl}
            open={Boolean(columnMenuAnchorEl)}
            onClose={handleColumnMenuClose}
          >
            {columnsMenu.map((column) => (
              <MenuItem onClick={() => toggleColumn(column)}>
                <Checkbox checked={isColumnVisible(column)} />
                {column}
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Typography variant="body1">Filters</Typography>
        <FormControl component="fieldset">
          <RadioGroup row value={selectedValue} onChange={handleChange}>
            <FormControlLabel
              value="option1"
              control={<Radio color="secondary" />}
              label="Active"
            />
            <FormControlLabel
              value="option2"
              control={<Radio color="secondary" />}
              label="Inactive"
            />
            <FormControlLabel
              value="option3"
              control={<Radio color="secondary" />}
              label="Newest"
            />
            <FormControlLabel
              value="option4"
              control={<Radio color="secondary" />}
              label="Pending"
            />
          </RadioGroup>
        </FormControl>
        <Button>Reset Filters</Button>
        <Button>Export</Button>
      </Box>
      
                <div style={{position:"relative",overflowX:"auto"}} >
     
      <Table stickyHeader  sx={{ border: "1px solid #f3f3f3",bgcolor:"bonewhite"}}>
        <TableHead sx={{top:"0",position:"sticky", zIndex: 1 }} >
          <TableRow >
            <TableCell sx={{backgroundColor:"#f3f3f3"}} padding="checkbox">
              <Checkbox
                size="small"
                color="secondary"
                indeterminate={
                  selectedRows.length > 0 && selectedRows.length < data.length
                }
                checked={selectedRows.length === data.length}
                onChange={(event) => {
                  const isChecked = event.target.checked
                  setSelectedRows(isChecked ? data.map((item) => item.id) : [])
                }}
              />
            </TableCell  >
            <TableCell sx={{backgroundColor:"#f3f3f3"}} id="image-header">
              <Typography variant="body1" color={"#0D2330"} fontWeight={"bold"}>
                Image
              </Typography>
            </TableCell>{" "}
            {/* Row header */}
            {columns.includes("status") && (
              <TableCell sx={{backgroundColor:"#f3f3f3"}} align="center" id="status-header">
                <Typography
                  variant="body1"
                  color={"#0D2330"}
                  fontWeight={"bold"}
                >
                  Status
                </Typography>
              </TableCell>
            )}
            {columns.includes("vrm") && (
              <TableCell sx={{backgroundColor:"#f3f3f3"}}  id="vrm-header">
                 <Typography
                  variant="body1"
                  color={"#0D2330"}
                  fontWeight={"bold"}
                >
                  Vrm
                </Typography>
              </TableCell>
            )}
            {columns.includes("description") && (
              <TableCell sx={{backgroundColor:"#f3f3f3"}}  id="description-header">
                 <Typography
                  variant="body1"
                  color={"#0D2330"}
                  fontWeight={"bold"}
                >
                  Description
                </Typography>
              </TableCell>
            )}
            {columns.includes("make") && (
              <TableCell sx={{backgroundColor:"#f3f3f3"}}  id="make-header">
                <Typography
                  variant="body1"
                  color={"#0D2330"}
                  fontWeight={"bold"}
                >
                  Make
                </Typography>
              </TableCell>
            )}
            {columns.includes("model") && (
              <TableCell sx={{backgroundColor:"#f3f3f3"}}  id="model-header">
                <Typography
                  variant="body1"
                  color={"#0D2330"}
                  fontWeight={"bold"}
                >
                  Model
                </Typography>
              </TableCell>
            )}
            {columns.includes("mileage") && (
              <TableCell sx={{backgroundColor:"#f3f3f3"}}  id="mileage-header">
                <Typography
                  variant="body1"
                  color={"#0D2330"}
                  fontWeight={"bold"}
                >
                  Mileage
                </Typography>
              </TableCell>
            )}
            {columns.includes("colors") && (
              <TableCell sx={{backgroundColor:"#f3f3f3"}}  id="colors-header">
                <Typography
                  variant="body1"
                  color={"#0D2330"}
                  fontWeight={"bold"}
                >
                  Color
                </Typography>
              </TableCell>
            )}
            {columns.includes("price") && (
              <TableCell sx={{backgroundColor:"#f3f3f3"}}  id="price-header">
                <Typography
                  variant="body1"
                  color={"#0D2330"}
                  fontWeight={"bold"}
                >
                  Price
                </Typography>
              </TableCell>
            )}
            
            <TableCell sx={{backgroundColor:"#f3f3f3"}}>
              <Typography
                variant="body1"
                color={"#0D2330"}
                fontWeight={"bold"}
                align="center"
              >
                Actions
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => (
                <TableRow
                  style={{ width: "max-content", padding: "0" }}
                  key={item.id}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      size="small"
                      color="secondary"
                      checked={selectedRows.includes(item.id)}
                      onChange={(event) => handleRowSelect(event, item.id)}
                    />
                  </TableCell>
                  <TableCell padding="checkbox" >
                    {item.imageUrl ? (
                        <Paper sx={{padding:"0",height:"60px",width:"100px",alignSelf:"center",overflow:"hidden",position:"relative"}}   >

<Avatar sx={{position:"absolute",bgcolor:"#0d6290",color:"#f3f3f3",padding:"0.3rem" ,height:"1rem",width:"1rem"}}>
                                10
                            </Avatar>
                      <img
                        src={item.imageUrl}
                        alt="Car"
                        style={{ width: "100%", height: "100%" }}
                      />
                       </Paper>
                    ) : (
                        <Paper sx={{padding:"0",height:"60px",width:"100px",alignSelf:"center",overflow:"hidden"}}   >
                            
                        
                      <img
                        src={
                          "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
                        }
                        alt="Car"
                        style={{ width: "100%", height: "100%" }}
                      /></Paper>
                    )}
                  </TableCell>{" "}
                  {/* Table cell */}
                  {columns.includes("status") && (
                    <TableCell  align="center" aria-labelledby="price-header">
                      {item.status ? (
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
                    </TableCell>
                  )}
                  {columns.includes("vrm") && (
                    <TableCell  aria-labelledby="vrm-header">
                        <a href="/">
                       <Typography
                        variant="body1"
                        color={"#0d6290"}
                        fontWeight={"500"}
                      >
                        {item.vrm}
                      </Typography>
                      </a>
                    </TableCell>
                  )}
                  {columns.includes("description") && (
                    <TableCell  aria-labelledby="description-header">
                        <a href="/">
                       <Typography
                        variant="body1"
                        color={"#0d6290"}
                        fontWeight={"500"}
                      >
                        {item.description}
                      </Typography>
                      </a>
                    </TableCell>
                  )}
                  {columns.includes("make") && (
                    <TableCell  aria-labelledby="make-header">
                        

                        
                      <Typography
                        variant="body1"
                        color={"grey"}
                        fontWeight={"500"}
                      >
                        {item.make}
                      </Typography>
                      
                    </TableCell>
                  )}
                  {columns.includes("model") && (
                    <TableCell  aria-labelledby="model-header">
                      <Typography
                        variant="body1"
                        color={"grey"}
                        fontWeight={"500"}
                      >
                        {item.model}
                      </Typography>
                    </TableCell>
                  )}
                  {columns.includes("mileage") && (
                    <TableCell  aria-labelledby="mileage-header">
                      <Typography
                        variant="body1"
                        color={"grey"}
                        fontWeight={"500"}
                      >
                        {item.mileage}
                      </Typography>
                    </TableCell>
                  )}
                  {columns.includes("colors") && (
                    <TableCell  aria-labelledby="colors-header">
                      <Typography
                        variant="body1"
                        color={"grey"}
                        fontWeight={"500"}
                      >
                        {item.color}
                      </Typography>
                    </TableCell>
                  )}
                  {columns.includes("price") && (
                    <TableCell sx={{padding:"0"}}  aria-labelledby="price-header">
                      {" "}
                      <div style={{width:"5rem",display:"flex",gap:"0.1rem"}}>
                        <span style={{color:"grey"}}>£</span>
                        <input 
                        onChange={handlePriceInput}
                          style={{ width: "100%",color:"#0d6290" }}
                          defaultValue={item.price}
                        />
                      </div>{" "}
                      {
                        priceInput && 
                      <Button>Save</Button>
                      }
                    </TableCell>
                  )}
                 
                  {columns.includes("forecourt") && (
                    <TableCell
                      align="center"
                      aria-labelledby="forecourt-header"
                    >
                      {item.color}
                    </TableCell>
                  )}
                  <TableCell align="center">
                    <IconButton
                      aria-controls={`menu-${item.id}`}
                      aria-haspopup="true"
                      onClick={(event) => handleMenuOpen(event, item.id)}
                    >
                      <GridMoreVertIcon />
                    </IconButton>
                    <Menu PaperProps={{
                        style:{boxShadow:" 2px 2px 2px 3px #f3f3f3"}
                    }}
                      id={`menu-${item.id}`}
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                    >
                      <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
                      <MenuItem onClick={handleMenuClose}>Advertise Listing</MenuItem>
                      <MenuItem onClick={handleMenuClose}>
                        Go to Listing Page
                      </MenuItem>
                      <MenuItem onClick={handleMenuClose}>
                       Manage Images
                      </MenuItem>
                      <MenuItem onClick={handleMenuClose}>
                        Sold and Delete
                      </MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        )}
      </Table>
      </div>
      <TablePagination
        sx={{ backgroundColor: "#f3f3f3", color: "black",width: "100%",overflow:"hidden"}}
        rowsPerPageOptions={[10, 25, 50, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  )
}

export default MyTable
