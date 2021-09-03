import React from 'react';
import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import Todo from './todo';

const Todos = () => {
  const todos = useSelector((state) => state.TodoList);
  const filter = useSelector((state) => state.filter);
  const todoFilter = (filter) => {
    switch (filter) {
      case 'ALL':
        return todos;
      case 'ACTIVE':
        return todos.filter((todo) => !todo.completed);
      case 'COMPLETED':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };
  return (
    <Box>
      {/* <Todo task={{ completed: true }} /> */}
      {todoFilter(filter).map((todo) => (
        <Todo task={todo} key={todo.id} />
      ))}
    </Box>
  );
};

export default Todos;
