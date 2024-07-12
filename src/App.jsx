import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SearchResult from "./pages/SearchResult";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import Account from "./pages/Account";
// import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        // index: ,
      },
      {
        path: "result",
        element: <SearchResult />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "account",
        element: <Account />,
      },
    ],
  },

  // {
  //   path: "*",
  //   errorElement: <Error />,
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
