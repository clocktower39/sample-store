import { ADD_TO_CART, REMOVE_FROM_CART } from "./actions";

const initialState ={
    merchandise: [
        {
            title: 'M&P 500',
            description: 'Hand gun',
            price: '500.00',
            image: 'https://snwcdnprod.azureedge.net/sites/default/files/styles/product_main/public/firearms/images/12458-mp-OnWhite-Left2.png?itok=zSbipMj7',
        },
        {
            title: 'MacBook Pro',
            description: '2013 Model 13.3" screen',
            price: '750.00',
            image: 'https://i.pcmag.com/imagery/reviews/04H9r1RQFchgma6VWvhWHJR-5.1569473926.fit_scale.size_1182x665.jpg',
        },
        {
            title: 'Rubik\'s Cube',
            description: '3x3',
            price: '10.00',
            image: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Rubix_cube.jpg',
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