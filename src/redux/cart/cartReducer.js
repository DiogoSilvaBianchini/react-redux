const initialState = {
    currentCart: [],
    totalCart: 0
}

const useCartReducer = (state = initialState, action) => {
    switch(action.type){
        case "cart/toAdd":
            state.totalCart += action.payload.productPrice
            return {...state, 
                currentCart: [...state.currentCart, action.payload]
            }
        case "cart/addQuantity":
            for(let product of state.currentCart){
                if(product.id === action.payload.id){
                    state.totalCart += action.payload.productPrice
                    product.quantity += 1
                }
            }
            return state
        case "car/subQuantity":
            for(let product of state.currentCart){
                if(product.id === action.payload.id){
                    if(product.quantity > 0){
                        state.totalCart -= action.payload.productPrice
                        product.quantity -= 1
                    }
                }
            }
            return state
        default:
            return state
    }
}

export default useCartReducer