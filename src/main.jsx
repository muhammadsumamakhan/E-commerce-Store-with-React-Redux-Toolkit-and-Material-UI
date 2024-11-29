import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Product from './pages/Product.jsx';
import SingleProduct from './pages/SingleProduct.jsx';
import NotFound from './pages/NotFound.jsx'
import Cart from './pages/Cart.jsx';
import { Provider } from "react-redux";
import { store } from "./config/redux/store/store.js";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'products', element: <Product /> },
      { path: 'product/:id', element: <SingleProduct /> },
      { path: 'cart', element: <Cart /> },
      { path: '*', element: <NotFound /> }
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
