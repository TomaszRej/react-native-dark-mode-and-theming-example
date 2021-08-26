import {useMemo} from 'react';
import {useTheme} from '../themes/theme';
import {ITheme} from '../themes/theme';

type TCreateStyles<T> = (theme: ITheme) => T;

const useCreateStyles = <T>(createStyles: TCreateStyles<T>) => {
  const {theme} = useTheme();

  return useMemo(() => createStyles(theme), [createStyles, theme]);
};

export {useCreateStyles};
