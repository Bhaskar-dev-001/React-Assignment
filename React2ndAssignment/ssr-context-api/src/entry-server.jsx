import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import { UserProvider } from "./context/UserContext";

export async function render(url) {
  const users = await fetch("https://jsonplaceholder.typicode.com/users").then(r => r.json());

  const html = renderToString(
    <StaticRouter location={url}>
      <UserProvider users={users}>
        <App />
      </UserProvider>
    </StaticRouter>
  );

  return { appHtml: html, InitialData: users };
}