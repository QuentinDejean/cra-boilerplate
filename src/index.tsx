import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/core/styles'

import theme from 'utils/theme'

import './index.css'
import App from './app/App'

class CRABoilerplate extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  private render() {
    ReactDOM.render(
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </React.StrictMode>,
      this
    )
  }
}

customElements.define('cra-boilerplate', CRABoilerplate)
