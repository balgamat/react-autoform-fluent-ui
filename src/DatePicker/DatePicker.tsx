import { InputComponentProps } from '@balgamat/react-autoform';
import { DatePicker as Component, IDatePickerProps } from 'office-ui-fabric-react';
import * as React from 'react';
import { FC } from 'react';
import cs from './locales/cs.json';
import en from './locales/en.json';
import { Label } from 'office-ui-fabric-react/lib/Label';

const LOCALES = {
  en,
  cs,
};

export const DatePicker: FC<
  InputComponentProps<unknown, Date> & IDatePickerProps & { locale: 'cs' | 'en'; id: string }
> = ({ onChange, value, label, locale = 'en', strings, id, ...rest }) => (
  <>
    <Label htmlFor={id}>{label}</Label>
    {React.createElement(Component, {
      id,
      value,
      strings: strings || LOCALES[locale] || en,
      onSelectDate: date => date && onChange(date),
      ...rest,
    })}
  </>
);
