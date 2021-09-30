import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { set_user_id, set_todo } from './store/actions';
import { auth, db } from './firebase';
import {
  Box,
  Container,
  Text,
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
import UserForm from './components/userForm';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const [isLargerThan992] = useMediaQuery('(min-width: 992px)');
  const { colorMode } = useColorMode();
  const bg = useColorModeValue('todoGray.100', 'todoBlue.700');
  const filtersBg = useColorModeValue('white', 'todoBlue.600');
  const filtersColor = useColorModeValue('todoGray.400', 'todoBlue.400');
  const authUser = useSelector((state) => state.authId);
  //! test
  const [isAuth, setIsAuth] = useState(false);
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
  const signOutUser = () => {
    signOut(auth).then(() => {
      setIsAuth(false);
    });
  };

  //check if a user is logged in
  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (!isAuth) {
          setIsAuth(true);
          dispatch(set_user_id(user.uid));
        }
      } else {
        setIsAuth(false);
        dispatch(set_user_id());
      }
    });

    return () => {
      unsubscibe();
    };
  }, [isAuth, dispatch]);

  // get user's data
  useEffect(() => {
    const getData = async () => {
      if (authUser) {
        onSnapshot(doc(db, 'users', authUser), (doc) => {
          dispatch(set_todo(doc.data().lists));
        });
      } else {
        dispatch(set_todo([]));
      }
    };
    getData();
  }, [authUser, dispatch]);

  return (
    <Box
      bgColor={bg}
      minHeight="100vh"
      overflow="scroll"
      bgImage={{ base: bgImage.mobile, sm: bgImage.desktop }}
      bgRepeat="no-repeat"
      bgSize="100%"
      px="24px"
      pt={{ base: '48px', lg: '70px' }}
    >
      <Container maxW="container.lg" p="0">
        <Header signOut={() => signOutUser()} isAuth={isAuth} />
        <TodoInput disableInput={isAuth} />
        <Box borderRadius="md" boxShadow="2xl" style={{ overflow: 'hidden' }}>
          {/* if authenticated show todos and controls else sign on */}
          {isAuth ? (
            <>
              <Todos />
              <Controls />
            </>
          ) : (
            <UserForm />
          )}
        </Box>

        {
          //checking if windows is larger than 992px
          !isLargerThan992 && auth ? (
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

        <Text
          color={useColorModeValue('todoGray.400', 'todoBlue.400')}
          mt={{ base: '40px', lg: '49px' }}
          align="center"
        >
          Drag and drop to reorder list
        </Text>
      </Container>
    </Box>
  );
}

export default App;
