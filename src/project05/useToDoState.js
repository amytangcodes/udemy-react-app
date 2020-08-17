import { useState } from "react";

export default (initialValue) => {
  const [toDos, setToDos] = useState(initialValue);

  return {
    toDos,
    addToDo: (toDoText) => {
      setToDos([...toDos, toDoText]);
    },
    deleteToDo: (toDoIndex) => {
      const newToDos = toDos.filter((_, index) => index !== toDoIndex);
      setToDos(newToDos);
    },
  };
};
