import { InputComponentProps } from '@balgamat/react-autoform';
import { SpinButton as Component, ISpinButtonProps } from 'office-ui-fabric-react/lib/SpinButton';
import { Position } from 'office-ui-fabric-react/lib/utilities/positioning';
import * as React from 'react';
import { FC } from 'react';

export const SpinButton: FC<
  InputComponentProps<number> & Partial<Omit<ISpinButtonProps, 'value'>>
> = ({ onChange, value, step = 1, labelPosition = Position.top, style, ...rest }) =>
  React.createElement(Component, {
    ...rest,
    labelPosition,
    style: { marginBottom: 6, ...style },
    value: !!value ? value.toString() : undefined,
    onIncrement: (value) => onChange(parseInt(value || '0') + step),
    onDecrement: (value) => onChange(parseInt(value || '0') + step),
  });
