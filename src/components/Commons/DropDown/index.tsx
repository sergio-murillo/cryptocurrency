
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

type Props = PropsFromComponent;

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
      <DropDownHeader onClick={toggling}>
        {selectedOption || placeholder} <FaAngleDown/>
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map(option => (
              <ListItem onClick={onOptionClicked(option)} key={option.value}>
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