export const ADD_TO_CART = 'ADD_TO_CART';

export function updateMessageList(item){
    return {
        type: ADD_TO_CART,
        item: item,
    }
}