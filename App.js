/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Homescreen from './src/pages/homescreen';
import About from './src/pages/about';

import LoadsheddingStatus from './src/components/getStatus';
import Heading from './src/components/heading';
import Footer from './src/components/footer';

// const App: () => React$Node = () => {
//   return (
//     <>
//           <View style={styles.status}>
//           <Heading />
//             <LoadsheddingStatus />
//             <Footer />
//           </View>
//     </>
//   );
// };

const AppStack = createStackNavigator({ Home: Homescreen, viewStatus:LoadsheddingStatus, about:About });
// const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(createSwitchNavigator(
  {
    // AuthLoading: AuthLoadingScreen,
    App: AppStack,
    // Auth: AuthStack,
  }
  // {
    // initialRouteName: 'AuthLoading',
  // }
));

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
  status: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  }


});


