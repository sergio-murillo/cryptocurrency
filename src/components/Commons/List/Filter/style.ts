import { flex, mq } from 'src/styles/commons';
import { css, Theme, withTheme } from '@emotion/react';
import styled from '@emotion/styled';

const styleBorderContainer = (props: { theme: Theme }) => {
  const { theme } = props;
  
  return css`
  border-bottom: ${theme.borders.normal} solid ${theme.colors.gray_3};
  `;
};

export const FilterContainer = withTheme(styled.div`
  ${styleBorderContainer}
  ${flex('flex-start', 'row', 'space-between')}
  padding-bottom: 15px;
  ${mq[0]} {
    flex-direction: column;
    align-items: center;
  }
`);

export const FilterInput = styled.input`
  width: auto;
  ${mq[0]} {
    width: 100%;
  }
`;

export const FilterDropdown = styled.div`
  ${flex('stretch', 'row')}
  ${mq[0]} {
    flex-direction: column;
  }
`;
