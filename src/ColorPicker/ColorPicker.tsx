import { InputComponentProps } from '@balgamat/react-autoform';
import * as React from 'react';
import { FC } from 'react';
import {
  ColorPicker as Component,
  getColorFromString,
  IColorPickerProps,
  IColorPickerStrings,
} from 'office-ui-fabric-react/lib/index';
import cs from './locales/cs.json';
import en from './locales/en.json';
import { Label } from 'office-ui-fabric-react/lib/Label';

const LOCALES: Record<string, IColorPickerStrings> = {
  en,
  cs,
};

export const ColorPicker: FC<
  InputComponentProps<unknown, string> & { locale: 'cs' | 'en' } & Partial<IColorPickerProps>
> = ({ onChange, label, value, id, locale = 'en', ...rest }) => (
  <>
    <Label htmlFor={id}>{label}</Label>
    {React.createElement(Component, {
      ...rest,
      strings: LOCALES[locale],
      color: getColorFromString(value) || '#000',
      onChange: (_, color) => onChange(color.str),
    })}
  </>
);
