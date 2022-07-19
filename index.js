
const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");

// Constant 

const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
const GET_TODOS_FAILED = 'GET_TODOS_FAILED';
const API_URL = 'https://jsonplaceholder.typicode.com/todos';

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


const fetchData = () => {
    return (dispatch) => {
        dispatch(getTodosRequest());
        axios.get(API_URL)
        .then((res) => {
            const todos = res.data;
            dispatch(getToodosSuccess(todos))
        })
        .catch((error) => {
            const errorMessage = error.message;
            dispatch(getTodosFailed(errorMessage));
        })
    }
}

// Create store
const store = createStore(todosReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(fetchData());