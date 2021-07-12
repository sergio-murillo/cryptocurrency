import Panel, { Props } from 'src/components/Commons/Panel';
import { render, cleanup, screen } from '@testing-library/react';
import { WrapperTemplate } from '../../utils';

const factory = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    title: 'Loreim'
  };
  
  return (
    <WrapperTemplate>
      <Panel {...defaultProps} {...props}/>
    </WrapperTemplate>
  );
};

describe('<Panel />', () => {

  afterEach(() => cleanup());

  it('should renders a <Panel>', () => {
    const componentRendered = render(factory());
    expect(componentRendered).toBeDefined();
  });

  it('should show title', () => {
    render(factory());
    const title = screen.getByText('Loreim');
    expect(title).toBeInTheDocument();
  });

  it('should doesnt show title', () => {
    render(factory({ title: undefined }));
    const title = screen.queryByText('Loreim');
    expect(title).toBeNull();
  });
});