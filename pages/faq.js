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
        background:'white',
        color:'black',
        height:'100vh',
        
      
    },
 
    fcont: {
        
        display:'flex',
        justifyContent:'center',
        alignItems:'flex-start',
        flexDirection:'column',
        background:'whitesmoke',
        padding:'20px',
        width:'60%',
       margin:'10px 0'
        
      
    },
    fItem: {
        
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },

    
    
  }));

  const FaqItem = ({q,a}) => {
    const classes = useStyles();
      return (
      <div className={classes.fcont}>
        <div className={classes.fItem}>
            <h2 style ={{color:'red',fontWeight:'bolder',margin:0}}>Q.</h2>
            <p style ={{color:'black',fontWeight:'bold',margin:0,marginLeft:'10px'}}>{q}</p>
        </div>
        <div className={classes.fItem}>
            <h2 style ={{color:'grey',fontWeight:'bolder',margin:0}}>A.</h2>
            <p style ={{color:'grey',margin:0,marginLeft:'10px'}}>{a}</p>
        </div>
      </div>
      )
  }
function Faq() {
    const classes = useStyles();
    return (
    <div className={classes.root}>
    <h1>Frequently Asked Questions (FAQs)</h1>
     <FaqItem q='How long would it take to get my order received' a='Between 1 - 3 working days'/>
     <FaqItem q='Do i have to pay for delivery ?' a='Yes, but its very affordable depending on the purchase'/>
     <FaqItem q='Do i get a discount on products ?' a='Yes, the more items bought, the likelyhood of you getting a discount'/>
     <FaqItem q='What happens on damage of goods before delivery complete' a='This seldomly happens as we have well qualified personnels for this, but in any eventuality, Damaged goods are automatically returned and replaced at the cost of the company.'/>
    </div>
    )
}

export default Faq
