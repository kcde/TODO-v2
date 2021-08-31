import React from 'react';
import { Box } from '@chakra-ui/react';
import Todo from './todo';

const Todos = () => {
  return (
    <Box borderRadius="md" style={{ overflow: 'hidden' }}>
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </Box>
  );
};

export default Todos;
