
export const getFooter = (footer) => {
    return {
        type : 'ON_FOOTER',
        payload : footer
    }
        
    }
    export const handleSnackBar = (state) => {
        return {
          type: 'HANDLE_SNACK_BAR',
          payload: state
        };
      };
export const addToCart = (item) => {
    return {
        type : 'ADD_TO_CART',
        payload : item
    }
        
    }
export const removeFromCart = (item) => {
    return {
        type : 'REMOVE_FROM_CART',
        payload : item
    }
        
    }
export const clearCart = () => {
    return {
        type : 'CLEAR_CART'
    }
        
    }
export const reduceFromCart = (item) => {
   
    return {
        type : 'REDUCE_FROM_CART',
        payload : item
    }
        
    }
export const subNewsLetter = () => {
   const state ={
    type:'success',
    open:true,
    msg:'Success'
   }
    return {
        type: 'HANDLE_SNACK_BAR',
        payload: state
      };
        
    }

    // dispatch(handleSnackBar({
    //     type:'error',
    //     open:true,
    //     msg:user.data.message
    //   }))
