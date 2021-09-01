import React from 'react';
import { Flex, Text, Spacer, useColorModeValue, useMediaQuery } from '@chakra-ui/react';
import Filters from './filters';

const Controls = () => {
  const [isLargerThan992] = useMediaQuery('(min-width: 992px)');

  return (
    <Flex
      bg={useColorModeValue('white', 'todoBlue.600')}
      px={{ base: '20px', lg: '24px' }}
      pt="16px"
      pb="20px"
      fontSize={{ base: '12px', lg: '14px' }}
      color={useColorModeValue('todoGray.400', 'todoBlue.400')}
    >
      <Text>5 items left</Text>
      <Spacer />
      {isLargerThan992 ? <Filters /> : null}
      <Spacer />

      <Text _hover={{ color: useColorModeValue('todoBlue.700', 'todoGray.100') }} cursor="pointer">
        Clear Completed
      </Text>
    </Flex>
  );
};

export default Controls;
