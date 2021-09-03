import React from 'react';
import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import Todo from './todo';

const Todos = () => {
  const todos = useSelector((state) => state.TodoList);
  // const todoFilter = (filter) =>{
  //   switch(filter){
  //     case 'active':
  //       return todos.filter(todo => !todo.isComplete)
  //     case 'completed':
  //       return todos.filter(todo =>todo.isComplete)
  //       default:
  //         return todos
  //   }
  // }
  return (
    <Box>
      {/* <Todo task={{ completed: true }} /> */}
      {todos.map((todo) => (
        <Todo task={todo} key={todo.id} />
      ))}
    </Box>
  );
};

export default Todos;
