import React from 'react';
import { Box } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Todo from './todo';

const Todos = () => {
  const todos = useSelector((state) => state.TodoList);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const todoFilter = (filter) => {
    switch (filter) {
      case 'ALL':
        return todos;
      case 'ACTIVE':
        return todos.filter((todo) => !todo.completed);
      case 'COMPLETED':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const onDragHandler = (result) => {
    if (!result.destination) return;
    const todosCopy = [...todos];
    const [reorderedItem] = todosCopy.splice(result.source.index, 1);
    todosCopy.splice(result.destination.index, 0, reorderedItem);
    dispatch(actions.update_list_order(todosCopy));
  };
  return (
    <DragDropContext onDragEnd={onDragHandler}>
      <Droppable droppableId="todos">
        {(provided) => (
          <Box ref={provided.innerRef} {...provided.droppableProps}>
            {todoFilter(filter).map((todo, index) => (
              <Draggable key={todo.id} draggableId={todo.id} index={index}>
                {(provided) => (
                  <Todo
                    task={todo}
                    propsdraggable={provided.draggableProps}
                    propsdraghandle={provided.dragHandleProps}
                    ref={provided.innerRef}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Todos;
