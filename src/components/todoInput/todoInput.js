import React, { useRef } from 'react';
import { Box, Flex, Input, useColorModeValue } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';

const TodoInput = () => {
  const inputBox = useRef();
  const focusHandler = () => {
    inputBox.current.focus();
  };
  return (
    <Flex
      py={{ base: '14px', lg: '20px' }}
      pl={{ base: '20px', lg: '24px' }}
      bg={useColorModeValue('todoGray.100', 'todoBlue.600')}
      alignItems="center"
      borderRadius="base"
    >
      <Box onClick={() => focusHandler()}>
        {' '}
        <EditIcon h="24px" w="24px" color="todoBlue.200" mr={{ base: '12px', lg: '24px' }} />
      </Box>
      <Input
        type="text"
        color="todoBlue.700"
        variant="unstyled"
        fontSize={{ base: '12px', lg: '18px' }}
        fontWeight="bold"
        placeholder="Create a new todo...."
        caretStyle="none"
        style={{ caretColor: 'todoBlue.main' }}
        ref={inputBox}
      />
    </Flex>
  );
};

export default TodoInput;
