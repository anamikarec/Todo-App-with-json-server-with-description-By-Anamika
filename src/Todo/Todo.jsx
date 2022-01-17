import { useDispatch } from "react-redux";
import { addTodo } from "../redux/action";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { v4 as uuid } from "uuid";
// we need to update and add todo item, so this information comes from todoinput

function Todo() {
  const dispatch = useDispatch();
  const handleAdd = (text) => {
    const action = addTodo({
      title: text,
      status: false,
      id: uuid()
    });
    dispatch(action);
  };
  return (
    <div>
      <div>
        <TodoInput onAdd={handleAdd} />
      </div>
      <div>
        <TodoList />
      </div>
    </div>
  );
}

export default Todo;
