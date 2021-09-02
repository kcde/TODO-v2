import React from 'react';
import { Box } from '@chakra-ui/react';
import Todo from './todo';

const Todos = () => {
  return (
    <Box>
      <Todo task={{ completed: true }} />
      {/* <Todo />
      <Todo />
      <Todo /> */}
    </Box>
  );
};

export default Todos;
