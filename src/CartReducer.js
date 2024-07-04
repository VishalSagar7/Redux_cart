const initialCart = {
    items: []
};

export function cartReducer(state = initialCart, action) {
    switch (action.type) {
        case "addToCart":
            const item = action.payload;
            return {
                // ...state,
                items: [...state.items, item]
            };

        case 'removeFromCart':
            return {
                // ...state,
                items: state.items.slice(0, -1)
            };

        default:
            return state;
    }
}
