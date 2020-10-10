import { InputComponentProps } from '@balgamat/react-autoform';
import { TextField as Component, ITextFieldProps } from 'office-ui-fabric-react/lib/TextField';
import * as React from 'react';
import { FC } from 'react';

export const TextField: FC<InputComponentProps<unknown, string> & Partial<ITextFieldProps>> = ({
  onChange,
  value,
  ...rest
}) =>
  React.createElement(Component, {
    value,
    onChange: (_, newValue) => newValue && onChange(newValue),
    ...rest,
  });
