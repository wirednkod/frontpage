/* @license Copyright 2023 @polkadot-cloud/frontpage authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ActionItem } from "@polkadot-cloud/react/base/modal/ActionItem";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Demo } from "../../lib/Demo";

export const ActionItemStatic = () => {
  const code = `<ActionItem text="Some Action" />`;

  return (
    <>
      <Demo showThemes={false}>
        <ActionItem text="Some Action" />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
