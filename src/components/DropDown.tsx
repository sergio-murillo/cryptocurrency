
import { useState } from 'react';
import styled from '@emotion/styled';
import { FaAngleDown } from 'react-icons/fa';
import { flex } from '../styles/commons';
import { css, Theme, withTheme } from '@emotion/react';

const styleDropDownBorder = (props: { theme: Theme }) => {
  const { theme } = props;
  
  return css`
    border: ${theme.borders.normal} solid ${theme.colors.gray_2};
  `;
};

const styleDropDownCommon = (props: { theme: Theme }) => {
  const { theme } = props;
  
  return css`
    background: ${theme.colors.white};
    font-weight: ${theme.fontWeights.medium};
  `;
};

const DropDownContainer = withTheme(styled.div`
  ${styleDropDownBorder}
  min-width: 10.5em;
  min-height: 40px;
  margin-right: 10px;
  cursor: pointer;
`);

const DropDownHeader = withTheme(styled.div`
  ${flex('flex-end', 'row', 'space-between')}
  ${styleDropDownCommon}
  padding: 0.4em 1em;
`);

const DropDownListContainer = styled.div`
  position: relative;
  top: 10px;
`;

const DropDownList = withTheme(styled.ul`
  position: absolute;
  padding: 0;
  margin: 0;
  padding-left: 1em;
  box-sizing: border-box;
  width: 100%;
  ${styleDropDownCommon}
  ${styleDropDownBorder}
  &:first-of-type {
    padding-top: 0.8em;
  }
`);

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
`;

const options = [];
const placeHolder = 'USD inicial';

const DropDown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>
        {selectedOption || placeHolder} <FaAngleDown/>
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map(option => (
              <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};

export default DropDown;