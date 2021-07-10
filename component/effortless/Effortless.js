import React from 'react';
import { makeStyles, Grid,Typography } from '@material-ui/core';
import OnScreenObserver from '../../observerHook';
let prevScrollY1 = 0;
let speed1 = 30;
let mobileSpeed1 = 5;
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width : '80%',
      margin : '0 auto',
      marginTop : '80px',
     
      
    },
    mainImg: {
     maxWidth : '60%',
     height : '600px',
     [theme.breakpoints.down('md')]: {
      
      height : '600px',
      maxWidth : '70%',
      
    },
     [theme.breakpoints.down('sm')]: {
       transform:'translateX(-35px)',
      height : '350px',
      maxWidth : '70%',
      
    },
    
     
      
    },
    body1 : {
      fontFamily: 'Cormorant Infant,-apple-system',
    },
    h1: {
      wordBreak:'break-word',
      fontFamily: 'Cormorant Infant,-apple-system',
      [theme.breakpoints.down('sm')]: {
       fontSize:'60px'
       
     },
     
    },
    typo: {
     display: 'flex',
     flexDirection:'column',
     fontFamily: 'Cormorant Infant,-apple-system',
      alignItems:'flex-start',
      justifyContents:'center' 
    },
   
    imgCont: {
      position : 'relative',
      width : '100%',
      display : 'flex',
      flexDirection:'column',
      alignItems:'flex-start',
      [theme.breakpoints.down('sm')]: {
        alignItems:'center',
      },
 
    },
    sideImg: {
      position : 'absolute',
      maxWidth : '35%',
      height : '65%',
      right:'25%',
      [theme.breakpoints.down('md')]: {
        right:'15%',
     
        
      },
      transform : () => `translateY(${speed1}px)`,
      transition : 'transform 1s ease-in-out',
      [theme.breakpoints.down('sm')]: {
        
        transform : () =>`translateY(${mobileSpeed1}px)`,
        maxWidth : '45%',
        right:'-3%',
        
      },
      
    },
  
  }));


function Effortless() {
    const classes = useStyles();
    const imgRef = React.useRef(null);
    const isIntersecting = OnScreenObserver(imgRef,0.5)
    const [scrolled, setScrolled] = React.useState(0);
    const [direction, setDirection] = React.useState('up');
   
    const handleScroll = () => {
        const { scrollY } = window;
      
        // Checks if previous scrollY is less than latest scrollY
        // If true, we are scrolling downwards, else scrollig upwards
       
        const direction = prevScrollY1 < scrollY ? 'down' : 'up';

        // Updates the previous  scroll variable AFTER the direction is set.
        // The order of events is key to making this work, as assigning
        // the previous scroll before checking the direction will result
        // in the direction always being 'up'.
        prevScrollY1 = scrollY;

            setScrolled(prevScrollY1)
            setDirection(direction)  
           
        
    }
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll,true);

        return window.removeEventListener('scroll', handleScroll)
       
   }, [])
 //pc view
    React.useMemo(() => {
        
            if (isIntersecting && direction === 'down' && speed1 < 150) {
                speed1 = speed1 + 4 
            
               }else if(isIntersecting && direction === 'up' && speed1 > 30){
               speed1=speed1 - 4
               }  
    }, [prevScrollY1])

    //mobile view
    React.useMemo(() => {
        
            if (isIntersecting && direction === 'down' && mobileSpeed1 < 180) {
                 mobileSpeed1++
               }else if(isIntersecting && direction === 'up' && mobileSpeed1 > 5){
                 mobileSpeed1--
              
               }   
    }, [prevScrollY1])
   
  
  
    return (
        <div ref={imgRef} className={classes.root}>
            <Grid container spacing={3}>
             
                <Grid item xs={12} md={8}>
                    <div className={classes.imgCont}>
                    <img
                        className={classes.mainImg}
                        src='/images/hero/portrait.jpg'
                        alt='portraitMain'
                    
                    />
                    <img
                        className={classes.sideImg}
                        src='/images/hero/sidePortrait.jpg'
                        alt='sidePortrait'
                       
                    
                    />
                    </div>
                </Grid>
                <Grid item xs={12}  className={classes.typo} md={4}>
                    <Typography  variant="subtitle2" gutterBottom>
                      OUR ETHOS
                    </Typography>
                  
                      <Typography className={classes.h1} variant="h1" gutterBottom>
                        Effortlessly Grande Homes
                      </Typography>
                    <hr/>
                    <Typography className={classes.body1}  variant="body1" gutterBottom>
                       Making luxurious and truly grande furniture accessible for all people is our daily drive.
                    </Typography>

                </Grid>

            </Grid>
        </div>
    )
}

export default React.memo(Effortless)
