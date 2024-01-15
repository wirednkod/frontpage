/* @license Copyright 2024 @polkadot-cloud/frontpage authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ActionItem } from "@polkadot-cloud/react/base/modal/ActionItem";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { useState } from "react";
import { Button } from "@polkadot-cloud/react/buttons/Button";
import { Demo } from "../../lib/Demo";

export const ActionItemWithToggle = () => {
  const [parentToggle, setParentToggle] = useState<boolean>(false);

  const code = `<ActionItem
  text="Some Action With Toggle"
  toggled={parentToggle}
  onToggle={(val: boolean) => {
    setParentToggle(val);
  }}
  inlineButton={<Button type="help" />}
/>`;

  return (
    <>
      <Demo showThemes={false}>
        <ActionItem
          text="Some Action With Toggle"
          toggled={parentToggle}
          onToggle={(val: boolean) => setParentToggle(val)}
          inlineButton={<Button type="help" />}
        />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
