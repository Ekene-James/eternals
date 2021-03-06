import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import Link from 'next/link'
import { makeStyles, Grid,Typography,TextField,Button } from '@material-ui/core';
import OnScreenObserver from '../../observerHook';
import { AppStoreContext } from '../../store/AppStore';
import { getFooter } from '../../store/actions/AppAction';

const useStyles = makeStyles((theme) => ({

    root: {
      flexGrow: 1,
      width : '100%',
     background :'black',
     overflow:'hidden !important',
     padding :'50px'
    
   
    },
  
    btn: {
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'end !important',
        margin:0,
        [theme.breakpoints.down('sm')]: {
            justifyContent:'center',
          },
    },
    label: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
       width:'100%',
       flexDirection:'column',
   
    },
    txtContent: {
  
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
   
    flexDirection:'column',
   
    },
    txt: {
       color:'white'
   
    },
    icons: {
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        width:'20%',
        color:'white',
      
        margin:'auto',
        [theme.breakpoints.down('sm')]: {
            width:'40%',
          },
    },
 
  
  }));
function Footer() {
    const classes = useStyles();
    const footerRef = React.useRef(null);
    const appCtx = React.useContext(AppStoreContext);
    let isIntersecting = OnScreenObserver(footerRef,0.25);

    React.useEffect(() => {
        appCtx.dispatch(getFooter(isIntersecting))
       
}, [isIntersecting])
  

    return (
        <div ref={footerRef} className={classes.root}>
             <Grid container spacing={3}>
             <div className={classes.label}>
             <Typography className={classes.txt} style={{textAlign:'center',marginBottom:'20px'}} variant="h5" gutterBottom>
                 ETERNALS.
                </Typography>
                <div className={classes.icons}>
                    <a  href='https://www.facebook.com' target='_blanck'>
                        <FacebookIcon style={{cursor:'pointer'}}/>
                    </a>
                    <a  href='https://www.instagram.com' target='_blanck'>
                    <InstagramIcon style={{cursor:'pointer'}}/>
                    </a>
                    <a  href='https://www.twitter.com' target='_blanck'>
                        <TwitterIcon style={{cursor:'pointer'}}/>
                    </a>
                    <a  href='mailto:eternals@gmail.com' target='_blanck'>
                        <EmailIcon style={{cursor:'pointer'}}/>
                    </a>
                </div>
             </div>
             <Grid className={classes.txtContent} style={{marginTop:'50px'}} item xs={6} md={4}>
                <Typography style={{textAlign:'center',color:'gray',marginBottom:'10px',}} variant="h5" gutterBottom>
                    SHOP
                </Typography>
                <Typography className={classes.txt} variant="body1" gutterBottom>
                    Chairs
                </Typography>
                <Typography className={classes.txt} variant="body1" gutterBottom>
                    Ottomans
                </Typography>
                <Typography className={classes.txt} variant="body1" gutterBottom>
                    Sofas
                </Typography>
                <Typography className={classes.txt} variant="body1" gutterBottom>
                    Stools
                </Typography>
                <Typography className={classes.txt} variant="body1" gutterBottom>
                    Light
                </Typography>
                
             </Grid>
         
             <Grid className={classes.txtContent} item xs={6} md={4}>
                <Typography style={{textAlign:'center',marginBottom:'20px',color:'gray'}} variant="h5" gutterBottom>
                    NAVIGATE
                </Typography>
                <Typography className={classes.txt} variant="body1" gutterBottom>
                    Home
                </Typography>
                <Typography className={classes.txt} variant="body1" gutterBottom>
                    Colection
                </Typography>
                <Typography className={classes.txt} variant="body1" gutterBottom>
                    Login
                </Typography>
                
             </Grid>
         
             <Grid className={classes.txtContent} item xs={6} md={4}>
                <Typography style={{textAlign:'center',marginBottom:'20px',color:'gray'}} variant="h5" gutterBottom>
                    HELP
                </Typography>
                <Link className={classes.link} style={{cursor:'pointer'}}  href="/faq">
                <Typography className={classes.txt} variant="body1" gutterBottom>
                    FAQs
                </Typography>
                </Link>
                
               
             </Grid>
        </Grid>
        </div>
    )
}

export default Footer
