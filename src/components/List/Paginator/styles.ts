import { flex } from '@styles/commons';
import { css, Theme, withTheme } from '@emotion/react';
import styled from '@emotion/styled';

const stylePaginatorNumber = (props: { activated?: boolean, theme: Theme }) => {
  const { theme: { colors } } = props;
  
  return css`
    background-color: ${props.activated && colors.blue_1};
    color: ${props.activated ? colors.white : colors.dark_black};
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
