import React from 'react';
import { useColorModeValue, Box } from '@chakra-ui/react';
import SignUpForm from './signUp';
import LogInForm from './logIn';

function UserForm() {
  const bg = useColorModeValue('white', 'todoBlue.600');

  return (
    <Box bg={bg} px={{ base: '20px', lg: '24px' }} py={{ base: '16px', lg: '20px' }}>
      {/* <SignUpForm /> */}
      <LogInForm />
    </Box>
  );
}

export default UserForm;
