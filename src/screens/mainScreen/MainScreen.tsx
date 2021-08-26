import React from 'react';
import {View, Button} from 'react-native';
import Text from '../../components/text/Text';
import ScreenWrapper from '../../components/screenWrapper/ScreenWrapper';
import {useTheme} from '../../themes/theme';
import {createStyles} from './styles';
import {useCreateStyles} from '../../hooks/useCreateStyles';

const MainScreen = () => {
  const {toggleTheme} = useTheme();
  const styles = useCreateStyles(createStyles);

  return (
    <ScreenWrapper>
      <View style={styles.contentWrapper}>
        <Button title="Toggle Theme" onPress={toggleTheme} />
        <Text>Main Screen</Text>
      </View>
    </ScreenWrapper>
  );
};

export default MainScreen;
