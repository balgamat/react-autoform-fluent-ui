import * as React from 'react';
import { FC } from 'react';
import { InputComponentProps } from '@balgamat/react-autoform';
import { Dropdown as Component, IDropdownProps } from 'office-ui-fabric-react/lib/DropDown';
import { DropdownOption, IOptions } from './types';
import { find } from 'ramda';

export type DropdownProps = InputComponentProps<unknown, any[] | any> &
  Partial<Omit<IDropdownProps, 'options'>> &
  IOptions<DropdownOption<any>>;

export const Dropdown: FC<DropdownProps> = ({
  onChange,
  options,
  keyExtractor = o => o,
  labelExtractor = o => o,
  multiSelect,
  value,
  ...rest
}) => {
  let selectedKey = undefined,
    selectedKeys = undefined;

  if (!!multiSelect) {
    selectedKeys = value.map(keyExtractor);
  } else {
    selectedKey = keyExtractor(value);
  }

  const dropdownOptions = (options as IOptions<DropdownOption<any>>['options']).map(option => ({
    ...option,
    key: keyExtractor(option.data),
    text: labelExtractor(option.data),
  }));

  const getOptionByKey = (key: string | number) => (o: any) => keyExtractor(o) === key;

  return React.createElement(Component, {
    // @ts-ignore
    onChange: (_, option) => {
      if (!option) return;

      if (!!multiSelect) {
        onChange(
          option.selected
            ? [...value, find(getOptionByKey(option.key))]
            : value.filter(getOptionByKey(option.key)),
        );
      } else {
        onChange(getOptionByKey(option.key));
      }
    },
    options: dropdownOptions,
    selectedKey,
    selectedKeys,
    ...rest,
  });
};
