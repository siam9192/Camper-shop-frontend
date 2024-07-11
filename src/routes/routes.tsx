import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home/Home';
import Products from '../pages/Home/Products/Products';
import Product from '../pages/Product/Product';
import Cart from '../pages/Cart/Cart';
import About from '../pages/About/About';
import ManageProducts from '../pages/ManageProducts/ManageProducts';
import Checkout from '../pages/Checkout/Checkout';
import CheckoutSuccess from '../pages/CheckoutSuccess/CheckoutSuccess';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '',
        element: <Home></Home>,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'products/:id',
        element: <Product />,
      },
      {
        path: '/my-cart',
        element: <Cart />,
      },
      {
        path: '/my-cart/checkout',
        element: <Checkout/>,
      },
      {
        path: '/my-cart/checkout/success',
        element: <CheckoutSuccess/>,
      },
      {
        path: '/manage-products',
        element: <ManageProducts />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

export default router;
