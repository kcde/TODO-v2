import React from 'react';
import { Flex, Spacer, Box, Heading } from '@chakra-ui/react';
import ThemeToggle from '../themeToggle';

const Header = () => (
  <Flex alignItems="center" mb="40px">
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
);

export default Header;
