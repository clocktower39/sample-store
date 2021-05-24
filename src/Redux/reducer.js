import { ADD_TO_CART, REMOVE_FROM_CART } from "./actions";

const initialState ={
    merchandise: [
        {
            title: 'M&P 500',
            description: 'Hand gun',
            price: '500.00',
            imgSource: '',
        },
        {
            title: 'MacBook Pro',
            description: '2013 Model 13.3" screen',
            price: '750.00',
            imgSource: '',
        },
        {
            title: 'Rubik\'s Cube',
            description: '3x3',
            price: '10.00',
            imgSource: '',
        },
    ],
    cart: [
        
    ],
}

export let reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                cart: [ ...state.cart, action.item ],
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item,i)=>{
                    return (action.index !== i);
                }),
            }
        default:
            return {...state}
    }
}