import { InputComponentProps } from '@balgamat/react-autoform';
import { DatePicker as Component, IDatePickerProps } from 'office-ui-fabric-react';
import * as React from 'react';
import { FC } from 'react';
import cs from './locales/cs.json';
import en from './locales/en.json';

const LOCALES = {
  en,
  cs,
};

const tryParseDate = (date: any) => {
  try {
    return new Date(date);
  } catch {
    return undefined;
  }
};

export const DatePicker: FC<
  InputComponentProps<Date> & Partial<IDatePickerProps & { locale: 'cs' | 'en' }>
> = ({ onChange, value, label, locale = 'en', strings, ...rest }) =>
  React.createElement(Component, {
    formatDate: (date) => {
      try {
        if (!!date) {
          return new Date(date).toLocaleDateString(locale, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
        } else {
          return '';
        }
      } catch {
        return '';
      }
    },
    ...rest,
    label,
    value: tryParseDate(value),
    strings: strings || LOCALES[locale] || en,
    onSelectDate: (date) => date && onChange(date),
  });
