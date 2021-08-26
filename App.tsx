import * as React from 'react';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from './src/themes/theme';
import {lightTheme, darkTheme} from './src/themes/theme';
import MainScreen from './src/screens/mainScreen/MainScreen';

const App = () => {
  const scheme = useColorScheme();

  return (
    <ThemeProvider currentTheme={scheme === 'dark' ? darkTheme : lightTheme}>
      <MainScreen />
    </ThemeProvider>
  );
};

export default App;
