import { Box, Button, Text, useColorModeValue, useColorMode } from '@chakra-ui/react';
import Banner from './components/ui/banner';
import './App.css';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('todoGray.100', 'todoBlue.700');

  return (
    <Box bg={bg} h="100vh">
      <Banner />
      <Text onClick={toggleColorMode}>TODO v2</Text>;
    </Box>
  );
}

export default App;
