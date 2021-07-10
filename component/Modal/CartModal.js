import React from 'react';
import { makeStyles,Button,ButtonGroup } from '@material-ui/core';
import { AppStoreContext } from '../../store/AppStore';
import { removeFromCart,reduceFromCart,addToCart } from '../../store/actions/AppAction';
import Link from 'next/link';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
const useStyles = makeStyles((theme) => ({
    container: {
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'10px',
        width:'50vw',
        [theme.breakpoints.down('sm')]: {
          
           width:'70vw',
           
        },
  
    },
    noItem: {
       
        width:'50vw',
        [theme.breakpoints.down('sm')]: {
          
           width:'70vw',
           
        },
  
    },
 
 
    desc: {
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
     
      width:'100%',
      marginLeft:'15px',
      [theme.breakpoints.down('sm')]: {
        margin:0,
       
        marginLeft:'3px',
       
        
        
     },
    },
    img: {
      width:150,
      height:'auto',
      [theme.breakpoints.down('sm')]: {
        width:70,
        
     },
    },
    h4: {
      
      [theme.breakpoints.down('sm')]: {
       margin: '2px'
        
     },
    },
    h3: {
      
      [theme.breakpoints.down('sm')]: {
       fontSize: '15px'
        
     },
    },
    btn: {
      background:'rgb(108,79,35)',
      color:'white',
      '&:hover': {
        background:'rgba(108,79,35,0.7)' 
      }
    },
    btnGrp: {
      background:'rgba(103,79,35,0.9)',
      border:'1px solid white',
      color:'white',
      '&:hover': {
        border:'1px solid white',
        background:'rgba(103,79,35,0.7)' 
      }
    },
 
    price: {
      display:'flex',
      justifyContent:'center',
      flexDirection:'column',
      alignItems:'center',
      height:'100%',
      width:'100%',
      fontFamily: 'Cormorant Infant,-apple-system',
    },
    total: {
      display:'flex',
      justifyContent:'space-between',
     
      alignItems:'center',
      width:'85%',
      [theme.breakpoints.down('sm')]: {
          width:'90%',
          
    },
    },
    first: {
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center',
        height:'100%',
        width:'100%',
        fontFamily: 'Cormorant Infant,-apple-system',
        fontWeight:'bold',
       
    },
  }));

function CartModal({handleClose}) {
    const appCtx = React.useContext(AppStoreContext);
   
    const remove = (cart) => {
        appCtx.dispatch(removeFromCart(cart))   
    }
    const add = (cart) => {
       appCtx.dispatch(addToCart(cart))   
    }
    const reduce = (cart) => {
        appCtx.dispatch(reduceFromCart(cart))   
    }
    const classes = useStyles();
    let noItem;
    let price;
    if(appCtx.state.cart.length === 0) noItem = <div className={classes.noItem} ><h1>No Item In Cart</h1></div>
    if(appCtx.state.cart.length === 0) {
        price= 0
    }else{
        price = appCtx.state.cart.reduce((a,b) => a + (b.quantity * b.price),0 )
    }
    return (
        <div>
            {
             noItem   
            }
       {
           appCtx.state.cart.map((cart,i) => (
            <div key={i}  className={classes.container}>        
            <img
                src={cart.src}
                alt={cart.name}
                className={classes.img}
               
                />
            <div  className={classes.desc}>
                <div className={classes.first}>
                    <h4 className={classes.h4}>{cart.name}</h4>
                    <strong>{cart.collection}</strong>
                    <p>{cart.quantity} Piece(s)</p>
                </div>
                
                <div  className={classes.price}>
                    <h3 className={classes.h3}>{cart.quantity} * ${cart.price} : ${cart.quantity * cart.price}</h3>
                    <ButtonGroup style={{margin: '5px 0'}} classes={{groupedOutlinedPrimary : classes.btnGrp}} size='small' color="primary" aria-label="outlined primary button group">
                      <Button onClick={() => add(cart)} classes={{containedPrimary : classes.btnGrp}} size='small'><AddIcon/></Button>
                      <Button onClick={() => reduce(cart)} classes={{containedPrimary : classes.btnGrp}}size='small'><RemoveIcon/></Button>
                      
                    </ButtonGroup>
                    <Button color="primary" classes={{containedPrimary : classes.btn}} size='small' onClick={() => remove(cart)}  variant="contained">Remove</Button>
                </div>
            </div>
        </div>
           ))
       }
       <hr/>
       <div className={classes.total}>
           <h3>TOTAL :</h3>
           <h2>${price}</h2>
           
       </div>
       <div style={{width:'50%',margin:'auto'}}>
       <Link href='/checkout'>
       <Button onClick={handleClose} disabled={appCtx.state.cart.length === 0 } color="primary"
             style={{display: 'inline-block',width:'100%'}} 
            classes={{containedPrimary : classes.btn}} variant="contained">
        checkout
        </Button>
        </Link>

       </div>
        </div>
    )
}

export default CartModal
