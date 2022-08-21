import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//react-router-dom
import { BrowserRouter } from 'react-router-dom'
//readux-toolkit
import { Provider } from 'react-redux'
import store from './store/store'
//styled-component
import { ThemeProvider } from 'styled-components'
import theme from './assets/theme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
