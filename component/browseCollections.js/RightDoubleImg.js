import React from 'react'
import { makeStyles} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    container: {
     position : 'relative',
    
      height : '50vh'
      
    },
    one: {
     maxWidth : '65%',
     height : '65%',
     
      
    },
    two: {
      position : 'absolute',
      maxWidth : '80%',
      maxHeight : '230px',
      bottom: 0,
     
    
    },
    
  }));
function RightDoubleImg({one,two}) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <img
                className={classes.one}
                src={one}
                alt='portraitMain'
            
            />
            <img
                className={classes.two}
                src={two}
                alt='portraitMain'
            
            />
        </div>
    )
}

export default RightDoubleImg
