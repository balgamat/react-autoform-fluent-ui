import { InputComponentProps } from '@balgamat/react-autoform';
import { Rating as Component, IRatingProps } from 'office-ui-fabric-react/lib/Rating';
import * as React from 'react';
import { FC } from 'react';
import { Label } from 'office-ui-fabric-react/lib/Label';

export const Rating: FC<InputComponentProps<number> & Partial<IRatingProps & { id: string }>> = ({
  label,
  onChange,
  id,
  value,
  ...rest
}) => {
  if (!id)
    throw new Error(
      'You have to provide `id` prop so that we can correctly add label to the DatePicker component.',
    );

  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      {React.createElement(Component, {
        ...rest,
        rating: value,
        onChange: (_, rating) => onChange(rating as number),
      })}
    </>
  );
};
