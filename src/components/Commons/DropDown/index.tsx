
import { useState, memo } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import {
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem } from './styles';

export interface DropdownItem {
  id: string|number;
  label: string;
  value: string|number;
}

interface PropsFromComponent {
  options: DropdownItem[];
  placeholder: string;
  submitOptionSelected: (item: DropdownItem) => void;
}

export type Props = PropsFromComponent;

const DropDown: React.FC<Props> = ({ options, placeholder, submitOptionSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (option: DropdownItem) => () => {
    setSelectedOption(option.label);
    submitOptionSelected(option);
    setIsOpen(false);
  };

  return (
    <DropDownContainer>
      <DropDownHeader data-testid="dropdown-header" onClick={toggling}>
        {selectedOption || placeholder} <FaAngleDown/>
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList data-testid="dropdown-list">
            {options.map(option => (
              <ListItem onClick={onOptionClicked(option)} key={option.id}>
                {option.label}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};

export default memo(DropDown);