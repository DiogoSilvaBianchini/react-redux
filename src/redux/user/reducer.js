const initialState = {
    currentUser: null
}

const useReducer = (state = initialState, action) => {
    switch(action.type){
        case "user/login":
            return {...state, currentUser: action.payload}
    }

    return state
}

export default useReducer