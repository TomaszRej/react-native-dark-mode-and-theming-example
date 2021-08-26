import React, {FC} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {useCreateStyles} from '../../hooks/useCreateStyles';
import {createStyles} from './styles';
import {ThemeMode, useTheme} from '../../themes/theme';

interface IProps {
  children: React.ReactNode;
}

const ScreenWrapper: FC<IProps> = ({children}) => {
  const {theme} = useTheme();
  const styles = useCreateStyles(createStyles);

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar
        backgroundColor="blue"
        barStyle={
          theme.mode === ThemeMode.light ? 'dark-content' : 'light-content'
        }
      />
      {children}
    </SafeAreaView>
  );
};

export default ScreenWrapper;
