import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import store from './redux/store.js'
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
