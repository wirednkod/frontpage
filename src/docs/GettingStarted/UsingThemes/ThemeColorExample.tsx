/* @license Copyright 2023 @polkadot-cloud/frontpage authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "../../lib/SimpleEditor";

export const ThemeColorExample = () => {
  const code = `.theme-light {
 --accent-color-primary: var(--accent-color-primary-light);
}
.theme-dark {
 --accent-color-primary: var(--accent-color-primary-dark);
}`;

  return <SimpleEditor code={code} language="css" standalone />;
};