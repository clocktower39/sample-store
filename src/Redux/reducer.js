import { ADD_TO_CART } from "./actions";

const initialState ={
    items: [
        
    ],
}

export let reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                items: [ ...state.items, action.item ],
            }
        default:
            return {...state}
    }
}