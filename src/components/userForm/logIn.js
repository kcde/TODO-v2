import React, { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

import {
  Box,
  Text,
  Input,
  Flex,
  VStack,
  useColorModeValue,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Alert,
  AlertIcon,
  AlertDescription,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { FormErrorIcon } from '@chakra-ui/form-control';
import SubmitButton from '../submitButton';

function LogInForm({ switchForm }) {
  const [formError, setFormError] = useState('');

  const formErrorColor = useColorModeValue('red.500', 'red.200');

  const setError = (errorCode) => {
    switch (errorCode) {
      case 'auth/wrong-password':
        setFormError('Incorrect password');
        break;
      case 'auth/user-not-found':
        setFormError('User not found');
        break;
      case 'auth/network-request-failed':
        setFormError('Network request failed');
        break;
      default:
        setFormError('something went wrong');
    }
  };
  const formValidation = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid Email';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 6) {
      errors.password = 'Min of 6 characters';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: formValidation,
    onSubmit: (values) => {
      signInWithEmailAndPassword(auth, values.email, values.password).catch((err) => {
        setError(err.code);
      });
    },
  });
  return (
    <Box>
      <Text align="center" fontSize="lg" mb={{ base: 6, lg: 4 }}>
        Log In
      </Text>

      {formError ? (
        <Alert status="error" mb={4} borderRadius="5px">
          <AlertIcon />
          <AlertDescription color={formErrorColor}>{formError}</AlertDescription>
        </Alert>
      ) : null}
      <form onSubmit={formik.handleSubmit}>
        <VStack spacing={6} position="relative">
          {' '}
          <FormControl isInvalid={formik.errors.email && formik.touched.email}>
            <FormLabel hidden>Email</FormLabel>
            <Input
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Email"
              value={formik.values.email}
            />
            <FormErrorMessage>
              <FormErrorIcon />
              {formik.errors.email}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={formik.errors.password && formik.touched.password}>
            <Input
              type="password"
              name="password"
              value={formik.values.password || ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Password"
            />
            <FormErrorMessage>
              <FormErrorIcon />
              {formik.errors.password}
            </FormErrorMessage>
          </FormControl>
          <Flex justifyContent="center">
            <SubmitButton type="submit">Log In</SubmitButton>
            <Text
              position="absolute"
              right="0"
              color={useColorModeValue('todoBlue.700', 'todoBlue.main')}
              cursor="pointer"
              textDecoration="underline"
              fontSize={{ base: 'sm', lg: 'lg' }}
              onClick={switchForm}
            >
              Create account
            </Text>
          </Flex>
        </VStack>
      </form>
    </Box>
  );
}

export default LogInForm;
