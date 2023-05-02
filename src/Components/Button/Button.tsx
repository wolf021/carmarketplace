import { Button } from '@mui/material';
import React from 'react'
import './_button.scss'
import { Link } from 'react-router-dom';

type ButtonProps={
    name?:any,
    onClick?: () => void;
    icon?: any;
    className?: string;
    link?:any
}

const Buttons = (props:ButtonProps) => {
  return (
   
    <Button  variant='contained' style={{fontSize:"medium",fontWeight:"bold",textTransform:"capitalize"}} startIcon={props.icon} className={props.className} onClick={props.onClick}>
        
        
       {props.name}
    </Button>
    
  )
}

export default React.memo( Buttons )