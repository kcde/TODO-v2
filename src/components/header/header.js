import React from 'react';
import { Flex, Spacer, Heading, Box, Text } from '@chakra-ui/react';
import ThemeToggle from '../themeToggle';

const Header = (props) => {
  return (
    <Box mb="40px">
      <Flex alignItems="center">
        <Heading
          as="h1"
          textColor="todoGray.100"
          fontWeight="700"
          letterSpacing="15px"
          fontSize={{ base: '20px', lg: '43px' }}
        >
          TODO
        </Heading>
        <Spacer />
        <ThemeToggle />
      </Flex>

      {props.isAuth ? (
        <Flex onClick={props.signOut} cursor="pointer">
          <Spacer />
          <Text fontSize={10}>LOGOUT</Text>
        </Flex>
      ) : null}
    </Box>
  );
};

export default Header;
