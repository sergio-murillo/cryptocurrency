import styled from '@emotion/styled';
import { mq } from '@styles/commons';
import { css, Theme, withTheme } from '@emotion/react';

const stylePanel = (props: { theme: Theme }) => {
  const { theme } = props;
  
  return css`
    background-color: ${theme.colors.white};
    box-shadow: 0 2px 4px 0 ${theme.colors.gray_4};
  `;
};

export const PanelContainer = withTheme(styled.div`
  ${stylePanel}
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  ${mq[0]} {
    padding: 20px 10px;
  }
`);
