import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { AuthProvider } from "./Utilities/AuthContext"; // Import AuthProvider
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AuthProvider> {/* Wrap the entire app */}
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </AuthProvider>
    </PersistGate>
  </Provider>
);
