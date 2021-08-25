import * as React from 'react';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {darkTheme, lightTheme} from './src/themes/theme';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import RootNavigation from './src/navigation/RootNavigation';

export enum SCREENS {
  Home = 'Home',
  Details = 'Details',
}

export type RootStackParamList = {
  [SCREENS.Home]: undefined;
  [SCREENS.Details]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  const scheme = useColorScheme();

  return (
    <RootNavigation />
    // <NavigationContainer theme={scheme === 'dark' ? darkTheme : lightTheme}>
    //   <Stack.Navigator initialRouteName={SCREENS.Home}>
    //     <Stack.Screen
    //       name={SCREENS.Home}
    //       component={HomeScreen}
    //       options={{title: 'Overview'}}
    //     />
    //     <Stack.Screen name={SCREENS.Details} component={DetailsScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;
