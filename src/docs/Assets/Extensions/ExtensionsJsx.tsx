/* @license Copyright 2023 @polkadot-cloud/frontpage authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "../../lib/SimpleEditor";
import { PolkadotVault } from "@polkadot-cloud/assets/extensions/jsx/PolkadotVault";
import { Demo } from "../../lib/Demo";

export const ExtensionsJsx = () => {
  const code = `import { PolkadotVault } from "@polkadot-cloud/assets/extensions/jsx/PolkadotVault";

const App = () => (
  <PolkadotVault />
)`;

  return (
    <>
      <Demo showThemes={false}>
        <div className="svg-box sm">
          <PolkadotVault />
        </div>
      </Demo>
      <SimpleEditor code={code} language="javascript" />
    </>
  );
};
