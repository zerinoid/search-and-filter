import { ICheckboxToggle } from './CheckboxToggle';

const unchecked: ICheckboxToggle = {
  label: 'label',
  checked: false,
  value: 'value',
  onChange: () => console.log('changed')
};

const checked: ICheckboxToggle = {
  label: 'another label',
  checked: true,
  value: 'another value',
  onChange: () => console.log('changed')
};
export const baseTemplateData = {
  unchecked,
  checked
};
