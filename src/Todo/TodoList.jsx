import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo } from "../redux/action";

function TodoItem({ title, status, onDelete, id, onToggle }) {
  return (
    <div style={{ display: "flex", padding: "1rem", gap: "2rem" }}>
      <div>{title}</div>
      <div>{`${status}`}</div>
      <button onClick={() => onDelete(id)}>Delete</button>
      <button onClick={() => onToggle(id)}>Toggle</button>
    </div>
  );
}

function TodoList() {
  // const todos = useSelector((state) => state.todos);
  // or
  const { todos } = useSelector((state) => {
    return {
      todos: state.todos
    };
  }, shallowEqual);
  const dispatch = useDispatch();

  const getTodos = () => {
    // pre-fetch
    return fetch("https://json-server-mocker-masai.herokuapp.com/tasks")
      .then((res) => res.json())
      .then((res) => {
        // success
      })
      .catch((res) => {
        // failure
      });
  };

  useEffect(() => {
    getTodos();
  }, []);
  const handleDelete = (id) => {
    const action = removeTodo(id);
    dispatch(action);
  };
  const handleToggle = (id) => {
    const action = toggleTodo(id);
    dispatch(action);
  };
  return (
    <div>
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
}

export default TodoList;
