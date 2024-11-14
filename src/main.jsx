import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './Store.js'
import { Provider } from 'react-redux'
import { ContextApi } from './Components/ContextApi.jsx'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ContextApi>
      <App />
    </ContextApi>,
  </Provider>
)