import React ,{createContext} from 'react';
import { AppReducer } from './reducers/AppReducer';

export const AppStoreContext = createContext();

export default function AppStoreContextProvider (props){
 const initialState ={
     onFooter:false,
     cart : []
 };
 const [state, dispatch] = React.useReducer(AppReducer, initialState);


const value ={
state,
dispatch
}
    return (
        <AppStoreContext.Provider value={value}>
            {props.children}
        </AppStoreContext.Provider>
    )
}