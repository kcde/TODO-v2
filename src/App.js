import { Box, Container, Text, useColorModeValue, useColorMode } from '@chakra-ui/react';
import bgMobileLight from './assets/bg/bg-mobile-light.jpg';
import bgDesktopLight from './assets/bg/bg-desktop-light.jpg';
import bgMobileDark from './assets/bg/bg-mobile-dark.jpg';
import bgDesktopDark from './assets/bg/bg-desktop-dark.jpg';
import Header from './components/header/header';
import './App.css';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('todoGray.100', 'todoBlue.700');
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
      bgColor={bg}
      h="100vh"
      bgImage={{ base: bgImage.mobile, sm: bgImage.desktop }}
      bgRepeat="no-repeat"
      bgSize="100%"
      px="24px"
      pt={{ base: '48px', lg: '70px' }}
    >
      <Container maxW="container.lg" p="0">
        {/* hdgszhdgj */}
        <Header />
        hhfhf
      </Container>
    </Box>
  );
}

export default App;
