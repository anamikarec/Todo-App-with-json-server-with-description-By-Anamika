import { createStore } from "redux";
import reducer from "./reducer";

// const initState = {
//   todos: [
//     {
//       id: 1,
//       status: true,
//       title: "BUY BREAD"
//     }
//   ]
// };
//Creates a Redux store that holds the complete state tree of your app. There should only be a single store in your app.
export const store = createStore(reducer); //,initState);

console.log(store.getState());

//create actions
//create reducer
// create store
// pass store in the provider
// select data from store
// pass it to required elements
// dispatch an action depending on user input
