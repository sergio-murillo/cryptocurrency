import { ThemeProvider } from "@emotion/react"
import { Provider } from "react-redux";
import customTheme from 'src/themes/default';

export const WrapperTemplate = ({ children }) => (
  <ThemeProvider theme={customTheme}>
    {children}
  </ThemeProvider>
);

export const WrapperProvider = ({ children, store }) => (
  <Provider store={store}>
    <ThemeProvider theme={customTheme}>
      {children}
    </ThemeProvider>
  </Provider>
);