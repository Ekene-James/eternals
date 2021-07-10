import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
import CollectionsIcon from '@material-ui/icons/Collections';
import NestedList from '../nestedList/NestedList';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import Link from 'next/link'

const useStyles = makeStyles({
  list: {
    width: 200,
  },
  logo: {
    fontFamily: 'Cormorant Infant,-apple-system',
    fontWeight: 'bold'
  },
  name: {
    fontFamily: 'Cormorant Infant,-apple-system',
  },
  iconBtn :{
    color: 'black',
    justifySelf: 'right',
    transform: 'translateX(150px)'
  
  },
  fullList: {
    width: 'auto',
  },
});
const items = [
  {
      name : 'Home',
      icon : <HomeIcon  />,
      link : '/'
  },
  {
      name : 'About',
      icon : <InfoIcon />,
      link : '/about'
  },
 
]
function SideBar(props) {
  const classes = useStyles();
  
  const list = () => (
    <div
     
      role="presentation"
    >
        <IconButton className={classes.iconBtn} aria-label="close-button"   onClick={props.hamburgerClick} >
            <CloseIcon />
        </IconButton>

        <ListItem className={classes.logo} >
                ETERNALS
          </ListItem>
      
      <List>
        {items.map((item, index) => (
              <Link  key={index} href={item.link}>
              <ListItem 
            
              onClick={props.hamburgerClick} 
            
              button 
              >
                  <ListItemIcon >{item.icon}</ListItemIcon>
                  <ListItemText classes={{secondary:classes.name}} secondary={item.name} />
              </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <NestedList
        name='Collections'
        icon={<CollectionsIcon/>}
        onClose={props.hamburgerClick}           
        />
    </div>
  )

  return (
    <div>
      
        <React.Fragment>
          
          <Drawer anchor='left' open={props.burger} onClose={props.hamburgerClick}>
            {list()}
          </Drawer>
        </React.Fragment>
     
    </div>
  );
}
export default SideBar