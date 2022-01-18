import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/action";

function Login() {
  const dispatch = useDispatch();

  const handleAdd = () => {
    const action = loginSuccess(Date.now());
    dispatch(action);
    // or
    // dispatch(loginSuccess(Date.now()))
  };
  return (
    <div>
      <h3>Login</h3>
      <button onClick={handleAdd}>Please click on this to login</button>
    </div>
  );
}

export default Login;
