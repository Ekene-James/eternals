import React,{useRef} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import { makeStyles } from '@material-ui/core';



const useStyles = makeStyles({
  btn: {
   
    '&:hover' : {
      color: '#2ec4b6'
    },
   

  },
  line : {
    borderBottom: '5px solid #2ec4b6',
    margin: '0 3px 0 3px',
    
   
    
  }

});
function MenuButton(props) {
  const btnRef = useRef(null);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [active, setActive] = React.useState(false);
  const pullDown = (event) => {
    setAnchorEl(event.currentTarget);
    setActive(true);
    props.handleClick(btnRef)
    
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div 
      className={(props.active === props.title) || props.default ? (classes.line) : ''}
       ref={btnRef} onClick={pullDown} >
      <Button focusVisible='true'  aria-controls="simple-menu" className={classes.btn} aria-haspopup="true" >
        {props.title}
        <KeyboardArrowDownIcon/>
     
      </Button> 
      
           
      </div>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
       
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{top:56}}
      >
          {
              props.items?.map((item,i) => <MenuItem  key={i} onClick={handleClose}>{item}</MenuItem>)
          }
        
      </Menu>
    </>
  );
}


export default MenuButton;