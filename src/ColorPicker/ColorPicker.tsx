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
  InputComponentProps<string> & Partial<IColorPickerProps & { locale: 'cs' | 'en' }>
> = ({ onChange, label, value, id, locale = 'en', ...rest }) => {
  if (!id)
    throw new Error(
      'You have to provide `id` prop so that we can correctly add label to the ColorPicker component.',
    );

  return (
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
};
