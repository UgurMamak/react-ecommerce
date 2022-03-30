const initialState = {
    count: 0
}

export default function counterReducer(state = initialState, action) {
    switch (action.type) {
        case 'counter/increment': {
            return {
                ...state,
                count: state.count + 1,
            }
        }
        case 'counter/decrement': {
            return {
                ...state,
                count: state.count - 1,
            }
        }
        case 'counter/doubleIncrement': {
            return {
                ...state,
                count: state.count + action.payload,
            }
        }
        case 'counter/doubleDecrement': {
            return {
                ...state,
                count: state.count -2,
            }
        }
        default:
            return state
    }
}