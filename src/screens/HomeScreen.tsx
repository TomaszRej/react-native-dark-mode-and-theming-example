import * as React from 'react';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import ScreenWrapper from '../components/screenWrapper/ScreenWrapper';
import Text from '../components/text/Text';
import {RootStackParamList} from '../../App';
import {SCREENS} from '../../App';
import {StackNavigationProp} from '@react-navigation/stack';

type NavigationScreenProp = StackNavigationProp<
  RootStackParamList,
  SCREENS.Home
>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationScreenProp>();

  return (
    <ScreenWrapper>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate(SCREENS.Details)}
      />
    </ScreenWrapper>
  );
};

export default HomeScreen;
