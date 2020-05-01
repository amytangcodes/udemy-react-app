import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const ToDoForm = ({ saveToDo }) => {
  const [value, setValue] = useState('');

  const onInputChange = e => {
    setValue(e.target.value);
  }

  const onFormSubmit = e => {
    e.preventDefault();

    saveToDo(value);
  }

  return (
    <form onSubmit={onFormSubmit}>
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        value={value}
        onChange={onInputChange}
      />
    </form>
  )
}

export default ToDoForm
