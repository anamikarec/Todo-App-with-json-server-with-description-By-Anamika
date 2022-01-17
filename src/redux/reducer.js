import { actionConstants } from "./action";

const initState = {
  todos: [
    {
      id: 1,
      status: false,
      title: "BUY BREAD"
    }
  ]
};
function reducer(state = initState, action) {
  console.log(state, action);
  switch (action.type) {
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
