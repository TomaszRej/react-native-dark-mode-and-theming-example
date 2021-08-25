import * as React from 'react';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {darkTheme, lightTheme} from '../themes/theme';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

export enum SCREENS {
  Home = 'Home',
  Details = 'Details',
}

export type RootStackParamList = {
  [SCREENS.Home]: undefined;
  [SCREENS.Details]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? darkTheme : lightTheme}>
      <Stack.Navigator initialRouteName={SCREENS.Home}>
        <Stack.Screen
          name={SCREENS.Home}
          component={HomeScreen}
          options={{title: 'Overview'}}
        />
        <Stack.Screen name={SCREENS.Details} component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
