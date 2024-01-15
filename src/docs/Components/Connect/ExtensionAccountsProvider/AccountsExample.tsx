/* @license Copyright 2024 @polkadot-cloud/frontpage authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "../../../lib/SimpleEditor";

export const AccountsExample = () => {
  const code = `import {
  useExtensionAccounts,
} from '@polkadot-cloud/react/hooks';

const ConnectedAccounts = () => {
  const { extensionAccounts } = useExtensionAccounts();

  return (
    <>
      {extensionAccounts.map((account) => <p key={account.address}>{account.address}</p>)
    </>
  );
);`;

  return <SimpleEditor code={code} standalone />;
};
