/* @license Copyright 2024 @polkadot-cloud/frontpage authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Button } from "@polkadot-cloud/react/buttons/Button";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Demo } from "../../lib/Demo";

export const ButtonHelp = () => {
  const code = `<Button type="help" marginRight />
<Button type="help" background="secondary" marginRight />
<Button type="help" background="none" outline />`;

  return (
    <>
      <Demo showThemes={false}>
        <Button type="help" marginRight />
        <Button type="help" background="secondary" marginRight />
        <Button type="help" background="none" outline />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
