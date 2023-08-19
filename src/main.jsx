import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { Toaster } from 'react-hot-toast'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Order from './Order.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/order',
    element:<Order />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <Toaster/>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
