import React from 'react';
import styled from '@emotion/styled';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { css, Theme, useTheme, withTheme } from '@emotion/react';

interface PropsFromComponent {
  value: number;
}

type Props = PropsFromComponent;

const stylePercentageValue = (props: { color: string, theme: Theme }) => {
  const { color, theme } = props;
  
  return css`
    color: ${color};
    font-weight: ${theme.fontWeights.semibold};
  `;
};

const PercentageValueType = withTheme(styled.span`
  ${stylePercentageValue}
`);

const PercentageValue: React.FC<Props> = ({ value }) => {
  const theme = useTheme();

  if (value > 0) {
    return (
      <PercentageValueType
        color={theme.colors.green}><FaChevronUp />{value}%</PercentageValueType>
      );
  }

  return (
    <PercentageValueType
      color={theme.colors.red}><FaChevronDown />{value}%</PercentageValueType>
  );
};

export default PercentageValue;
