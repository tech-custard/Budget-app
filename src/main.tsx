import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@styles/index.css";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "@components/common/ErrorComponent";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary
      fallbackRender={ErrorComponent}
      onReset={() => (location.href = "/")}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
