import Image, { Props } from 'src/components/Commons/Image';
import { render, cleanup, screen, fireEvent, RenderResult } from '@testing-library/react';
import { WrapperTemplate } from '../../utils';

const factory = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    src: '/images/money.png',
    alt: 'Loreim'
  };
  
  return (
    <WrapperTemplate>
      <Image {...defaultProps} {...props}/>
    </WrapperTemplate>
  );
};

describe('<Image />', () => {

  let componentRendered: RenderResult;
  
  beforeEach(() => {
    componentRendered = render(factory());
  });
  
  afterEach(() => cleanup());

  it('should renders a <Image>', () => {
    expect(componentRendered).toBeDefined();
  });

  it('should show original image', () => {
    const image = screen.getByTestId('image');
    expect(image).toHaveAttribute('src', '/images/money.png');
    expect(image).toHaveAttribute('alt', 'Loreim');
  });

  it('should doesnt show original image', () => {
    const image = screen.getByTestId('image');
    fireEvent.error(image);
    const imageNoExists = screen.queryByTestId('image');
    expect(imageNoExists).toBeNull();
  });
});