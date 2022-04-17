import React, {useRef} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Modal from '../Modal';
import clsx from 'clsx';
import Link from 'next/link'

import SideBar from './SideBar'
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ScheduleIcon from '@material-ui/icons/Schedule';
import CartModal from '../Modal/CartModal';

import { Button,Badge, Hidden } from '@material-ui/core';
import { AppStoreContext } from '../../store/AppStore';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  topBar: {
    height: '40px',
    width: '100%',
    background: 'black',
    color: 'white',
    position: 'relative',
    top: '0',
    transition: 'top .3s ease-in-out',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '3px 10px',
  },
  contact: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', 
    width: '27%'
  },
  icon:{
    color: '#2ec4b6'
  },
  title:{
    fontFamily: 'Cormorant Infant,-apple-system',
    fontWeight:'bold'
  },
  inner:{
    display: 'flex !important',
    justifyContent: 'space-between',
    alignItems: 'center',
    width : '30%'
   
   

  },
  scrollT: {
    top: '-10px',
    transition: 'top .3s ease-in-out',
    
  },
  badge: {
    background: 'brown',
    color: 'white',
    
  },
  appBar:{
    top: '40px',
    height:'6vw',
    
    transition: 'top .5s ease-in-out',
    backgroundColor: 'transparent',
    backdropFilter: 'blur(18px)',
    color:'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems : 'space-between',
    [theme.breakpoints.down('sm')]: {
      top: '7px',
      height:'10vw',
    },
  
  },
   
  
  scroll: {
  top: 0,
  transition: 'top .3s ease-in-out',

  [theme.breakpoints.down('sm')]: {
    height:'11vw',
  },
  
  },
  
 
  
  toolbar:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  
    
  },
  link:{
    marginBottom: '8px',
   
  },

  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  btn:{
    backgroundColor: '#2ec4b6'
  },

}));

function Navbar() {
  const classes = useStyles();

  const appCtx = React.useContext(AppStoreContext);

  const [scroll, setScroll] = React.useState(false)
  const [burger, setBurger] = React.useState(false)
  const [open,setOpen] = React.useState(false);
  const [cart,setcart] = React.useState(0);
 

  const handleClick = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
   
  }
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll,true)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  React.useEffect(() => setcart(appCtx.state.cart.length), [appCtx.state.cart.length])
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if(scrollPosition > 10){
    setScroll(true)
 }else{
    setScroll(false)

 }

 }

 
  const hamburgerClick = () => setBurger(burger => !burger);

  return (
    <div className={classes.grow}>
       <Hidden smDown>
      <div className={clsx(classes.topBar, {
        [classes.scrollT] : scroll
      })}>
        <div className={classes.contact}>
            <>
              <CallIcon className={classes.icon}/>
              <p>+234-8187866412</p>
            </>|
            <>
              <LocationOnIcon className={classes.icon}/>
              <p>5, Afia bus-stop, Enugu</p>
            </>
        </div>
        <div className={classes.contact}>
            <>
              <ScheduleIcon className={classes.icon}/>
              <p>Mon - Sat 8:00am - 5:00pm</p>
            </>|
            <>
              <MailIcon className={classes.icon}/>
              <p>eternals@gmail.com</p>
            </>
          
        </div>
      </div>
      </Hidden>
      <AppBar 
      className={clsx(classes.appBar, {
        [classes.scroll] : scroll
      })}
      elevation={0}
        position='fixed'>
        <Toolbar className={classes.toolbar} >
          <Typography className={classes.title} variant="h6" noWrap>
            ETERNALS
          </Typography>
          <div className={classes.inner}>
          <Hidden smDown>
             
              <Link className={classes.link}  href="/"><h3 style={{cursor:'pointer'}}>Home</h3></Link>
              <Link  className={classes.link}  href="/collections"><h3 style={{cursor:'pointer'}}>Collections</h3></Link>
              <Link className={classes.link}  href="/about"><h3 style={{cursor:'pointer'}}>About</h3></Link>
              <Link className={classes.link}  href="/faq"><h3 style={{cursor:'pointer'}}>FAQs</h3></Link>
              
        </Hidden>
        </div>
          <div style={{cursor : 'pointer'}} onClick={handleClick}>
            <Badge classes={{colorPrimary : classes.badge }} badgeContent={cart} showZero={true} color="primary" overlap="rectangular">
              <AddShoppingCartIcon />
            </Badge>

          </div>
      

        <Hidden mdUp>
          {
            !burger ? (<MenuIcon className={classes.burger} onClick={hamburgerClick}/>) : ('')
          }
          
        </Hidden>

        </Toolbar>
      </AppBar>
      <Hidden mdUp>
       <SideBar burger={burger} hamburgerClick={hamburgerClick}/>
        </Hidden>
        <Modal open={open} maxWidth='md' handleClose={handleClose} actions={[{handler:() => handleClose(),
                    text:"Close",id:5}]} title='Cart'>
                   <CartModal handleClose={handleClose}/>
          </Modal>
    </div>
  );
}
export default Navbar;