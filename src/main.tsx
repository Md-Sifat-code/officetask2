import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import MainLayout from "./Layouts/Main_Layout";
import Buy from "./Pages/Buy";
import Sell from "./Pages/Sell";
import Rent from "./Pages/Rent";
import Company from "./Pages/Comapny";
import Visas from "./Pages/Visas";
import Locations from "./Pages/Locations";
import Partner from "./Pages/Partner";
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";
import Investment from "./Pages/Investment";
import RentDetails from "./Pages/RentDetails";
import Home from "./Pages/Home";
import BuyDetails from "./Pages/BuyDetails";
import Contact from "./rentDetails/Contact";
import Contact1 from "./Pages/Contact1";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Buy />
      },
      {
        path: "/buy",
        element: <Home/> 
      },
      {
        path: "/buy/:id",
        element: <BuyDetails/>
      },
      {
        path: "/sell",
        element: <Sell />
      }
      ,
      {
        path: "/rent",
        element: <Rent />
      },
      {
        path: '/rent/:id',
        element: <RentDetails />
      }
      ,
      {
        path: "/company",
        element: <Contact1/>
      }
      ,
      {
        path: "/visas",
        element: <Visas />
      }
      ,
      {
        path: "/locations",
        element: <Locations />
      },
      {
        path: "/partner",
        element: <Partner />
      }
      ,
      {
        path: "/privacy",
        element: <Privacy />
      }
      ,
      {
        path: "/terms",
        element: <Terms />
      }
      ,
      {
        path: "/invest",
        element: <Investment />
      },
      {
        path : "/contact",
        element: <Company/>
      }
    ]
  },
]);

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Failed to find the root element");
}

ReactDOM.createRoot(rootElement as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
