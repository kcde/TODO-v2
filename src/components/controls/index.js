import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Flex, Text, Spacer, useColorModeValue, useMediaQuery } from '@chakra-ui/react';
import * as actions from '../../store/actions';
import Filters from './filters';

const Controls = () => {
  const [isLargerThan992] = useMediaQuery('(min-width: 992px)');
  const todos = useSelector((state) => state.TodoList);
  const dispatch = useDispatch();

  return (
    <Flex
      bg={useColorModeValue('white', 'todoBlue.600')}
      px={{ base: '20px', lg: '24px' }}
      pt="16px"
      pb="20px"
      fontSize={{ base: '12px', lg: '14px' }}
      color={useColorModeValue('todoGray.400', 'todoBlue.400')}
    >
      <Text>{todos.filter((todo) => !todo.completed).length} item(s) left</Text>
      <Spacer />
      {isLargerThan992 ? <Filters /> : null}
      <Spacer />

      <Text
        _hover={{ color: useColorModeValue('todoBlue.700', 'todoGray.100') }}
        cursor="pointer"
        onClick={() => dispatch(actions.clear_completed())}
      >
        Clear Completed
      </Text>
    </Flex>
  );
};

export default Controls;
