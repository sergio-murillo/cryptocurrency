import React from 'react';
import Dropdown from '@components/Commons/DropDown';
import { FilterContainer, FilterInput, FilterDropdown } from './style';

const Filter: React.FC = () => {
  return (
    <FilterContainer>
      <FilterInput
        type="text"
        placeholder="Filtrar por nombre"
        onChange={() => search()}/>
      <FilterDropdown>
        <Dropdown/>
        <Dropdown/>
      </FilterDropdown>
    </FilterContainer>
  );
};

const search = () => {};

export default Filter;
