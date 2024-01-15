/* @license Copyright 2024 @polkadot-cloud/frontpage authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "../../../lib/SimpleEditor";

export const ProviderExample = () => {
  const code = `import { ExtensionsProvider } from '@polkadot-cloud/react/providers';

const AppWithProvider = () => (
  <ExtensionsProvider>
    <App />
  </ExtensionsProvider>
);`;

  return <SimpleEditor code={code} standalone />;
};
