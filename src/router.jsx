import { createBrowserRouter } from "react-router-dom";
import Login from "./routers/Login";
import Home from "./routers/Home";
import ProductDetail from "./routers/ProductDetail";
import App from "./App";
import Search from "./routers/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);

export default router;
