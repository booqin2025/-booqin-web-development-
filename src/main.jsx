import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Service from "./Pages/Service.jsx";
import Salon from "./Pages/Salon.jsx";
import Shop from "./Pages/Shop.jsx";
import Categories from "./Pages/Categories.jsx";
import Cart from "./Pages/Cart.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="service" element={<Service />} />
      <Route path="salons" element={<Salon />} />
      <Route path="shop" element={<Shop />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
