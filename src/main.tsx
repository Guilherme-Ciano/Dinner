import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, GeistProvider } from "@geist-ui/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./routes.tsx";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import "./App.css";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GeistProvider>
        <CssBaseline />
        <RouterProvider router={router} />
      </GeistProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
