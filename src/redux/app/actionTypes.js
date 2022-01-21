//constants
// We don't mess with name
// in switch case in reducer, if there is no case matches then it should return the default and need to return state without changing
export const appConstants = {
  // Common practice to write network request
  GET_TODO_REQUEST: "GET_TODO_REQUEST",
  GET_TODO_SUCCESS: "GET_TODO_SUCCESS",
  GET_TODO_FAILURE: "GET_TODO_FAILURE",
  /// here we can add todo via network request
  // by breaking down addTodo in three parts
  // and remove todo in three parts
  // and toggle todo in three parts
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO_ITEM: "REMOVE_TODO",
  TOGGLE_TODO_STATUS: "TOGGLE_TODO_STATUS"
};
