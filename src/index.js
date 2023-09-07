import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store,persistor } from "./redux/Store";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate Loading={"loading"} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
