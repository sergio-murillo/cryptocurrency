import * as Factory from "factory.ts";
import { DropdownItem } from "../../components/Commons/DropDown";

export const DropDownOptionMock = Factory.Sync.makeFactory<DropdownItem>({
  id: Factory.each(i => i),
  label: 'Loreim',
  value: Factory.each(i => i)
});
