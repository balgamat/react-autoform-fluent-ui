import { InputComponentProps } from '@balgamat/react-autoform';
import { Slider as Component, ISliderProps } from 'office-ui-fabric-react/lib/Slider';
import * as React from 'react';
import { FC } from 'react';

export const Slider: FC<InputComponentProps<unknown, number> & Partial<ISliderProps>> = ({
  onChange,
  value,
  ...rest
}) =>
  React.createElement(Component, {
    value,
    onChange,
    ...rest,
  });
