/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';

import { Provider as PaperProvider, TextInput } from 'react-native-paper';

import { LoginScreen } from './app/screens/login/login.screen';
import { theme } from './App.style';
import HomeScreen from './app/screens/home/home.screen';
import { RegisterScreen } from './app/screens/register/register.screen';
import LateLessNavigator from './app/app.navigator';
import { EventCreationScreen } from './app/screens/eventCreation/eventCreation.screen';

const App = () => {
  return (
    //hello
    <PaperProvider theme = {theme}>
      <LateLessNavigator />
    </PaperProvider>
  );
};

export default App;