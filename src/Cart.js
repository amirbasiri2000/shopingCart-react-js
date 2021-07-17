import React , {  createContext , useReducer , useEffect  }  from 'react';
import './Cart.css';
import { Scrollbars } from 'react-custom-scrollbars';
import { Products } from './Products';
import Item from './Item';
import ContextCart from './ContextCart';
import { reducer } from './reducer';

export const cartContext = React.createContext();

const initialState = {
    item : Products,
    totalItem: 0,
    totalAmount: 0
}


const Cart = () =>{
    
    const [ state , dispatch ] = useReducer( reducer , initialState );

    const removeItem = (id) =>{
        return dispatch({
            type: "REMOVE_ITEM",
            payload: id,
        })
    }

    // -------------- clear cart ----------------
    const clearCart = () =>{
        return dispatch({
            type: "CLEAR_CART",
        })
    }

    // ------------- increment -------------------
    const increment = (id) =>{
        return dispatch({
            type: "INCREMENT",
            payload: id,
        })
    }
    // ------------- decrement --------------------
    const decrement = (id) =>{
        return dispatch({
            type: "DECREMENT",
            payload: id,
        })
    }
    //  ------------- tatal item ----------------
    useEffect(()=>{
        dispatch({
            type: "GET_TOTAL",
        })
        console.log("Awesome")
    },[state.item])
    return(
        <cartContext.Provider value={{ ...state , removeItem , clearCart , increment , decrement }}>
            <ContextCart/>
        </cartContext.Provider>
    );
}

export default Cart;