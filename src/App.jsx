import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SearchResult from "./pages/SearchResult";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import Order from "./pages/Order";
import Login from "./pages/Login";
// import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
    path: "order",
    element: <Order />,
  },
  {
    path: "login",
    element: <Login />,
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
