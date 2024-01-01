/* @license Copyright 2024 @polkadot-cloud/frontpage authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "../../lib/SimpleEditor";

export const InstallReact = () => {
  const code = `yarn add @polkadot-cloud/react`;

  return <SimpleEditor code={code} standalone />;
};
