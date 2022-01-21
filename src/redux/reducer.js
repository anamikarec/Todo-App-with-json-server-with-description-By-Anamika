import { actionConstants } from "./action";
import { loadData, saveData } from "../utils/localStorage";

const token = loadData("token") || null;

const initState = {
  todos: [],
  isLoading: true,
  isError: false,
  // !! token => !null => true => !!null => false
  isAuth: !!token, // or we can use =>  isAuth: token !== null
  token: token
};
function reducer(state = initState, action) {
  console.log(state, action);
  switch (action.type) {
    case actionConstants.LOGIN_SUCCESS: {
      saveData("token", action.payload.token);
      return {
        ...state,
        isAuth: true,
        token: action.payload.token
      };
    }
    case actionConstants.GET_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }
    case actionConstants.GET_TODO_SUCCESS: {
      return {
        ...state,
        todos: action.payload.todos,
        isLoading: false
      };
    }
    case actionConstants.GET_TODO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    }
    case actionConstants.ADD_TODO: {
      // this doesn't update the todos , becuase the object referenece does n't change.
      // that is why we spread the state, so it point to the new object
      // state.todos.push(action.payload);
      // console.log(state);
      // return state;
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    }
    case actionConstants.REMOVE_TODO_ITEM: {
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action?.payload?.id)
      };
    }
    case actionConstants.TOGGLE_TODO_STATUS: {
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.id
            ? { ...item, status: !item.status }
            : item
        )
      };
    }
    default:
      return state;
  }
}

export default reducer;

// with an example how object referenece does n't change

const a = { b: 10 };
const b = { b: 10 };
console.log(a === b);
// true // false
// false is correct => these are differenet objects
// similar to example => house of the address
// two identical houses => but never have the same addresses

// reducer is description on how your store will get updated.
// we are using redux state management tool => that's why we are not using useState()

// no need to write these files as jsx format.
