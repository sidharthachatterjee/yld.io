import { configure } from '@storybook/react'
import React, { Fragment } from 'react'

import { addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import theme from '../src/utils/theme'
import GlobalStyle from '../src/utils/globalStyle'
// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

const Theme = storyFn => (
  <ThemeProvider theme={theme}>
    <Fragment>
      {storyFn()}
      <GlobalStyle />
    </Fragment>
  </ThemeProvider>
)

addDecorator(Theme)

configure(loadStories, module)
