import React from "react"
import {useRouter} from 'next/router'

import {  usePaystackPayment } from 'react-paystack';
import { AppStoreContext } from "../store/AppStore";
import { makeStyles,Paper , Button,TextField,  } from '@material-ui/core';
import { clearCart } from "../store/actions/AppAction";
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        width : '450px',
       
        margin : ' 100px auto',
        display : 'flex',
         justifyContent: 'space-between',
         alignItems: 'center',
         flexDirection : 'column',
      
        [theme.breakpoints.down("sm")]: {
            margin : ' 150px auto',
            width: `80%`
        }
       
       },
       btn: {
        background:'rgb(108,79,35)',
        color:'white',
        '&:hover': {
          background:'rgba(108,79,35,0.7)' 
        }
      },
    form: {
        margin : '15px 0',
       
       },
       txtField: {
        marginTop : '25px',
       
       },
    link: {
        marginBottom : '30px',
       
       },
       bg: {
        height : '100vh',
        background: `url('/images/hero/sc6.jpg') no-repeat center center/cover`,
        display : 'flex',
        justifyContent: 'center',
        alignItems: 'center',   
    },
   }));
const Checkout = () => {
    const classes = useStyles();
    const appCtx = React.useContext(AppStoreContext);
    const router = useRouter()
  const publicKey = process.env.NEXT_PUBLIC_KEY

  const amount = appCtx.state.cart.length !==0 && appCtx.state.cart.reduce((a,b) => a + (b.quantity * b.price),0 )
  const [state, setstate] = React.useState({
    email:'guest@gmail.com',
    phone : '1234567890',
    name:'John Doe'
})
 
  const config = {
    email :state.email,
    reference: (new Date()).getTime(),
    amount: amount * 100,
    metadata: {
      name:state.name,
      phone:state.phone,
    },
    publicKey
    
}
const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    
    appCtx.dispatch(clearCart()) 
    router.push('/collections') 
    const datas = {...reference}
    console.log(reference)
   
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }
  const initializePayment = usePaystackPayment(config);
  const handleChange = e => {
    const {name,value} = e.target
     setstate({
         ...state,
        [name] : value
    })
    
}
  return (
    <div className={classes.bg}>
    <Paper className={classes.paper}>
        <h4>Check Out</h4>
        <div className={classes.txtField}>
        <TextField
            name='name'
            fullWidth
            value={state.name}
            onChange={handleChange}
            label='Name'
            variant="outlined"
            type='text'
            className={classes.form}
        />
        <TextField
            name='email'
            fullWidth
            value={state.email}
            onChange={handleChange}
            label='Email'
            variant="outlined"
            type='email'
            className={classes.form}
        />
        <TextField
            name='phone'
            fullWidth
            className={classes.form}
            value={state.phone}
            onChange={handleChange}
            label='Phone'
            variant="outlined"
            type='text'
        />
        <div>
            <h4>Total</h4>
            <h4>${amount}</h4>
        </div>
        </div>
        <div style={{width:'50%',margin:'auto'}}>
        <Button 
            color="primary"
            style={{display: 'inline-block',width:'100%'}} 
            classes={{containedPrimary : classes.btn}} variant="contained"
            onClick={() => {
                initializePayment(onSuccess, onClose)
            }}
        >
           Pay Now
        </Button>

       </div>
       
    </Paper>
</div>
  )
}
export default Checkout
 