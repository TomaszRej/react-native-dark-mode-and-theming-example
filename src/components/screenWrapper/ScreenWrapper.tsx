import React, {FC} from 'react';
import {View, ViewProps} from 'react-native';
import {useCreateStyles} from '../../hooks/useCreateStyles';
import {createStyles} from './styles';

interface IProps extends ViewProps {}

const ScreenWrapper: FC<IProps> = ({children}) => {
  const styles = useCreateStyles(createStyles);

  return <View style={styles.wrapper}>{children}</View>;
};

export default ScreenWrapper;
