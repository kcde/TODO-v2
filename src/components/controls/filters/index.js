import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../../store/actions';
import { Text, Stack, useColorModeValue } from '@chakra-ui/react';

const Filters = () => {
  const [activeId, setActiveId] = useState(0);
  const dispatch = useDispatch();
  const textColor = useColorModeValue('todoBlue.700', 'todoGray.100');
  const clickHandler = (id) => {
    setActiveId(id);
    // run function attached to selected filter
    filtersArray.map((filter) => (filter.id === id ? filter.action() : null));
  };
  const filtersArray = [
    {
      id: 0,
      name: 'all',
      action: () => {
        dispatch(actions.filter_all());
      },
    },
    {
      id: 1,
      name: 'active',
      action: () => {
        dispatch(actions.filter_active());
      },
    },
    {
      id: 2,
      name: 'completed',
      action: () => {
        dispatch(actions.filter_completed());
      },
    },
  ];

  return (
    <Stack direction="row" spacing="18px">
      {filtersArray.map((filter) => (
        <Text
          key={filter.id}
          textTransform="capitalize"
          fontWeight="700"
          fontSize="14px"
          cursor="pointer"
          _hover={{ color: filter.id !== activeId ? textColor : null }}
          onClick={() => clickHandler(filter.id)}
          color={activeId === filter.id ? 'todoBlue.main' : 'inherit'}
        >
          {filter.name}
        </Text>
      ))}
    </Stack>
  );
};

export default Filters;
