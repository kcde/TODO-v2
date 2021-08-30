import React from 'react';
import { Box, useColorMode } from '@chakra-ui/react';
import bgMobileLight from '../../assets/bg/bg-mobile-light.jpg';
import bgDesktopLight from '../../assets/bg/bg-desktop-light.jpg';
import bgMobileDark from '../../assets/bg/bg-mobile-dark.jpg';
import bgDesktopDark from '../../assets/bg/bg-desktop-dark.jpg';

const Banner = () => {
  const { colorMode, setColorMode } = useColorMode();
  const backgroundImageSelector = (colorMode) => {
    switch (colorMode) {
      case 'light':
        return {
          desktop: bgDesktopLight,
          mobile: bgMobileLight,
        };
      case 'dark':
        return {
          desktop: bgDesktopDark,
          mobile: bgMobileDark,
        };
      default:
        return {
          desktop: bgDesktopLight,
          mobile: bgMobileLight,
        };
    }
  };
  const bgImage = backgroundImageSelector(colorMode);
  return (
    <Box
      h={{ base: '200px', sm: '300px' }}
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgImage={{ base: bgImage.mobile, sm: bgImage.desktop }}
    ></Box>
  );
};

export default Banner;
