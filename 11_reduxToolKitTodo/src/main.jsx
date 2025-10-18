import {} from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import "remixicon/fonts/remixicon.css";

createRoot(document.getElementById("root")).render(
  // here, store(props) is work similar as value(props) in useContext
  <Provider store={store}>
    <App />
  </Provider>
);

// why redux, not useContext?
// In useContext we need to spread old data and then add new one but  when we work with redux we don't need to spread old existing data before adding new one.

// redux know for single source of data or never muted existing state