import React from 'react';
import { makeStyles,Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'10px',
        [theme.breakpoints.down('sm')]: {
           flexDirection:'column',
           justifyContent:'center',
           
        },
  
    },
 
 
    desc: {
      display:'flex',
      justifyContent:'center',
      alignItems:'start',
      flexDirection:'column',
      width:'100%',
      marginLeft:'15px',
      fontFamily: 'Cormorant Infant,-apple-system',
      fontWeight:'bold',
     
    },
    img: {
      width:250,
      height:'auto'
    },
    btn: {
      background:'rgb(108,79,35)',
      color:'white',
      '&:hover': {
        background:'rgba(108,79,35,0.7)' 
      }
    },
 
    price: {
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
     
      width:'100%'
    },
  }));

function ModalContent(props) {
  
 
    const classes = useStyles();
    return (
        <div  className={classes.container}>        
            <img
                src={props?.item?.src}
                alt={props?.item?.name}
                className={classes.img}
               
                />
            <div  className={classes.desc}>
                <h4>{props?.item?.name}</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, labore eum! Tenetur impedit tempora corporis inventore perferendis. Saepe temporibus delectus maiores nam aspernatur inventore quae tempora sit assumenda.
                </p>
                <div  className={classes.price}>
                    <h3>${props?.item?.price}</h3>
                    <Button color="primary" classes={{containedPrimary : classes.btn}} onClick={props.AddToCart} variant="contained">Add to Cart</Button>
                </div>
            </div>
        </div>
    )
}

export default ModalContent
