
export const getFooter = (footer) => {
    return {
        type : 'ON_FOOTER',
        payload : footer
    }
        
    }
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

