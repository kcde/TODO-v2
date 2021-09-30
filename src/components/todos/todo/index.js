import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Flex, Text, Box, useColorModeValue, Spacer } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import TodoCheck from './todoCheck';
import { remove_todo, complete_todo } from '../../../store/reducers/TodoReducer';

const Todo = React.forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.authId);
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
      {...props.propsdraghandle}
      {...props.propsdraggable}
      ref={ref}
    >
      <Box
        pr={{ base: '12px', lg: '24px' }}
        onClick={props.task.completed ? null : () => dispatch(complete_todo(props.task.id, userId))}
      >
        <TodoCheck checked={props.task.completed} />
      </Box>
      <Text
        color={props.task.completed ? completedColor : color}
        fontSize={{ base: '12px', lg: '18px' }}
        as={props.task.completed ? 's' : null}
      >
        {props.task.task}
      </Text>
      <Spacer />
      {hover ? (
        <CloseIcon
          color={closeIconColor}
          alignSelf="center"
          onClick={() => dispatch(remove_todo(props.task.id, userId))}
          cursor="initial"
        />
      ) : null}
    </Flex>
  );
});

export default Todo;
