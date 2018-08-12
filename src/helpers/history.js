import { createBrowserHistory } from "history";

export const history = () => (
  createBrowserHistory()
);

export const redirect = url => window.location.href = window.location.origin + url;
