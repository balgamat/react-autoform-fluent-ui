# Fluent UI for React Autoform

> Fluent UI Components for React Autoform.

## Available components

- Checkbox
- ChoiceGroup
- ColorPicker
- ComboBox
- DatePicker
- Dropdown
- Rating
- Slider
- SpinButton
- SwatchColorPicker
- TextField
- Toggle

## Installation

Make sure you also have the base package installed with this one :

`yarn add @balgamat/react-autoform @balgamat/react-autoform-fluent-ui`

then import it and apply the UI kit to the Autoforms:

```typescript
import { customizeInputComponents } from '@balgamat/react-autoform';
import { useFluentUIComponents } from '@balgamat/react-autoform-fluent-ui';

useFluentUIComponents(customizeInputComponents);
```
