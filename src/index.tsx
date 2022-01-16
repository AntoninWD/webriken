import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ThemeContextProvider from "./context/theme_context";
import AddToolsContextProvider from "./context/tools_context";
import TopToolsContextProvider from "./context/topTools_context";
import HomeContextProvider from "./context/home_context";
import NotificationsContextProvider from "./context/notifications_context";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain={`${process.env.REACT_APP_AUTH_DOMAIN}`}
    clientId={`${process.env.REACT_APP_AUTH_CLIENT_ID}`}
    redirectUri={`${window.location.href.split("/app")[0]}/app/home`}>
    <NotificationsContextProvider>
      <HomeContextProvider>
        <ThemeContextProvider>
          <AddToolsContextProvider>
            <TopToolsContextProvider>
              <App />
            </TopToolsContextProvider>
          </AddToolsContextProvider>
        </ThemeContextProvider>
      </HomeContextProvider>
    </NotificationsContextProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
