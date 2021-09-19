import React, { useState } from 'react';
import { useColorModeValue, Box } from '@chakra-ui/react';
import SignUpForm from './signUp';
import LogInForm from './logIn';

function UserForm() {
  const [loginForm, setLoginForm] = useState(true);
  const bg = useColorModeValue('white', 'todoBlue.600');

  return (
    <Box bg={bg} px={{ base: '20px', lg: '24px' }} py={{ base: '16px', lg: '20px' }}>
      {loginForm ? (
        <LogInForm switchForm={() => setLoginForm(!loginForm)} />
      ) : (
        <SignUpForm switchForm={() => setLoginForm(!loginForm)} />
      )}
    </Box>
  );
}

export default UserForm;
