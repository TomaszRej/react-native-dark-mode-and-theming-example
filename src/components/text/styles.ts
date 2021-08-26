import {StyleSheet} from 'react-native';
import {ITheme} from '../../themes/theme';

export const createStyles = (theme: ITheme) => {
  return StyleSheet.create({
    text: {
      color: theme.colors.text,
      fontSize: theme.fontSize.xl,
    },
  });
};
