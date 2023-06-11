import { CheckBox, Input } from '@mui/icons-material'
import { Box, Button, ButtonGroup, Container, Grid, InputBase, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const TradersRegistrationPage = () => {
  return (
    <div style={{textAlign:"center"}} >

                <Typography  variant="h3" > Car Direct</Typography>
    <Box height={"max=content"} p={4} style={{display:"flex",justifyContent:"center"}} >
        <Box  maxWidth={"25rem"} paddingY={2} sx={{border:"1px solid grey"}} >

            <Container sx={{textAlign:"center"}} >

                <Typography  variant="h6" > Dealer Registration </Typography>
                <Stack marginY={2} gap={2} >
                <TextField   required fullWidth label={"Name"} />
                <TextField   fullWidth label={"Company Name"} />
                <TextField  required fullWidth label={"Email"} />
                <TextField  required fullWidth label={"Password"} />
                <TextField   required fullWidth label={"Confirm Password"} />
                <Stack alignContent={"center"} alignItems={"center"} marginY={2} direction={"row"} >
                  <CheckBox   />  
                <Typography  variant="body1" > You have  Read All the Terms and Conditions of Car Direct before Registration</Typography>
                </Stack>
                 <Stack gap={2} >

                 <Button variant='contained' >Register</Button>   
                 
                 <Typography  variant="body2">Already Registered?<Link to='/' ><span> Login In</span></Link>  </Typography>
                

                 
                 </Stack>
                </Stack>
            </Container>
        </Box>
        
    </Box>
                 <Typography  variant="body2">Copyright ©  <Link to="/">www.cardirect.co.uk</Link> 2022.  </Typography>
    </div>
  )
}

export default TradersRegistrationPage