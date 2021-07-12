import * as Factory from 'factory.ts';
import { DropdownItem } from 'src/components/Commons/DropDown';
import { Header } from 'src/models/commons';

export const DropDownOptionMock = Factory.Sync.makeFactory<DropdownItem>({
  id: Factory.each(i => i),
  label: 'Loreim',
  value: Factory.each(i => i)
});

export const TableRowMock = Factory.Sync.makeFactory<any[]>(
  [Factory.each(i => i), `Loreim ${Factory.each(i => i)}`]
);

export const TableHeaderMock = Factory.Sync.makeFactory<Header>({
  title: `Column ${Factory.each(i => i)}`,
  colspan: 1
});