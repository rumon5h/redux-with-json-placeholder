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
