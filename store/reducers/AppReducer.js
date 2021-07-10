const addToCart = (initialCartItems, nextCartItems) => {
    const ifItemsExist = initialCartItems.find(
      initialCartItem => initialCartItem.id === nextCartItems.id
    );
  
    if (ifItemsExist) {
      return initialCartItems.map(cartItem =>
        cartItem.id === nextCartItems.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
    return [...initialCartItems, { ...nextCartItems, quantity: 1 }];
  };

 const clearItemFromcart = (prevItems, nextItem) => prevItems.filter(item => item.id !== nextItem.id);

const reduceItemFromCart = (prevItems, nextItem) => {
    const ifItemsExist = prevItems.find(item => item.id === nextItem.id);
  
    if (ifItemsExist.quantity === 1) {
      return clearItemFromcart(prevItems, nextItem);
    }
    return prevItems.map(item =>
      item.id === nextItem.id
        ? {
            ...item,
            quantity: item.quantity - 1
          }
        : item
    );
  };

export const AppReducer = (state, action) => {
    switch(action.type){
        case "ON_FOOTER" : 
        return {
            ...state,
            onFooter : action.payload
        };
        case "CLEAR_CART" : 
        return {
            ...state,
            cart : []
        };
        case "ADD_TO_CART" : 
        return {
            ...state,
            cart : addToCart(state.cart,action.payload) 
        };
        case "REDUCE_FROM_CART" : 
          return {
              ...state,
              cart : reduceItemFromCart(state.cart,action.payload) 
          };
        case "REMOVE_FROM_CART" : 
        return {
            ...state,
            cart :clearItemFromcart(state.cart,action.payload)
        };

        default : return state
   

}
}

