import {
  Box,
  Container,
  Flex,
  useColorModeValue,
  useColorMode,
  useMediaQuery,
} from '@chakra-ui/react';
import bgMobileLight from './assets/bg/bg-mobile-light.jpg';
import bgDesktopLight from './assets/bg/bg-desktop-light.jpg';
import bgMobileDark from './assets/bg/bg-mobile-dark.jpg';
import bgDesktopDark from './assets/bg/bg-desktop-dark.jpg';
import Header from './components/header/header';
import TodoInput from './components/todoInput/todoInput';
import Todos from './components/todos';
import Controls from './components/controls';
import Filters from './components/controls/filters';

import './App.css';

function App() {
  const [isLargerThan992] = useMediaQuery('(min-width: 992px)');
  const { colorMode } = useColorMode();
  const bg = useColorModeValue('todoGray.100', 'todoBlue.700');
  const filtersBg = useColorModeValue('white', 'todoBlue.600');
  const filtersColor = useColorModeValue('todoGray.400', 'todoBlue.400');
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
        <Header />
        <TodoInput />
        <Box borderRadius="md" boxShadow="2xl" style={{ overflow: 'hidden' }}>
          <Todos />
          <Controls />
        </Box>

        {
          //checking if windows is larger than 992px
          !isLargerThan992 ? (
            <Flex
              justifyContent="center"
              pt="15px"
              pb="19px"
              bg={filtersBg}
              borderRadius="md"
              mt="16px"
              color={filtersColor}
            >
              <Filters />
            </Flex>
          ) : null
        }
      </Container>
    </Box>
  );
}

export default App;
