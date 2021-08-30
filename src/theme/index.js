import { extendTheme } from '@chakra-ui/react';
import fonts from './fonts';
import colors from './colors';

const overrides = {
  fonts,
  colors,
};

const theme = extendTheme(overrides);

export default theme;
