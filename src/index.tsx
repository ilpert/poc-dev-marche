import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./globals.css";
import { BrowserRouter } from "react-router";
import { SWRConfig } from "swr";

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <SWRConfig
          value={{
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
          }}
        >
          <App />
        </SWRConfig>
      </BrowserRouter>
    </React.StrictMode>
  );
}
