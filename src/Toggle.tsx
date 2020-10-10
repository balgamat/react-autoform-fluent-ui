import * as React from 'react';
import { Checkbox as Component, ICheckboxProps } from 'office-ui-fabric-react/lib/Checkbox';
import { FC } from 'react';
import { InputComponentProps } from '@balgamat/react-autoform';

export const Toggle: FC<InputComponentProps<any, boolean> & ICheckboxProps> = ({
  onChange,
  value,
  ...rest
}) =>
  React.createElement(Component, { checked: value, onChange: (_, v) => v && onChange(v), ...rest });
