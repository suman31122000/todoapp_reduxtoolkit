import React from 'react'
import ReactDOM from 'react-dom/client'
import Todoapp from './App.jsx'
import {Provider} from 'react-redux'
import {store} from './redux/store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <Todoapp />
    </Provider>
  </React.StrictMode>,
)
