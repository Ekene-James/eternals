import React from 'react'
import { makeStyles,Typography,Grid} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        margin:'0',
        marginBottom:0,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        width:'100%',
        background:'whitesmoke',
        color:'black',
        height:'100%',
        
      
    },
    container: {
        
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        padding:'50px',
        marginTop:'10%',
        color:'white',
        background:'#333',
       
        boxShadow: '0 20px 50px rgba(0,0,0,.8)',
        
      
    },

    
    
  }));
function About() {
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <div className={classes.container}>
        <h1 style={{fontSize:'70px',fontWeight:'500'}}>ULTIMATE SATISFACTION</h1>
        <p style={{width:'30%',textAlign:'center'}}>
          At <strong>Eternals</strong>, We strive to make our customers satisfaction our priority while maintain the standards that brought us thus far.
        </p>
        </div>
        <h3 style={{marginTop:'7%'}}>A BRIEF HISTORY</h3>
        <hr style={{width:'100%'}}/>
        
        <p style={{padding:'50px',paddingTop:0,fontWeight:'bold',lineHeight:1.5}}>A dream that started in the little suburbs of Abakpa in Enugu, Nigeria. Materialised from a little shade where mini home equipments like
        local kitchen stool and bench are built for market women plying their trades using crude carpentary equipments, to not only state of the art carpentary shop where heavy and aesthetic interior design concepts are designed with 
        modern and automated tools, but also has warehouses across the country to make delivery to those places easier for our customers who order online.</p>
            
        <h4>Give us at try today and you wont regret it !!!</h4>
    </div>
    )
}

export default About
