import * as React from 'react';
import { FC } from 'react';
import { InputComponentProps } from '@balgamat/react-autoform';
import { ComboBox as Component, IComboBoxProps } from 'office-ui-fabric-react/lib/ComboBox';
import { ComboBoxOption, IOptions } from './types';
import { find } from 'ramda';

export type ComboBoxProps = InputComponentProps &
  Partial<Omit<IComboBoxProps, 'options' | 'value'> & IOptions<ComboBoxOption<any>>>;

export const ComboBox: FC<ComboBoxProps> = ({
  onChange,
  options,
  keyExtractor = (o) => o,
  labelExtractor = (o) => o,
  value,
  ...rest
}) => {
  const selectedKey = keyExtractor(value);

  if (!options) throw new Error('You have to provide `options` prop.');

  const comboBoxOptions = (options as IOptions<ComboBoxOption<any>>['options']).map((option) => ({
    ...option,
    key: keyExtractor(option.data),
    text: labelExtractor(option.data),
  }));

  return React.createElement(Component, {
    ...rest,
    onChange: (_, option) => option && onChange(option.data),
    options: comboBoxOptions,
    selectedKey,
  });
};
