import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./context/UserContext";


const users = window.__INITIAL_DATA__ || [];

hydrateRoot(
  document.getElementById("root"),
  <BrowserRouter>
    <UserProvider users={users}>
      <App />
    </UserProvider>
  </BrowserRouter>
);
