import React, {FC} from 'react';
import {Text as RNText, TextProps} from 'react-native';
import {createStyles} from './styles';
import {useCreateStyles} from '../../hooks/useCreateStyles';

interface IProps extends TextProps {}

const Text: FC<IProps> = props => {
  const styles = useCreateStyles(createStyles);

  return <RNText style={styles.text} {...props} />;
};

export default Text;
