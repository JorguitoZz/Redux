

//estado
const initialState = {
    count: 0,
}

//acciones
const incrementar = () => ({
    type: 'INCREMENTAR'
})

const decrementar = () => ({
    type: 'DECREMENTAR'
})

const reset = () => ({
    type: 'RESET'
})

createStore
const reducer = (state = initialState, accion) => {
    
    switch (accion.type) {
        case 'INCREMENTAR':
            return {
                ...state,
                count: state.count + 1
            }
            break;
        case 'DECREMENTAR':
            return {
                ...state,
                count: state.count - 1
            }
            break;            
            case 'RESET':
                return {
                    ...state,
                    count: 0
                }
                break;

        default:
            return state;
            break;
    }
}

export { reducer, initialState, incrementar, decrementar, reset }