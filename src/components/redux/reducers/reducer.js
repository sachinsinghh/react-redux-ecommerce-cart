const INIT_STATE = {
    carts: []
};

export const cartreducers = (state=INIT_STATE, action) => {
    switch(action.type) {
        case 'ADD_CART':
            return {
                carts: [...state.carts, action.payload]
            }
           default:
            return state; 
    }

}