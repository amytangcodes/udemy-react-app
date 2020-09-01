import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./useInputState";

const ToDoForm = ({ saveToDo }) => {
  const { value, onChange, reset } = useInputState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    saveToDo(value);
    // Don't forget to clear the input field:
    reset();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        value={value}
        onChange={onChange}
      />
    </form>
  );
};

export default ToDoForm;
