/* @license Copyright 2024 @polkadot-cloud/frontpage authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "../../lib/SimpleEditor";

export const OverlayProvider = () => {
  const code = `import { OverlayProvider } from '@polkadot-cloud/react/providers';

const AppWithProvider = () => (
  <OverlayProvider>
    <App />
  </OverlayProvider>
);`;

  return <SimpleEditor code={code} standalone />;
};
