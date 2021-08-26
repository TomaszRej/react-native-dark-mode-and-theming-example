import {StyleSheet} from 'react-native';
import {ITheme} from '../../themes/theme';

export const createStyles = (theme: ITheme) => {
  return StyleSheet.create({
    wrapper: {
      backgroundColor: theme.colors.background,
      flex: 1,
    },
  });
};
