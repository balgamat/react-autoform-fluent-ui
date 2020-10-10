import { InputComponentProps } from '@balgamat/react-autoform';
import { Checkbox as Component, ICheckboxProps } from 'office-ui-fabric-react/lib/Checkbox';
import React, { FC } from 'react';

export const Checkbox: FC<InputComponentProps<any, boolean> & Partial<ICheckboxProps>> = ({
  onChange,
  value,
  ...rest
}) =>
  React.createElement(Component, { checked: value, onChange: (_, v) => v && onChange(v), ...rest });
