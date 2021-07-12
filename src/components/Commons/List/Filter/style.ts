import { flex, mq } from 'src/styles/commons';
import { css, Theme, withTheme } from '@emotion/react';
import styled from '@emotion/styled';

const styleBorderContainer = (props: { theme: Theme }) => {
  const { theme } = props;
  
  return css`
  border-bottom: ${theme.borders.normal} solid ${theme.colors.gray_3};
  `;
};

const styleFilterError = (props: { theme: Theme }) => {
  const { theme } = props;
  
  return css`
    font-size: ${theme.fontSizes.xs};
    font-weight: ${theme.fontWeights.semibold};
    color: ${theme.colors.red};
  `;
};

export const FilterContainer = withTheme(styled.div`
${styleBorderContainer}
`);

export const FilterForm = styled.div`
  ${flex('flex-start', 'row', 'space-between')}
  padding-bottom: 15px;
  ${mq[0]} {
    flex-direction: column;
    align-items: center;
  }
`;

export const FilterInput = styled.input`
  width: auto;
  ${mq[0]} {
    width: 100%;
  }
`;

export const FilterDropdown = styled.div`
  ${flex('stretch', 'row')}
  ${mq[0]} {
    width: 100%;
    flex-direction: column;
  }
`;

export const FilterError = withTheme(styled.div`
  ${styleFilterError}
  text-align: right;
  padding-right: 15px;
`);