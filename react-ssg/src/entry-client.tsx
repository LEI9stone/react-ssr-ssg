import ReactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDom.hydrateRoot(
  document.getElementById("app")!,
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
