import * as React from 'react';
import { FC } from 'react';
import { InputComponentProps } from '@balgamat/react-autoform';
import { ComboBox as Component, IComboBoxProps } from 'office-ui-fabric-react/lib/ComboBox';
import { ComboBoxOption, IOptions } from './types';
import { find } from 'ramda';

export type ComboBoxProps = InputComponentProps<unknown> &
  Partial<Omit<IComboBoxProps, 'options'>> &
  IOptions<ComboBoxOption<any>>;

export const ComboBox: FC<ComboBoxProps> = ({
  onChange,
  options,
  keyExtractor = o => o,
  labelExtractor = o => o,
  value,
  ...rest
}) => {
  const selectedKey = keyExtractor(value);

  const comboBoxOptions = (options as IOptions<ComboBoxOption<any>>['options']).map(option => ({
    ...option,
    key: keyExtractor(option.data),
    text: labelExtractor(option.data),
  }));

  return React.createElement(Component, {
    // @ts-ignore
    onChange: (_, option) => option && onChange(find(o => keyExtractor(o) === option.key)),
    options: comboBoxOptions,
    selectedKey,
    ...rest,
  });
};
