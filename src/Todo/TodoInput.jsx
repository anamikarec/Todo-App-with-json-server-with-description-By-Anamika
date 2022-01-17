import React, { useState } from "react";

function TodoInput({ onAdd }) {
  const [state, setState] = useState("");

  return (
    <div>
      <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="Add Something.."
      />
      <button
        onClick={() => {
          onAdd(state);
          setState("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default TodoInput;
