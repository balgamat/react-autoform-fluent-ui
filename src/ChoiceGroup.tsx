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
  Partial<IOptions<ChoiceGroupOption<any>>>;

export const ChoiceGroup: FC<ChoiceGroupProps> = ({
  onChange,
  options,
  keyExtractor = (o) => o,
  labelExtractor = (o) => o,
  value,
  ...rest
}) => {
  const selectedKey = keyExtractor(value);

  if (!options)
    throw new Error(
      `You have to provide \`options\` prop.\nYour props: ${JSON.stringify(
        {
          onChange,
          options,
          keyExtractor,
          labelExtractor,
          value,
          ...rest,
        },
        null,
        2,
      )}`,
    );

  const choiceGroupOptions = options.map((option) => ({
    ...option,
    key: option.key || keyExtractor(option.data),
    text: option.text || labelExtractor(option.data),
  }));

  return React.createElement(Component, {
    onChange: (_, option) => option && onChange((option as any).data),
    options: choiceGroupOptions,
    selectedKey,
    ...rest,
  });
};
