import React from 'react';
import { Button } from '@chakra-ui/react';

const SubmitButton = (props) => {
  return (
    <Button
      onClick={props.submit}
      bgGradient="linear(to-l, todoGradient.pink,todoGradient.blue)"
      _hover={{ bgGradient: 'linear(to-l, todoGradient.blue,todoGradient.pink)' }}
      color="todoGray.100"
      type={props.type}
    >
      {props.children}
    </Button>
  );
};

export default SubmitButton;
