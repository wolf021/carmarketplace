import { Box, ButtonBase, ButtonGroup, Grid, Paper, Stack, TextField, Typography, Button, Container } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const TradersLoginPage = () => {
  const [error, setError] = useState(true)
  return (
    <>
    <Typography textAlign={"center"} variant="h3" > Car Direct Trader Central</Typography>
    <Box  height={"max=content"} p={3}  style={{display:"flex",justifyContent:"center", }} >
       
       
        <Box width={"25rem"} paddingY={2} marginY={5} sx={{border:"1px solid grey"}} >
       
            <Container sx={{textAlign:"center",border:"transparent"}} >

                
                <Typography  variant="h6" > Dealer Login </Typography>
                <Stack marginY={2} gap={2} >
                
                <TextField fullWidth label={"Email"} />
                <Box textAlign={"start"} gap={2} >

                <TextField  required fullWidth  label={"Password"}  />
                
                </Box>
               
                 <Stack justifyContent={"space-between"} gap={2}>

                 <Button variant='contained' >Login</Button>   
                 <Typography textAlign={"center"} variant="body2" > By continuing, you agree to Car Direct's <span style={{color:"#0e6290"}}> Conditions of Use</span> and <span style={{color:"#0e6290"}}>Privacy Notice.</span></Typography>
                 <Stack direction={"row"} justifyContent={"space-between"} >
                  <Link to='/' >
                 <Typography  variant="body2">Forgot Password?</Typography>
                  </Link>
                  <Link to='/' >
                 <Typography   variant="body2">Need Account? Register</Typography>
                  </Link>
                 </Stack>
                 </Stack>
                 
                </Stack>
                
            </Container>
        </Box>
        
    </Box>
        <Typography textAlign={"center"} variant="body2">Copyright ©  <Link to="/">www.cardirect.co.uk</Link> 2022.  </Typography>
        </>
  )
}

export default TradersLoginPage