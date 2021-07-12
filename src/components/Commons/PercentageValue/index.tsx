import { memo, FC } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useTheme } from '@emotion/react';
import { PercentageValueType } from './styles';

/**
 * Properties from component
 */
interface PropsFromComponent {
  /**
   * Percentaje value
   * @type {number}
   */
  value: number;
}

export type Props = PropsFromComponent;

/**
 * Show positive or negative percentage
 */
export const PercentageValue: FC<Props> = ({ value }) => {
  const theme = useTheme();

  if (value > 0) {
    return (
      <PercentageValueType
        data-testid="percentage-value"
        color={theme.colors.green}><FaChevronUp />{value}%</PercentageValueType>
      );
  }

  return (
    <PercentageValueType
      data-testid="percentage-value"
      color={theme.colors.red}><FaChevronDown />{value}%</PercentageValueType>
  );
};


export default memo(PercentageValue);
