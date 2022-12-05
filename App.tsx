/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Provider as PaperProvider, TextInput } from 'react-native-paper';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { LoginScreen } from './app/screens/login/login.screen';
import { theme } from './App.style';
import HomeScreen from './app/screens/home/home.screen';
import { RegisterScreen } from './app/screens/register/register.screen';

const App = () => {
  return (
    <PaperProvider theme = {theme}>
      <RegisterScreen/>
    </PaperProvider>
  );
};

export default App;