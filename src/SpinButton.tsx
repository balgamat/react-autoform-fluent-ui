import { InputComponentProps } from '@balgamat/react-autoform';
import { SpinButton as Component, ISpinButtonProps } from 'office-ui-fabric-react/lib/SpinButton';
import * as React from 'react';
import { FC } from 'react';

export const SpinButton: FC<InputComponentProps<unknown, number> & Partial<ISpinButtonProps>> = ({
  onChange,
  value,
  step,
  ...rest
}) =>
  React.createElement(Component, {
    value,
    onIncrement: value => onChange(parseInt(value) + (step || 1)),
    onDecrement: value => onChange(parseInt(value) + (step || 1)),
    ...rest,
  });
