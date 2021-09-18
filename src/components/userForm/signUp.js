import React from 'react';
import { Box, Text, Input } from '@chakra-ui/react';
import SubmitButton from '../submitButton';

function SignUpForm() {
  return (
    <Box>
      <Text align="center" fontSize="lg" mb={{ base: 6, lg: 4 }}>
        Sign up
      </Text>

      <form>
        <Input type="email" _focus={{ borderColor: 'todoBlue.main' }} placeholder="Email" />
        <Input type="text" _focus={{ borderColor: 'todoBlue.main' }} placeholder="Username" />
        <Input type="password" _focus={{ borderColor: 'todoBlue.main' }} placeholder="Password" />
        <SubmitButton>Create account</SubmitButton>{' '}
      </form>
    </Box>
  );
}

export default SignUpForm;
