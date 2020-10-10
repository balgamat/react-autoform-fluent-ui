import { InputComponentProps } from '@balgamat/react-autoform';
import {
  ChoiceGroup as Component,
  IChoiceGroupProps,
} from 'office-ui-fabric-react/lib/ChoiceGroup';
import React, { FC } from 'react';
import { ChoiceGroupOption, ComboBoxOption, IOptions } from '../types';

export type ChoiceGroupProps = InputComponentProps<any> &
  IChoiceGroupProps &
  IOptions<ChoiceGroupOption<any>, any>;

export const ChoiceGroup: FC<ChoiceGroupProps> = ({
  onChange,
  options,
  keyExtractor = o => o,
  labelExtractor = o => o,
  value,
  ...rest
}) => {
  const selectedKey = keyExtractor(value);

  const choiceGroupOptions = (options as IOptions<ChoiceGroupOption<any>, any>['options']).map(
    option => ({
      ...option,
      key: keyExtractor(option.value),
      text: labelExtractor(option.value),
    }),
  );

  return React.createElement(Component, {
    onChange: (_, option) => onChange(option && option.value),
    options: choiceGroupOptions,
    selectedKey,
    ...rest,
  });
};
