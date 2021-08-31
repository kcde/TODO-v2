import React, { useState } from 'react';
import { CheckIcon } from '@chakra-ui/icons';
import { Flex, useColorModeValue } from '@chakra-ui/react';

const TodoCheck = ({ checked }) => {
  const [hover, setHover] = useState(false);

  const bg = useColorModeValue('white', 'todoBlue.600');

  // this will handle light and dark mode backgrounds
  const uncheckedBg = useColorModeValue(
    'linear(to-br, todoBlue.200, todoBlue.200)',
    'linear(to-br, todoBlue.400, todoBlue.400)'
  );

  const gradient =
    hover || checked ? 'linear(to-br, todoGradient.blue, todoGradient.pink)' : uncheckedBg;

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      w={{ base: '20px', lg: '24px' }}
      h={{ base: '20px', lg: '24px' }}
      bgGradient={gradient}
      borderRadius="full"
      cursor="pointer"
    >
      {
        // see if checked is true
        checked ? (
          <CheckIcon h="12px" color="todoGray.100" />
        ) : (
          <Flex
            alignItems="center"
            justifyContent="center"
            w="90%"
            h="90%"
            bgColor={bg}
            borderRadius="inherit"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          ></Flex>
        )
      }
    </Flex>
  );
};

export default TodoCheck;
