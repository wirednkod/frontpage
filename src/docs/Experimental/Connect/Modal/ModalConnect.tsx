/* @license Copyright 2024 @polkadot-cloud/frontpage authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "../../../lib/SimpleEditor";
import { Demo } from "../../../lib/Demo";
import { Button } from "@polkadot-cloud/react/buttons/Button";
import { useOverlay } from "@polkadot-cloud/react/overlay/OverlayProvider/useOverlay";
import { Overlays, useActiveAccounts } from "@polkadot-cloud/recipes/Connect";

export const ModalConnect = () => {
  const codeEntry = `
// entry file of the dApp
import {
  Connect,
  connectInfo,
  ConnectConfigProvider,
} from "@polkadot-cloud/recipes/Connect";
import type { ConnectType, DappInfo } from "@polkadot-cloud/recipes/Connect";

export const ModalConnect = () => {
  const dappInfo: DappInfo = {
    dappName: "dApp Name",
    network: 'polkadot',
    ss58: 0,
  };

  const providers = connectInfo(dappInfo);

  return (
    <ConnectConfigProvider dappInfo={dappInfo}>
      <Connect providers={providers}>
        <App />
      </Connect>
    </ConnectConfigProvider>
  );
};
`;

  const code = `// App.tsx (the component that is wrapped of the Providers)
import {
  Overlays,
  useActiveAccounts,
  useOverlay } from "@polkadot-cloud/recipes/Connect";

const { openModal } = useOverlay().modal;
const { activeAccount } = useActiveAccounts();

<>
  <Overlays /> {/* This needs to be part of the code */}
  <div style={{ display: "flex" }}>
    {activeAccount && (
      <p>{activeAccount}</p>
    )}
    <Button type="primary" text="Connect"
      onClick={() => {
        openModal({ key: "Connect" });
      }}
    />
  </div>
</>
`;

  const { openModal } = useOverlay().modal;
  const { activeAccount } = useActiveAccounts();

  return (
    <>
      <SimpleEditor code={codeEntry} />
      <p>
        And the Button that will trigger the modal should have the
        <code>Overlays</code> tag contained and the <code>openModal</code>{" "}
        function with the <code>key: "Connect"</code> for triggering the Connect
        modal.
      </p>
      <Demo showThemes={false} centered>
        <Overlays />
        <div style={{ display: "flex" }}>
          {activeAccount && (
            <p style={{ padding: "0 10rem" }}>{activeAccount}</p>
          )}
          <Button
            type="primary"
            text={"Connect"}
            onClick={() => {
              openModal({ key: "Connect" });
            }}
          />
        </div>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
