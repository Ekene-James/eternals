import React from 'react';
import { makeStyles, Grid,Typography } from '@material-ui/core';
import OnScreenObserver from '../../observerHook';
let prevScrollY = 0;
let speed = 30;
let mobileSpeed = 5;
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width : '80%',
      margin : '0 auto',
      marginTop : '80px'
      
    },
    mainImg: {
     maxWidth : '60%',
     height : 'auto',
     
      
    },
    h1: {
      fontFamily: 'Cormorant Infant,-apple-system',
      [theme.breakpoints.down('sm')]: {
       fontSize:'60px'
       
     },
     
    },
    body1 : {
      fontFamily: 'Cormorant Infant,-apple-system',
    },
    imgCont: {
      position : 'relative',
      width : '100%',
      display : 'flex',
      flexDirection:'column',
      alignItems:'flex-end',
      [theme.breakpoints.down('sm')]: {
        alignItems:'center',
      },
    
    
      
      
    },
    sideImg: {
      position : 'absolute',
      maxWidth : '35%',
      height : '65%',
      left:'25%',
      transform : () => `translateY(${speed}px)`,
      transition : 'transform 1s ease-in-out',
      [theme.breakpoints.down('sm')]: {
        left:'5%',
        transform : () =>`translateY(${mobileSpeed}px)`,
         
      },
      
    },
  
  }));


function TrueFurniture() {
    const classes = useStyles();
    const imgRef = React.useRef(null);
    const isIntersecting = OnScreenObserver(imgRef,0.5)
    const [scrolled, setScrolled] = React.useState(0);
    const [direction, setDirection] = React.useState('up');
   
    const handleScroll = () => {
        const { scrollY } = window;
      
        // Checks if previous scrollY is less than latest scrollY
        // If true, we are scrolling downwards, else scrollig upwards
       
        const direction = prevScrollY < scrollY ? 'down' : 'up';

        // Updates the previous  scroll variable AFTER the direction is set.
        // The order of events is key to making this work, as assigning
        // the previous scroll before checking the direction will result
        // in the direction always being 'up'.
        prevScrollY = scrollY;

            setScrolled(prevScrollY)
            setDirection(direction)  
    }
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll,true);

        return window.removeEventListener('scroll', handleScroll)
       
   }, [])
 //pc view
    React.useMemo(() => {
        
            if (isIntersecting && direction === 'down' && speed < 150) {
                speed = speed + 4 
            
               }else if(isIntersecting && direction === 'up' && speed > 30){
               speed=speed - 4
            
              
               }  
    }, [prevScrollY])

    //mobile view
    React.useMemo(() => {
        
            if (isIntersecting && direction === 'down' && mobileSpeed < 180) {
                 mobileSpeed++
               }else if(isIntersecting && direction === 'up' && mobileSpeed > 5){
                 mobileSpeed--
              
               }  
    }, [prevScrollY])
   
  
  
    return (
        <div ref={imgRef} className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                    <Typography  variant="subtitle2" gutterBottom>
                        WHO WE ARE
                    </Typography>
                    <Typography className={classes.h1}  variant="h1" gutterBottom>
                        True furniture Masters
                    </Typography>
                    <hr/>
                    <Typography className={classes.body1} variant="body1" gutterBottom>
                     We are a collaboration of emerging and iconic designers and makers. Each object was designed to bring quality and style to your everyday rituals.
                    </Typography>

                </Grid>
                <Grid item xs={12} md={9}>
                    <div className={classes.imgCont}>
                    <img
                        className={classes.mainImg}
                        src='/images/hero/portraitMain.jpg'
                        alt='portraitMain'
                    
                    />
                    <img
                        className={classes.sideImg}
                        src='/images/hero/sidePortrait.jpg'
                        alt='sidePortrait'
                       
                    
                    />
                    </div>
                </Grid>

            </Grid>
        </div>
    )
}

export default React.memo(TrueFurniture)
