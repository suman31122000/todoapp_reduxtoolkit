import React from 'react'
import ReactDOM from 'react-dom/client'
import Todoapp from './App.jsx'
import {Provider} from 'react-redux'
import {store} from './redux/store'
import './index.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import About from './about.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Todoapp/>}></Route>
    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
