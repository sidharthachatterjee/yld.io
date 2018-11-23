import React from 'react'

import { storiesOf } from '@storybook/react'
import {
  Checkbox,
  Input,
  Label,
  Textarea,
  Button,
  Field,
  Fieldset
} from './forms'

storiesOf('Form', module)
  .add('Checkbox', () => (
    <Fieldset>
      <Checkbox type="checkbox" id={'checkbox'} name={'checkbox'} />
      <label htmlFor={'checkbox'}>Label</label>
    </Fieldset>
  ))
  .add('Input', () => <Input type="text" placeholder="test" />)
  .add('Textarea', () => <Textarea placeholder="test" />)
  .add('Button', () => <Button>Click Me</Button>)
  .add('Label', () => <Label>Label</Label>)
  .add('Field', () => (
    <Field>
      <Input type="text" placeholder="test" />
    </Field>
  ))
  .add('Fieldset', () => (
    <Fieldset>
      <Input type="text" placeholder="test" />
    </Fieldset>
  ))
