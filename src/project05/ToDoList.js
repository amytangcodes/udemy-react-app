import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const ToDoList = ({ toDos, deleteToDo }) => {
  return (
    <List>
      {toDos.map((toDo, index) => (
        <ListItem key={index}>
          <Checkbox tabIndex={-1} disableRipple />
          <ListItemText primary={toDo} />
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => deleteToDo(index)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>

        </ListItem>
      ))}
    </List>
  )
}

export default ToDoList;
