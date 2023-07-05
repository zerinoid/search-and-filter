import { ISearchBox } from './SearchBox';

const base: ISearchBox = {
  value: 'sample value',
  onChange: value => console.log(value)
};

export const baseTemplateData = {
  base
};
