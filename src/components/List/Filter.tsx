import React from 'react';
import styled from '@emotion/styled';
import Dropdown from '../DropDown';
import { flex, mq } from '../../styles/commons';
import { css, Theme, withTheme } from '@emotion/react';

const styleBorderContainer = (props: { theme: Theme }) => {
  const { theme } = props;
  
  return css`
  border-bottom: ${theme.borders.normal} solid ${theme.colors.gray_3};
  `;
};

const FilterContainer = withTheme(styled.div`
  ${styleBorderContainer}
  ${flex('flex-start', 'row', 'space-between')}
  padding-bottom: 15px;
  ${mq[0]} {
    flex-direction: column;
    align-items: center;
  }
`);

const FilterInput = styled.input`
  width: auto;
  ${mq[0]} {
    width: 100%;
  }
`;

const FilterDropdown = styled.div`
  ${flex('stretch', 'row')}
  ${mq[0]} {
    flex-direction: column;
  }
`;

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
