import React,{useState,useEffect, memo} from 'react';
import clsx from 'clsx';
import {Button,Typography,IconButton} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Link from 'next/link'
import OnScreenObserver from '../../observerHook';

const useStyles = makeStyles( (theme) => ({
    '@keyframes slideOver' : {
        '0%': {
            opacity : 0,
            transform : 'translateX(100%)',
        },
        '100%':{
            opacity : 1,
            transform : 'translateX(0%)',
        }
    },
    '@keyframes slideOut' : {
        '0%': {
            opacity : 1,
            transform : 'translateX(0%)',
            
        },
        '100%':{
            
            transform : 'translateX(-100%)',
        }
    },
    '@keyframes slideContents' : {
        '0%': {
            opacity : 0,
            transform : 'translateX(-50%)',
            
        },
        '100%':{
            opacity : 1,
            transform : 'translateX(0%)',
        }
    },
    container: {
        overflow : 'hidden',
        height: '100vh',
       
    },
    left: {
       background : 'black',
       color : 'white',
       position : 'absolute',
       left: '3%',
       top:'45%',
       zIndex:'1',
       '&:hover' : {
        background: 'black', 
        opacity : 0.8
    }
      
    },
    right: {
        background : 'black',
        color : 'white',
        position : 'absolute',
        right: '3%',
        top:'45%',
        zIndex:'1',
        '&:hover' : {
            background: 'black',
            opacity : 0.8
        }
     
    },
    hero: {
      
        position : 'relative',
        width: '100vw',
        height: '100vh',
        [theme.breakpoints.down('sm')]: {
            width: '100vw',
            height: '42vh',
          },
    },
    content: {
        top: '0',
        opacity: 0,
        position : 'absolute',
        animation : '$slideOut 1s ease-in-out forwards',
        width: '100%',
        height: '100%',
        
    },
    active: {
        animation : '$slideOver 1s ease-in-out forwards'
    },
    preTitle: {
        transform : 'translateX(-50%)',
        opacity : 0,
        animation : '$slideContents .7s .7s ease-in-out forwards'
    },
    title: {
        transform : 'translateX(-50%)',
        opacity : 0,
        animation : '$slideContents .9s .5s ease-in-out forwards'
    },
    activeBtn: {
      
        transform : 'translateX(-50%)',
        opacity : 0,
        animation : '$slideContents 1.2s .9s ease-in-out forwards'
    },
    btn:{
        background: 'black',
        color:'white',
       
    },
    caption: {
        position : 'absolute',
        top: '35%',
        left : '10%',
        display: 'flex',
        justifyContent:'center',
        alignItems : 'center',
        flexDirection : 'column',
        maxWidth: '25%',
        textAlign:'center',
        [theme.breakpoints.down('sm')]: {
            top: '27%',
            left : '5%',
            right : '5%',
            maxWidth: '100%',
          
          },
        
    },
    img: {
        background: 'no-repeat center center/cover',
        height : '100%',
        width: '100%',
        filter : 'grayscale(0.5)',
        opacity : 0.8
       
     
    },
    dots: {
        bottom:'20%',
        position : 'absolute',
        width: '40%',
        left: '45%',
        [theme.breakpoints.down('sm')]: {
            bottom:'10%',
            left: '38%',
           
          },
        
     
    },
    activeDot: {
      color: 'white'
        
     
    },

   
  }));
  const data = [
    {
        src:'/images/hero/sc6.jpg',
        title: 'KNOLE Sofa',
        preTitle : 'Stylish studio apartment with living room and kitchen'
  },
    {
        src:'/images/hero/Screenshot2.png',
        title: 'Linwood Recamier',
        preTitle : 'Couch with pillows in living room'
  },
    {
        src:'/images/hero/Screenshot3.png',
        title: 'Lubi Divan-Style Sleeper',
        preTitle : 'Stylish studio apartment with living room and kitchen'
  },
    {
        src:'/images/hero/Screenshot5.png',
        title: 'Cabriole Maison Sofa',
        preTitle : 'Stylish studio apartment with living room and kitchen'
  },
    {
        src:'/images/hero/sc1.png',
        title: 'Lydia Camelback Sofa',
        preTitle : 'Stylish studio apartment with living room and kitchen'
  },
]
let intervals
function Carousel() {
    const classes = useStyles();
    const [active, setactive] = useState(0);
    const divRef = React.useRef(null);
    const isIntersecting = OnScreenObserver(divRef,0.25);

    const left= () => {
        clearInterval(intervals)
        setactive(active => {
            if(active < 1){
                return active= data.length - 1
            }else{
               return active - 1
            }
        })
        intervals = setInterval(() => right(), 5000);
    }
    const autoSlide= () => {
        setactive(active => {
            if(active === data.length - 1){
                return active=0
            }else{
               return active + 1
            }
        })
    
      
    }
    const right= () => {
        clearInterval(intervals)
        setactive(active => {
            if(active === data.length - 1){
                return active=0
            }else{
               return active + 1
            }
        })
        intervals = setInterval(() => right(), 5000);
      
    }
    const dotClick= (i) => {
        clearInterval(intervals)
        setactive(i)
        intervals = setInterval(() => right(), 5000);
      
    }
 

    useEffect(() => {
        if(isIntersecting) intervals = setInterval(() => autoSlide(), 5000);
    
            return () => clearInterval(intervals);
        }, [isIntersecting])
  
    return (
        <div className={classes.container} ref={divRef}>
            <div className={classes.hero}>
            <IconButton onClick={left} className={classes.left} aria-label="left">
                <ArrowBackIosIcon />
            </IconButton>
            <IconButton onClick={right} className={classes.right} aria-label="right">
                <ArrowForwardIosIcon />
            </IconButton>
        

            {
                data.map((data,i)=> (
                    <div key={i}
                        className={clsx(classes.content, {
                        [classes.active] : i === active 
                        
                      })}>
                    <img
                        className={classes.img}
                        src={data.src}
                        alt={data.title}
                    
                    />
                    <div className={classes.caption}>
                   
                    <Typography className={ i === active ? classes.title : ''} variant="h6" gutterBottom>
                        {data.title}
                    </Typography>
                    <Typography className={ i === active ? classes.preTitle : ''} variant="subtitle2" gutterBottom>
                       {data.preTitle}
                    </Typography>
                    <Link href='/collections'>
                    <Button className={clsx(classes.btn, {
                        [classes.activeBtn] : i === active 
                        
                      })} variant="contained">Shop Now</Button>
                    </Link>
    
                    </div>
    
                </div>

                ))
            }
     
          
            <div className={classes.dots}>
                {
                    data.map((data,i) => (
                    <FiberManualRecordIcon 
                        key={i}
                     
                        className={clsx({[classes.activeDot] : i === active})}
                        onClick={() => dotClick(i)}
                     />
                     ))
                }
              
            </div>
            </div>
        </div>
    )
}

export default Carousel
