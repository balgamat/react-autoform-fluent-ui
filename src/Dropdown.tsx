import * as React from 'react';
import { InputComponentProps } from '@balgamat/react-autoform';
import { ComboBox as Component, IComboBoxProps } from 'office-ui-fabric-react/lib/ComboBox';
import { ComboBoxOption, IOptions } from './types';
import { FC } from 'react';

export type ComboBoxProps = InputComponentProps<any> &
  IComboBoxProps &
  IOptions<ComboBoxOption<any>, any>;

export const ComboBox: FC<ComboBoxProps> = ({
  onChange,
  options,
  keyExtractor = o => o,
  labelExtractor = o => o,
  value,
  ...rest
}) => {
  const selectedKey = keyExtractor(value);

  const comboBoxOptions = (options as IOptions<ComboBoxOption<any>, any>['options']).map(
    option => ({
      ...option,
      key: keyExtractor(option.value),
      text: labelExtractor(option.value),
    }),
  );

  return React.createElement(Component, {
    // @ts-ignore
    onChange: (_, option) => onChange(option && option.value),
    options: comboBoxOptions,
    selectedKey,
    ...rest,
  });
};