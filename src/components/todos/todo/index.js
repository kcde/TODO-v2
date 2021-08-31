import React, { useState } from 'react';
import { Flex, Text, Box, useColorModeValue, Spacer } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import TodoCheck from './todoCheck';

const Todo = ({ completed }) => {
  completed = true;
  const bg = useColorModeValue('white', 'todoBlue.600');
  const [hover, setHover] = useState(false);
  const closeIconColor = useColorModeValue('todoBlue.200', 'todoBlue.400');
  const color = useColorModeValue('todoBlue.600', 'todoBlue.100');
  const completedColor = useColorModeValue('todoGray.300', 'todoBlue.400');

  return (
    <Flex
      bg={bg}
      px={{ base: '20px', lg: '24px' }}
      py={{ base: '16px', lg: '20px' }}
      borderBottom="1px"
      borderColor={useColorModeValue('todoBlue.200', 'todoBlue.400')}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Box pr={{ base: '12px', lg: '24px' }}>
        <TodoCheck checked={completed} />
      </Box>
      <Text
        color={completed ? completedColor : color}
        fontSize={{ base: '12px', lg: '18px' }}
        as={completed ? 's' : null}
      >
        My todo
      </Text>
      <Spacer />
      {hover ? <CloseIcon color={closeIconColor} alignSelf="center" /> : null}
    </Flex>
  );
};

export default Todo;
