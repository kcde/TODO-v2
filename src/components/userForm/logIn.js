import React from 'react';
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
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { FormErrorIcon } from '@chakra-ui/form-control';
import SubmitButton from '../submitButton';

function LogInForm() {
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
      formik.resetForm();
    },
  });
  return (
    <Box>
      <Text align="center" fontSize="lg" mb={{ base: 6, lg: 4 }}>
        Log In
      </Text>
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
