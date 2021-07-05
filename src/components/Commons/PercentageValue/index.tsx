import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useTheme } from '@emotion/react';
import { PercentageValueType } from './styles';

interface PropsFromComponent {
  value: number;
}

type Props = PropsFromComponent;

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
