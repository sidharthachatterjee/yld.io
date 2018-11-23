import React from 'react'

import { storiesOf } from '@storybook/react'
import { H1, H3, H4, H5, H6 } from './'

storiesOf('Typography', module)
  .add('Large title', () => <H1>Large title</H1>)
  .add('Large Body', () => <H3>Large Body</H3>)
  .add('Small Title 1', () => <H4>Small Title</H4>)
  .add('Small Title 2', () => <H5>Small Title</H5>)
  .add('Small Title 3', () => <H6>Small Title</H6>)
