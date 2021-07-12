import Loader, { Props } from 'src/components/Commons/Loader';
import { render, cleanup, screen } from '@testing-library/react';
import { WrapperTemplate } from '../../utils';

const factory = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    show: true,
  };
  
  return (
    <WrapperTemplate>
      <Loader {...defaultProps} {...props}/>
    </WrapperTemplate>
  );
};

describe('<Loader />', () => {

  afterEach(() => cleanup());

  it('should renders a <Loader>', () => {
    const componentRendered = render(factory());
    expect(componentRendered).toBeDefined();
  });

  it('should show loader', () => {
    render(factory());
    const loader = screen.getByTestId('loader-container');
    expect(loader.childElementCount).toBe(1);
  });

  it('should doesn show loader', () => {
    render(factory( { show: false }));
    const loader = screen.getByTestId('loader-container');
    expect(loader.childElementCount).toBe(0);
  });
});