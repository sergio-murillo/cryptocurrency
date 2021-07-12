import { flex } from 'src/styles/commons';
import { css, Theme, withTheme } from '@emotion/react';
import styled from '@emotion/styled';

const stylePaginatorNumber = (props: { selected?: boolean, theme: Theme }) => {
  const { theme: { colors } } = props;
  
  return css`
    background-color: ${props.selected && colors.blue_1};
    color: ${props.selected ? colors.white : colors.dark_black};
    &:hover {
      background-color: ${colors.blue_2};
    }
  `;
};

export const PaginatorIcon = styled.span`
  cursor: pointer
`;

export const PaginatorContainer = styled.div`
  ${flex('center', 'row', 'center')}
`;

export const PaginatorNumber = withTheme(styled.div`
  ${stylePaginatorNumber}
  padding: 12px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
`);

export const PaginatorActionContainer = styled.div``;