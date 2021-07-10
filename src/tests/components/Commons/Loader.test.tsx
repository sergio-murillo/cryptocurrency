import Loader, { Props } from '../../../components/Commons/Loader';
import { render, cleanup, screen } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import customTheme from '../../../themes/default';

const factory = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    show: false,
  };
  
  return (
    <ThemeProvider theme={customTheme}>
      <Loader {...defaultProps} {...props}/>
    </ThemeProvider>
  );
};

describe('<Loader />', () => {

  afterEach(() => cleanup());

  it('should renders a <Loader>', () => {
    const componentRendered = render(factory());
    expect(componentRendered).toBeDefined();
  });

  it('should show loader', () => {
    render(factory({ show: true }));
    const loader = screen.getByTestId('loader-container');
    expect(loader.childElementCount).toBe(1);
  });

  it('should doesn show loader', () => {
    render(factory());
    const loader = screen.getByTestId('loader-container');
    expect(loader.childElementCount).toBe(0);
  });
});