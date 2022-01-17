//constants
// We don't mess with name
// in switch case in reducer, if there is no case matches then it should return the default and need to return state without changing
export const actionConstants = {
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO_ITEM: "REMOVE_TODO",
  TOGGLE_TODO_STATUS: "TOGGLE_TODO_STATUS"
};

// actionCreators
// simple functions which creates it for u.

// We can write these functions by two type
// it this first type we need payload

// Type is mandatory
export const addTodo = ({ title, status, id }) => {
  return {
    type: actionConstants.ADD_TODO,
    payload: {
      title,
      status,
      id
    }
  };
};
// second is without using return.
export const removeTodo = (id) => ({
  type: actionConstants.REMOVE_TODO_ITEM,
  payload: {
    id: id
  }
});

export const toggleTodo = (id) => ({
  type: actionConstants.TOGGLE_TODO_STATUS,
  payload: {
    id: id
  }
});

// we have to use the same naming type convention.
// if we donn't pass the type => redux willl throw an error => saying that action need a type on it.
