import ReactDOM, { unstable_renderSubtreeIntoContainer } from "react-dom";
import React from "react";

import { parseRoutePath, IRouteParseResult } from "@jimengio/ruled-router";

import Container from "./pages/container";

const renderApp = () => {
  ReactDOM.render(<Container />, document.querySelector(".app"));
};

window.onload = renderApp;

window.addEventListener("hashchange", () => {
  renderApp();
});

declare var module: any;

if (module.hot) {
  module.hot.accept([], () => {
    renderApp();
  });
}
