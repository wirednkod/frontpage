import * as ReactDOM from "react-dom/client";
import { App } from "./App";

import "@polkadot-cloud/core/accent/cloud.css";
import "@polkadot-cloud/core/theme/cloud/fonts/index.css";
import "@polkadot-cloud/core/theme/cloud/index.css";
import "@polkadot-cloud/core/theme/default/index.css";

import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
