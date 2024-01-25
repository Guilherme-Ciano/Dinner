import Homepage from "./pages/homepage";
import OrdersPage from "./pages/orders";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/orders",
    element: <OrdersPage />,
  },
]);
