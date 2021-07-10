import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';


import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
 
    padding:0,
    margin : 0,
   

  },
  nested: {
    paddingLeft: theme.spacing(10),
    fontSize: '15px',
    '&:hover' : {
     background: 'white'
    },  
  },
  listItem : {
    fontSize: '15px',
   '&:hover' : {
    background: 'white'
   },  
  },

  listItemText : {
    fontSize: '18px',
    fontFamily: 'Cormorant Infant,-apple-system',
  },
  icon: {
    fontSize: '15px'
  },
  iconBtn :{
   border : '1px solid #ffd8d5',
   width : '38px',
   height : '38px',
   background: 'transparent',
   marginLeft : '5px',
   alignSelf: 'center'

  },
  link: {
    textDecoration : 'none'
}
}));
const collapse = [
  {
    name : 'All',
    link:'/collections'
  },
  {
    name : 'Chairs',
    link:'/collections/chairs'
  },
  {
    name : 'Lights',
    link:'/collections/lights'
  },
  {
    name : 'Sofas',
    link:'/collections/sofas'
  },
  {
    name : 'Stools',
    link:'/collections/stools'
  },
  {
    name : 'Ottomans',
    link:'/collections/ottomans'
  },
]
function NestedList({name, icon,onClose}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
   
  };

  return (
    
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
   
      className={classes.root}
    >
     
      <ListItem className={classes.listItem}  button onClick={handleClick} >
      <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText classes={{secondary:classes.listItemText}} secondary={name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
          {
              collapse.map(
            (item,i) =>  <Link  key={i} className={classes.link}  href={item.link}>
              <List component="div" disablePadding>
                <ListItem    onClick={onClose} button className={classes.nested}>
                 
                  <ListItemText classes={{secondary:classes.listItemText}} secondary={item.name} />
                </ListItem>
              </List>
              </Link>
              )
          }
     
      </Collapse>
    </List>

  );
}
export default NestedList