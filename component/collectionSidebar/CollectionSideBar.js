import React from 'react'
import Link from 'next/link'

import { makeStyles, Grid,Typography,TextField,Button } from '@material-ui/core';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({

    sidebar: {
        [theme.breakpoints.up('sm')]: {
          width: drawerWidth,
          position: 'fixed',
          left: '6vw',
          width: '15vw',
          marginTop: '20%',
          paddingTop: '4vw',
       
         
        },
      },
  
      typo: {
        cursor : 'pointer',
        fontFamily: 'Cormorant Infant,-apple-system',
        '&:hover':{
            fontStyle : 'italic'
        }
        },

 
  
  }));
function CollectionSideBar({bottom}) {
    const classes = useStyles();
    return (
        <div style={{display : bottom ? 'none':'block'}} className={classes.sidebar}>
        <Link  href='/collections'>
         <Typography className={classes.typo}  variant="h6" gutterBottom>
                All Collections
         </Typography>
        </Link>
        <Link  href='/collections/chairs'>
         <Typography className={classes.typo}  variant="h6" gutterBottom>
                Chairs
         </Typography>
        </Link>
        <Link href='/collections/lights'>
         <Typography className={classes.typo} variant="h6" gutterBottom>
                Lights
         </Typography>
        </Link>
        <Link href='/collections/sofas'>
         <Typography className={classes.typo} variant="h6" gutterBottom>
                Sofas
         </Typography>
        </Link>
        <Link href='/collections/stools'>
         <Typography className={classes.typo} variant="h6" gutterBottom>
                Stools
         </Typography>
        </Link>
        <Link href='/collections/ottomans'>
         <Typography className={classes.typo} variant="h6" gutterBottom>
                Ottomans
         </Typography>
        </Link>
 </div>
    )
}

export default CollectionSideBar
