import PercentageValue, { Props } from '../../../components/Commons/PercentageValue';
import { render, cleanup, screen } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import customTheme from '../../../themes/default';

const factory = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    value: 0.155
  };
  
  return (
    <ThemeProvider theme={customTheme}>
      <PercentageValue {...defaultProps} {...props}/>
    </ThemeProvider>
  );
};

describe('<PercentageValue />', () => {

  afterEach(() => cleanup());

  it('should renders a <PercentageValue>', () => {
    const componentRendered = render(factory());
    expect(componentRendered).toBeDefined();
  });

  it('should show positive percentage', () => {
    render(factory());
    const percentage = screen.getByTestId('percentage-value');
    expect(percentage).toHaveStyle({ color: '#16C784' });
  });

  it('should show negative percentage', () => {
    render(factory({ value: -0.45 }));
    const percentage = screen.getByTestId('percentage-value');
    expect(percentage).toHaveStyle({ color: '#EA3943' });
  });
});