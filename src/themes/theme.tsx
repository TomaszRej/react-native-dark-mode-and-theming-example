import React, {
  useState,
  useContext,
  useMemo,
  useCallback,
  createContext,
  FC,
} from 'react';

export enum ThemeMode {
  dark = 'dark',
  light = 'light',
}

export interface ITheme {
  mode: ThemeMode;
  colors: {
    primary: string;
    background: string;
    text: string;
  };
  fontSize: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  spacing: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
}

const baseTheme = {
  fontSize: {
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
  },
  spacing: {
    sm: 2,
    md: 4,
    lg: 6,
    xl: 8,
  },
};

export const lightTheme: ITheme = {
  mode: ThemeMode.light,
  colors: {
    primary: 'green',
    background: 'white',
    text: 'black',
  },
  ...baseTheme,
};

export const darkTheme: ITheme = {
  mode: ThemeMode.dark,
  colors: {
    primary: 'green',
    background: 'black',
    text: 'white',
  },
  ...baseTheme,
};

interface IDefaultValues {
  theme: ITheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<IDefaultValues>({
  theme: lightTheme,
  toggleTheme: () => {
    console.log('ThemeProvider is not rendered!');
  },
});

export interface IProps {
  currentTheme: ITheme;
  children?: React.ReactNode;
}

export const ThemeProvider: FC<IProps> = ({currentTheme, children}) => {
  const [theme, setTheme] = useState<ITheme>(currentTheme);

  const toggleThemeCallback = useCallback(() => {
    setTheme(currTheme => {
      if (currTheme.mode === ThemeMode.dark) {
        return lightTheme;
      }
      if (currTheme.mode === ThemeMode.light) {
        return darkTheme;
      }
      return currTheme;
    });
  }, []);

  const memoizedValue = useMemo(() => {
    const value: IDefaultValues = {
      theme,
      toggleTheme: toggleThemeCallback,
    };
    return value;
  }, [theme, toggleThemeCallback]);

  return (
    <ThemeContext.Provider value={memoizedValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
