import React from 'react'
import clsx from 'clsx';
import Link from 'next/link'
import { makeStyles, Grid,Typography,Hidden } from '@material-ui/core';
import RightDoubleImg from './RightDoubleImg';
import LeftDoubleImg from './LeftDoubleImg';
const useStyles = makeStyles((theme) => ({
    '@keyframes scroll' : {
        '0%': {
            opacity : 0,
            transform : 'translateY(50%)',
        },
        '100%':{
            opacity : 1,
            transform : 'translateY(0%)',
        }
    },
    root: {
      flexGrow: 1,
      width : '90%',
      margin : '0 auto',
      marginTop : '80px',
    },
    middle: {
    textAlign: 'center',
    margin : 'auto',
    },
    typo: {
    cursor : 'pointer',
    fontFamily: 'Cormorant Infant,-apple-system',
    '&:hover':{
        fontStyle : 'italic'
    }
    },
    img: {
      maxWidth : '80%',
      maxHeight : '300px',
      display : 'none',
    
     
    },
   
    active: {
    display : 'block !important',
    animation : '$scroll 1s ease-in-out forwards',
  
   
    },
    double: {
    display : 'none',
   
      
      
    },
    left: {
      position : 'relative', 
    },
    right: {
      position : 'relative', 
    },
   
  
  }));
function BrowseCollections() {
    const classes = useStyles();
    const [element, setelement] = React.useState('Chairs')
    const hover= (e) => {
        setelement(e.target.innerText)
       
    }
    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
                <Grid item xs={12}>
                <Typography style={{textAlign : 'center',marginBottom:'20px'}} variant="body2" gutterBottom>
                          BROWSE COLLECTIONS
                    </Typography>
                </Grid>
            <Hidden smDown>
                <Grid item xs={12} md={4}>
                    <div className={classes.left}>
                    <div  
                       
                        className={clsx(classes.double, {
                            [classes.active] : element === 'Chairs'
                          })}>
                        
                          <LeftDoubleImg one='/images/chairs/kerebi.jpg' two='/images/chairs/chair.jpg'/>
                        </div>
                    <div  
                        className={clsx(classes.double, {
                            [classes.active] : element === 'Sofas'
                          })}
                        >
                          <LeftDoubleImg one='/images/cushion/9k.jpeg' two='/images/cushion/clementia.jpg'/>
                        </div>
                    <div  
                     className={clsx(classes.double, {
                        [classes.active] : element === 'Ottomans'
                      })}
                        >
                          <LeftDoubleImg one='/images/ottoman/janus.jpg' two='/images/ottoman/otto.jpg'/>
                        </div>
                      <img
                          className={clsx(classes.img, {
                            [classes.active] : element === 'Lights'
                          })}
                        src='/images/lights/dracai.jpg'
                        alt='portraitMain'

                        /> 
                      <img
                        className={clsx(classes.img, {
                            [classes.active] : element === 'Stools'
                          })}
                        src='/images/stool/freyr.jpg'
                        alt='portraitMain'

                        /> 
                    </div>
                </Grid>
            </Hidden>
                <Grid item xs={10} md={4} className={classes.middle}>
                   <Link  href='/collections/chairs'>
                    <Typography className={classes.typo} onMouseEnter={hover}  variant="h3" gutterBottom>
                           Chairs
                    </Typography>
                   </Link>
                   <Link href='/collections/lights'>
                    <Typography className={classes.typo} onMouseEnter={hover} variant="h3" gutterBottom>
                           Lights
                    </Typography>
                   </Link>
                   <Link href='/collections/sofas'>
                    <Typography className={classes.typo} onMouseEnter={hover} variant="h3" gutterBottom>
                           Sofas
                    </Typography>
                   </Link>
                   <Link href='/collections/stools'>
                    <Typography className={classes.typo} onMouseEnter={hover} variant="h3" gutterBottom>
                           Stools
                    </Typography>
                   </Link>
                   <Link href='/collections/ottomans'>
                    <Typography className={classes.typo} onMouseEnter={hover} variant="h3" gutterBottom>
                           Ottomans
                    </Typography>
                   </Link>
                </Grid>

                <Hidden smDown>
                <Grid item xs={12} md={4}>
                    <div className={classes.right}>
                        <div  
                              className={clsx(classes.double, {
                                [classes.active] : element === 'Stools'
                              })}
                        >
                          <RightDoubleImg one='/images/stool/loki.jpg' two='/images/stool/stool.jpg'/>
                        </div>
                        <div  
                              className={clsx(classes.double, {
                                [classes.active] : element === 'Lights'
                              })}
                        >
                          <RightDoubleImg one='/images/lights/hera.jpg' two='/images/lights/odysseus.jpg'/>
                        </div>
                       
                        
                        <img
                          className={clsx(classes.img, {
                            [classes.active] : element === 'Ottomans'
                          })}
                        src='/images/ottoman/download.jpg'
                        alt='portraitMain'

                        /> 
                        <img
                          className={clsx(classes.img, {
                            [classes.active] : element === 'Sofas'
                          })}
                        src='/images/cushion/sofa.jpg'
                        alt='portraitMain'

                        /> 
                          <img
                         
                          className={clsx(classes.img, {
                            [classes.active] : element === 'Chairs'
                          })}
                        src='/images/chairs/aphrodite.jpg'
                        alt='portraitMain'

                        /> 
                    </div>
                </Grid>
            </Hidden>

        </Grid>
        </div>
    )
}

export default BrowseCollections
