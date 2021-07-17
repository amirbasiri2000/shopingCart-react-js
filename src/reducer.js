export const reducer = (state,action) =>{

    if(action.type === "REMOVE_ITEM"){
        return {
            ...state,
            item: state.item.filter((curElem) => {
                return curElem.id !== action.payload
            })
        }
    }
    // ------------ clear cart ---------------------
    
    if(action.type === "CLEAR_CART"){
        return {
            ...state,
            item: [],
        }
    }
    // ------------- increment ---------------------
    if(action.type === "INCREMENT"){
        let updatedCart = state.item.map((curElem) =>{
            if(curElem.id === action.payload){
                return{
                    ...curElem,
                    quantity: curElem.quantity + 1
                }
            }
            return curElem;
        })

        return {
            ...state,
            item: updatedCart,
        }
    }
    // ---------------- decrement --------------------

    if(action.type === "DECREMENT"){
        let updatedCart = state.item.map((curElem) =>{
            if(curElem.id === action.payload){
                return{
                    ...curElem,
                    quantity : curElem.quantity - 1,
                }
            }
            return curElem;
        } ).filter((curElem) =>{
            return curElem.quantity !== 0;
        })
        return {
            ...state,
            item: updatedCart,
        }
    }


    return state;
}