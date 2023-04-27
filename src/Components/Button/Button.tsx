import { Button } from '@mui/material';
import React from 'react'
import './_button.scss'

type ButtonProps={
    name?:String,
    onClick?: () => void;
    icon?: any;
    className?: string;
}

const Buttons = (props:ButtonProps) => {
  return (
    <Button  variant='contained' style={{fontSize:"medium",fontWeight:"bold"}} startIcon={props.icon} className={props.className} onClick={props.onClick}>
        
        
       {props.name}
    </Button>
  )
}

export default React.memo( Buttons )