/* @license Copyright 2024 @polkadot-cloud/frontpage authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Router } from "./Router";

// App-wide theme classes are inserted here.
//
// App-specific theming is added to `ThemeProvider`.
// `@polkadot-cloud/react` themes are added to `Entry`.
export const Theme = () => {
  // NOTE: theme not currently in use. Defaulting to light mode.
  // const { mode } = useTheme();

  return (
    <div className={`main theme-cloud cloud-theme-${"light"}`}>
      <Router />
    </div>
  );
};
