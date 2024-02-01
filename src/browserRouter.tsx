import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import NotFoundPage from "./pages/ErrorPages/NotFoundPage.tsx";
import HomePage from "./pages/HomePage/index.tsx";
import ProductsPage from "./pages/ProductsPage/index.tsx";
import { SingleProductPage } from "./pages/SingleProductPage/index.tsx";
import CartPage from "./pages/CartPage/index.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/:productId",
        element: <SingleProductPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);
