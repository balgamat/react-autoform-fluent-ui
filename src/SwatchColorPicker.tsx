import { InputComponentProps } from '@balgamat/react-autoform';
import {
  SwatchColorPicker as Component,
  ISwatchColorPickerProps,
} from 'office-ui-fabric-react/lib/SwatchColorPicker';
import { Label } from 'office-ui-fabric-react/lib/Label';
import * as React from 'react';
import { FC } from 'react';
import { keys, map, pipe } from 'ramda';

export const SwatchColorPicker: FC<
  InputComponentProps<string> &
    Partial<ISwatchColorPickerProps & { id: string; colors: { [color: string]: string } }>
> = ({ onChange, value, colors, label, id, columnCount = 6, ...rest }) => {
  if (!colors || !id) throw new Error('You have to provide `colors` and `id` prop.');

  const colorCells = pipe(
    keys,
    map((label) => ({ id: colors[label], label, color: colors[label] })),
  )(colors);

  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      {React.createElement(Component, {
        ...rest,
        id,
        colorCells,
        columnCount,
        isControlled: true,
        selectedId: value,
        onColorChanged: (_, color) => color && onChange(color),
      })}
    </>
  );
};
