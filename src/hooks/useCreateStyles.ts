import {useMemo} from 'react';
import {useTheme} from '@react-navigation/native';
import {ITheme} from '../themes/theme';

type TCreateStyles<T> = (theme: ITheme) => T;

const useCreateStyles = <T>(createStyles: TCreateStyles<T>) => {
  const theme = useTheme() as ITheme;

  return useMemo(() => createStyles(theme), [createStyles, theme]);
};

export {useCreateStyles};
