/* @license Copyright 2024 @polkadot-cloud/frontpage authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "../../lib/SimpleEditor";

export const ValidatorOperator = () => {
  const code = `// Import validator community object.

import { ValidatorCommunity } from '@polkadot-cloud/assets/validators';`;

  return <SimpleEditor code={code} standalone />;
};
