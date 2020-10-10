import * as React from 'react';
import { FC } from 'react';
import { InputComponentProps } from '@balgamat/react-autoform';
// @ts-ignore
import { Dropdown as Component, IDropdownProps } from 'office-ui-fabric-react/lib/Dropdown';
import { DropdownOption, IOptions } from './types';
import { find, includes } from 'ramda';

export type DropdownProps = InputComponentProps &
  Partial<Omit<IDropdownProps, 'options' | 'value'> & IOptions<DropdownOption<any>>>;

export const Dropdown: FC<DropdownProps> = ({
  onChange,
  options,
  keyExtractor = (o) => o,
  labelExtractor = (o) => o,
  multiSelect,
  value,
  ...rest
}) => {
  let selectedKey = undefined,
    selectedKeys = undefined;

  if (!!multiSelect) {
    selectedKeys = (value || []).map(keyExtractor);
  } else {
    selectedKey = keyExtractor(value);
  }

  if (!options) throw new Error('You have to provide `options` prop.');

  const dropdownOptions = (options as IOptions<DropdownOption<any>>['options']).map((option) => ({
    ...option,
    key: keyExtractor(option.data),
    text: labelExtractor(option.data),
  }));

  return React.createElement(Component, {
    onChange: (_, option) => {
      if (option === undefined) return;

      if (!!multiSelect) {
        onChange(
          !includes(option.data, value || [])
            ? [...(value || []), option.data]
            : (value || []).filter((item: any) => item !== option.data),
        );
      } else {
        onChange(option.data);
      }
    },
    options: dropdownOptions,
    selectedKey,
    selectedKeys,
    multiSelect,
    ...rest,
  });
};
