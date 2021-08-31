import React from 'react';
import { Box, useColorMode } from '@chakra-ui/react';

import MoonIcon from './moonIcon';
import SunIcon from './sunIcon';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightMode = colorMode === 'light';
  return <Box onClick={toggleColorMode}>{isLightMode ? <MoonIcon /> : <SunIcon />}</Box>;
};

export default ThemeToggle;
