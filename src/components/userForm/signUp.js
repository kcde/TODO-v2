import React, { useState } from 'react';
import { auth, db } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {
  Box,
  Text,
  Flex,
  Input,
  Button,
  useColorModeValue,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { FormErrorIcon } from '@chakra-ui/form-control';

import SubmitButton from '../submitButton';

function SignUpForm({ switchForm }) {
  const [showPassword, setShowPassword] = useState(false);

  const formValidation = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid Email';
    }

    if (!values.username) {
      errors.username = 'Required';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 6) {
      errors.password = 'Min of 6 characters';
    }

    return errors;
  };
  const signUpForm = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    validate: formValidation,

    onSubmit: (values) => {
      createUserWithEmailAndPassword(auth, values.email, values.password).then((cred) => {
        const newDoc = doc(db, 'users', cred.user.uid);

        setDoc(newDoc, {
          username: values.username,
          lists: [
            { id: 'as', task: 'clean', completed: false },
            { id: 'sa', task: 'clean', completed: false },
            { id: 'ba', task: 'clean', completed: false },
          ],
        });

        signUpForm.resetForm();
      });
    },
  });

  return (
    <Box>
      <Text align="center" fontSize="lg" mb={{ base: 6, lg: 4 }}>
        Sign up
      </Text>

      <form onSubmit={signUpForm.handleSubmit}>
        <VStack spacing="6" position="relative">
          <FormControl isInvalid={signUpForm.errors.email && signUpForm.touched.email}>
            <FormLabel hidden>email</FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={signUpForm.values.email}
              onChange={signUpForm.handleChange}
              onBlur={signUpForm.handleBlur}
            />
            <FormErrorMessage>
              {' '}
              <FormErrorIcon />
              {signUpForm.errors.email}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={signUpForm.errors.username && signUpForm.touched.username}>
            <FormLabel hidden>username</FormLabel>
            <Input
              type="text"
              name="username"
              placeholder="Username"
              value={signUpForm.values.username}
              onChange={signUpForm.handleChange}
              onBlur={signUpForm.handleBlur}
            />
            <FormErrorMessage>
              {' '}
              <FormErrorIcon />
              {signUpForm.errors.username}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={signUpForm.errors.password && signUpForm.touched.password}>
            <FormLabel hidden>password</FormLabel>
            <InputGroup>
              <Input
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={signUpForm.values.password}
                onChange={signUpForm.handleChange}
                onBlur={signUpForm.handleBlur}
              />
              <InputRightElement w="4.5rem">
                <Button size="xs" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? 'Hide' : 'Show'}{' '}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>
              {' '}
              <FormErrorIcon />
              {signUpForm.errors.password}
            </FormErrorMessage>
          </FormControl>
          <Flex justifyContent="center">
            <SubmitButton type="submit">Create account</SubmitButton>{' '}
            <Text
              position="absolute"
              right="0"
              color={useColorModeValue('todoBlue.700', 'todoBlue.main')}
              cursor="pointer"
              textDecoration="underline"
              fontSize={{ base: 'sm', lg: 'lg' }}
              onClick={switchForm}
            >
              Log In
            </Text>
          </Flex>
        </VStack>
      </form>
    </Box>
  );
}

export default SignUpForm;
