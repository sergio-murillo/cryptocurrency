
import { useState, memo, FC } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import {
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem } from './styles';

/**
 * Dropdown item properties
 */
export interface DropdownItem {
  /**
   * Item id
   * @type {(string|number)}
   */
  id: string|number;
  /**
   * Item label
   * @type {string}
   */
  label: string;
  /**
   * Item value
   * @type {(string|number)}
   */
  value: string|number;
}

/**
 * Properties from component
 */
interface PropsFromComponent {
  /**
   * Dropdown options
   * @type {DropdownItem[]}
   */
  options: DropdownItem[];
  /**
   * Dropdown placeholder text
   * @type {string}
   */
  placeholder: string;
  /**
   * Called when a option is clicked
   * @param {DropdownItem} item Option selected
   */
  submitOptionSelected: (item: DropdownItem) => void;
}

export type Props = PropsFromComponent;

/**
 * Generic dropdown
 */
export const DropDown: FC<Props> = ({ options, placeholder, submitOptionSelected }) => {
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