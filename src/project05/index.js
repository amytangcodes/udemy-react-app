import React from 'react';
import Typography from '@material-ui/core/Typography';
import Page from "../shared/Page";
import ToDoForm from './ToDoForm';
// import TodoList from './TodoList';
// import useTodoState from './useTodoState';
import './styles.scss';

const Index = () => {
  // const { todos, addTodo, deleteTodo } = useTodoState([]);

  const saveToDo = value => {
    console.log({ value });
  }

  return (
    <Page heading="React Hooks | A To Do App">
      <div className="App">
        <Typography component="h1" variant="h2">
          Todos
        </Typography>

        <ToDoForm
          saveToDo={saveToDo}
        />

        {/* <TodoList todos={todos} deleteTodo={deleteTodo} /> */}
      </div>


    </Page>
  );
};

export default Index;