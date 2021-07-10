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
     position : 'absolute',
     right: 0
    },
    two: {
      position : 'absolute',
      maxWidth : '80%',
      maxHeight : '200px',
      bottom: 0,
     
    
    },
    
  }));
function LeftDoubleImg({one,two}) {
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

export default LeftDoubleImg
