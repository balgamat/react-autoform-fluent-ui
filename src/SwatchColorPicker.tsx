import { InputComponentProps } from '@balgamat/react-autoform';
import { Rating as Component, IRatingProps } from 'office-ui-fabric-react/lib/Rating';
import * as React from 'react';
import { FC } from 'react';

export const Rating: FC<InputComponentProps<unknown, number> & IRatingProps> = ({
  onChange,
  value,
  ...rest
}) =>
  React.createElement(Component, {
    rating: value,
    onChange: (_, rating) => onChange(rating as number),
    ...rest,
  });
