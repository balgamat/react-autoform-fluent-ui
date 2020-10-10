import * as React from 'react';
import { Toggle as Component, IToggleProps } from 'office-ui-fabric-react/lib/Toggle';
import { FC } from 'react';
import { InputComponentProps } from '@balgamat/react-autoform';

export const Toggle: FC<InputComponentProps<boolean> & IToggleProps> = ({
  onChange,
  value,
  ...rest
}) =>
  React.createElement(Component, {
    ...rest,
    checked: value,
    onChange: (_, v) => v !== undefined && onChange(v),
  });
