import React from 'react';
import Typography from '@material-ui/core/Typography';
import Page from "../shared/Page";
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import useToDoState from './useToDoState';

const Index = () => {
  const { toDos, addToDo, deleteToDo } = useToDoState([]);

  const handleSaveToDo = toDoText => {
    const trimmedValue = toDoText.trim();

    if (trimmedValue.length > 0) {
      addToDo(trimmedValue);
    }
  }

  return (
    <Page heading="React Hooks | A To Do App">
      <div className="App">
        <Typography component="h1" variant="h2">
          Todos
        </Typography>

        <ToDoForm saveToDo={handleSaveToDo} />
        <ToDoList toDos={toDos} deleteToDo={deleteToDo} />
      </div>
    </Page>
  );
};

export default Index;