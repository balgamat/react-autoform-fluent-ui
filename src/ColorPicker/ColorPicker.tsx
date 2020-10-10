import { InputComponentProps } from '@balgamat/react-autoform';
import * as React from 'react';
import { FC } from 'react';
import {
  ColorPicker as Component,
  getColorFromString,
  IColorPickerProps,
} from 'office-ui-fabric-react/lib/index';
import { Label } from 'office-ui-fabric-react/lib/Label';

export const ColorPicker: FC<InputComponentProps<unknown, string> & Partial<IColorPickerProps>> = ({
  onChange,
  label,
  value,
  id,
  ...rest
}) => (
  <>
    <Label htmlFor={id}>{label}</Label>
    {React.createElement(Component, {
      ...rest,
      color: getColorFromString(value) || '#000',
      onChange: (_, color) => onChange(color.str),
    })}
  </>
);
