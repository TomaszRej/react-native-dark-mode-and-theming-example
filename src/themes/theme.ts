import {DarkTheme} from '@react-navigation/native';

export interface ITheme {
  dark: boolean;
  fontSize: {
    small: number;
    medium: number;
    large: number;
  };
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
  };
}

const baseTheme = {
  fontSize: {
    small: 10,
    medium: 16,
    large: 40,
  },
};

const lightTheme: ITheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
  ...baseTheme,
};

const darkTheme: ITheme = {
  ...DarkTheme,
  ...baseTheme,
};

export {lightTheme, darkTheme};
