import React, { useEffect, useState } from 'react';
import Dropdown from 'src/components/Commons/DropDown';
import { PRICE_FILTER_OPTIONS } from 'src/constants/commons';
import { FilterContainer, FilterInput, FilterDropdown } from './style';

interface PropsFromComponent {
  submitText: (text: string) => void;
  submitFilter: (value: { firstFilter: string, secondFilter: string }) => void;
}

type Props = PropsFromComponent;

const priceOptions = PRICE_FILTER_OPTIONS;

const Filter: React.FC<Props> = ({ submitText, submitFilter }) => {

  const [filter, setFilter] = useState({
    firstFilter: '',
    secondFilter: ''
  });

  const [showError, setShowError] = useState(false);

  const sendFilters = (filter: { firstFilter: string, secondFilter: string }) => {
    if (checkIsValidFilter(filter)) {
      submitFilter(filter);
    } else {
      setShowError(true);
    }
  };

  useEffect(() => {
    sendFilters(filter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);
  
  return (
    <FilterContainer>
      <FilterInput
        type="text"
        placeholder="Filtrar por nombre"
        onChange={(e) => submitText(e.target.value)}/>
      <FilterDropdown>
        <Dropdown
          options={priceOptions}
          placeholder="USD inicial"
          submitOptionSelected={(option) => setFilter((before) => ({ ...before, firstFilter: option.value.toString() }))}/>
        <Dropdown
          options={priceOptions}
          placeholder="USD final"
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
