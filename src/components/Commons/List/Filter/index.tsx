import { useEffect, useState, FC } from 'react';
import Dropdown from 'src/components/Commons/DropDown';
import { PRICE_FILTER_OPTIONS } from 'src/constants/commons';
import { FilterContainer, FilterInput, FilterDropdown } from './style';

/**
 * Filter range
 */
export interface FilterRange {
  /**
   * Fist value to filter
   * @type {string}
   */
  firstFilter: string;
  /**
   * Second value to filter
   * @type {string}
   */
  secondFilter: string;
}

/**
 * Properties from component
 */
interface PropsFromComponent {
  /**
   * Called when typing on input text
   * @param {string} text Text typed
   */
  submitText: (text: string) => void;
  /**
   * Called when select a range to filter
   * @param {FilterRange} value Range filter
   */
  submitFilter: (value: FilterRange) => void;
}

export type Props = PropsFromComponent;

const priceOptions = PRICE_FILTER_OPTIONS;

/**
 * Filter from input and dropdowns
 */
export const Filter: FC<Props> = ({ submitText, submitFilter }) => {

  const [filter, setFilter] = useState({
    firstFilter: '',
    secondFilter: ''
  });

  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (checkIsValidFilter(filter)) {
      submitFilter(filter);
    } else {
      setShowError(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);
  
  return (
    <FilterContainer>
      <FilterInput
        data-testid="filter-input"
        type="text"
        placeholder="Filtrar por nombre"
        onChange={(e) => submitText(e.target.value)}/>
      <FilterDropdown>
        <Dropdown
          options={priceOptions}
          placeholder="Precio inicial"
          submitOptionSelected={(option) => setFilter((before) => ({ ...before, firstFilter: option.value.toString() }))}/>
        <Dropdown
          options={priceOptions}
          placeholder="Precio final"
          submitOptionSelected={(option) => setFilter((before) => ({ ...before, secondFilter: option.value.toString() }))}/>
      </FilterDropdown>
      { showError && <span>Error</span> }
    </FilterContainer>
  );
};

const checkIsValidFilter = ({ firstFilter, secondFilter }): boolean => {
  return !(firstFilter && secondFilter && firstFilter > secondFilter);
};

export default Filter;
