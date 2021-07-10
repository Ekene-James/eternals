import React from 'react'

import { makeStyles, Grid,Typography,TextField,Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    root: {
      flexGrow: 1,
      width : '60%',
      margin : '50px auto',
    
   
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
 
  
  }));
function NewsLetter() {
    const classes = useStyles();
    const [email, setemail] = React.useState('')
    const handleChange= (e) => {
      const {name,value} = e.target;
      setemail({
          name:value
      })
       
    }
    return (
        <div className={classes.root}>
             <Grid container spacing={3}>
             <Grid item xs={12}>
             <Typography style={{textAlign:'center',marginBottom:'20px'}} variant="body2" gutterBottom>
                        NEWSLETTER
                </Typography>
             </Grid>
             <Grid item xs={12} >
             <Typography style={{textAlign:'center',marginBottom:'20px'}} variant="h4" gutterBottom>
                Subscribe to get the latest updates
            </Typography>
             </Grid>
                <Grid item xs={12} md={8}>
                    <TextField fullWidth name='email' value={email} label="Email" onChange={handleChange} />
                </Grid>
                <Grid className={classes.btn} item xs={12} md={4}>
                <Button variant="contained" style={{background : 'black', color:'white',alignSelf:'flex-end',marginBottom:'0'}}>
                    Subscribe
                </Button>
                </Grid>
         
               

        </Grid>
        </div>
    )
}

export default NewsLetter
