// https://jsonplaceholder.typicode.com/todos

// Constant 

const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
const GET_TODOS_FAILED = 'GET_TODOS_FAILED';

// Create state 
const initialTodosState = {
    todos: [],
    isLoading: false,
    error: null
}

// Action 
const getTodosRequest = () => {
    return {
        type: GET_TODOS_REQUEST
    }
}

const getTodosFailed = (error) => {
    return {
        type: GET_TODOS_FAILED,
        payload: error
    }
}

const getToodosSuccess = (todos) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: todos
    }
}

// Create todos reducer 

const todosReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload
            }   
        case GET_TODOS_FAILED:
            return {
                ...state,
                isLoading: true,
                error: action.payload
            }
    
        default:
            return state;
    }
}


