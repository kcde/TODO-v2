import { extendTheme } from '@chakra-ui/react';
import fonts from './fonts';
import colors from './colors';
import sizes from './sizes';

const overrides = {
  fonts,
  colors,
  sizes,
};

const theme = extendTheme(overrides);

export default theme;
