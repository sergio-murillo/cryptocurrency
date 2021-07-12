import PercentageValue, { Props } from 'src/components/Commons/PercentageValue';
import { render, cleanup, screen } from '@testing-library/react';
import { WrapperTemplate } from '../../utils';

const factory = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    value: 0.155
  };
  
  return (
    <WrapperTemplate>
      <PercentageValue {...defaultProps} {...props}/>
    </WrapperTemplate>
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