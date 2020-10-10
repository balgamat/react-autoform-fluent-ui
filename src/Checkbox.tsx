import { InputComponentProps } from '@balgamat/react-autoform';
import { Checkbox as Component, ICheckboxProps } from 'office-ui-fabric-react/lib/Checkbox';
import React, { FC } from 'react';

export const Checkbox: FC<InputComponentProps<boolean> & Partial<ICheckboxProps>> = ({
  onChange,
  value,
  ...rest
}) => (
  <div style={{ paddingTop: 12, paddingBottom: 6 }}>
    {React.createElement(Component, {
      ...rest,
      checked: value,
      onChange: (_, v) => v !== undefined && onChange(v),
    })}
  </div>
);
