import React, { useRef, useState } from 'react';
import { Box, Flex, Input, useColorModeValue } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';

const TodoInput = () => {
  const [textValue, setTextValue] = useState('');
  const inputBox = useRef();
  const focusHandler = () => {
    inputBox.current.focus();
  };

  const caretColor = 'hsl(220, 98%, 61%)';
  const color = useColorModeValue('todoBlue.700', 'todoGray.100');
  return (
    <Flex
      py={{ base: '14px', lg: '20px' }}
      pl={{ base: '20px', lg: '24px' }}
      mb={{ base: '16px', lg: '24px' }}
      bg={useColorModeValue('white', 'todoBlue.600')}
      alignItems="center"
      borderRadius="md"
    >
      <Box onClick={() => focusHandler()}>
        {' '}
        <EditIcon h="24px" w="24px" color="todoBlue.200" mr={{ base: '12px', lg: '24px' }} />
      </Box>
      <Input
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        type="text"
        color={color}
        variant="unstyled"
        fontSize={{ base: '12px', lg: '18px' }}
        placeholder="Create a new todo...."
        style={{ caretColor: caretColor }}
        ref={inputBox}
      />
    </Flex>
  );
};

export default TodoInput;
