import React from 'react'
import { makeStyles,Typography,Grid} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        margin:'50px 0'
      
    },
    bg: {
        background: 'url(/images/hero/sc6.jpg) no-repeat center center/cover',
        width: '100%',
        height : '500px',
       backgroundAttachment : 'fixed'
      
    },
    
    
  }));
function ViewEverything({one,two}) {
    const classes = useStyles();
    return (
    <div className={classes.root}>
   
            <Typography style={{textAlign : 'center',marginBottom:'50px'}} variant="body2" gutterBottom>
                 VIEW EVERYTHING
            </Typography>
        <div className={classes.bg}></div>
            
    </div>
    )
}

export default ViewEverything
