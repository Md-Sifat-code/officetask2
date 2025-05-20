import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import  MainLayout from "./Layouts/Main_Layout";
import Buy from "./Pages/Buy";
import Sell from "./Pages/Sell";
import Rent from "./Pages/Rent";
import Company from "./Pages/Comapny";
import Visas from "./Pages/Visas";
import Locations from "./Pages/Locations";
import Partner from "./Pages/Partner";
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";
import RentDetails from "./Pages/RentDetails";
import Investment from "./Pages/Investment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children : [
      {
        path : "/",
        element: <Buy/>
      },
      {
        path : "/sell",
        element : <Sell/>
      }
      ,
      {
        path : "/rent",
        element : <Rent/>
      },
      {
        path : "/rent/:id",
        element : <RentDetails/>
      }
      ,
      {
        path : "/company",
        element : <Company/>
      }
      ,
      {
        path : "/visas",
        element : <Visas/>
      }
      ,
      {
        path : "/Location",
        element : <Locations/>
      },
      {
        path : "/partner",
        element : <Partner/>
      }
      ,
      {
        path : "/privacy",
        element : <Privacy/>
      }
      ,
      {
        path : "/terms",
        element : <Terms/>
      },
      {
        path:"/invest",
        element:<Investment/>
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
