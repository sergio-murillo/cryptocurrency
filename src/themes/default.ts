type Breakpoints = { sm: number; md: number; lg: number; xl: number };

interface Borders {
  none: string;
  normal: string;
}

interface FontWeights {
  normal: number;
  medium: number;
  semibold: number;
  bold: number;
}

interface FontSizes {
  xs: string;
  sm: string;
  md: string;
  lg: string;
}

interface Colors {
  black: string;
  red: string;
  green: string;
  white: string;
  dark_black: string;
  gray_1: string;
  gray_2: string;
  gray_3: string;
  gray_4: string;
  blue_1: string;
  blue_2: string;
  thead: string;
}

interface Fonts {
  heading: string;
  body: string;
}

interface Typography {
  fontWeights: FontWeights;
  fonts: Fonts;
  fontSizes: FontSizes;
}

export interface DefaultTheme extends Typography {
  breakpoints: Breakpoints;
  borders: Borders;
  colors: Colors;
}

const customTheme: DefaultTheme = {
  colors: {
    red: '#EA3943',
    green: '#16C784',
    black: '#1D1D1F',
    dark_black: '#000',
    white: '#FFF',
    gray_1: '#FAFAFA',
    gray_2: '#E9E9EA',
    gray_3: '#EFF2F5',
    gray_4: '#DFE2E7',
    blue_1: '#3B5998',
    blue_2: '#D6E3FF',
    thead: 'rgba(56,56,56,.87)'
  },
  breakpoints: {
    sm: 360,
    md: 768,
    lg: 1024,
    xl: 1280
  },
  borders: {
    none: '0',
    normal: '1px'
  },
  fonts: {
    heading: 'Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif',
    body: 'Lato, Helvetica Neue, Helvetica, Arial, sans-serif'
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '20px',
    lg: '28px'
  },
  fontWeights: {
    normal: 0,
    medium: 500,
    semibold: 600,
    bold: 700
  }
};

export default customTheme;
