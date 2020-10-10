import { InputComponentProps } from '@balgamat/react-autoform';
import {
  ChoiceGroup as Component,
  IChoiceGroupProps,
} from 'office-ui-fabric-react/lib/ChoiceGroup';
import React, { FC } from 'react';
import { ChoiceGroupOption, IOptions } from './types';
import { find } from 'ramda';

export type ChoiceGroupProps = InputComponentProps<unknown> &
  Partial<Omit<IChoiceGroupProps, 'options'>> &
  IOptions<ChoiceGroupOption<any>>;

export const ChoiceGroup: FC<ChoiceGroupProps> = ({
  onChange,
  options,
  keyExtractor = o => o,
  labelExtractor = o => o,
  value,
  ...rest
}) => {
  const selectedKey = keyExtractor(value);

  const choiceGroupOptions = options.map(option => ({
    ...option,
    key: option.key || keyExtractor(option.data),
    text: option.text || labelExtractor(option.value),
  }));

  return React.createElement(Component, {
    onChange: (_, option) => option && onChange(find(o => keyExtractor(o) === option.key)),
    options: choiceGroupOptions,
    selectedKey,
    ...rest,
  });
};
