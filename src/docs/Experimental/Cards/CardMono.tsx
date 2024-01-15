/* @license Copyright 2024 @polkadot-cloud/frontpage authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Card } from "@polkadot-cloud/react/base/structure/Card";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Demo } from "../../lib/Demo";

export const CardMono = () => {
  const code = `<Card>
  <h5>Just a card</h5>
</Card>`;

  return (
    <>
      <Demo showThemes={false}>
        <Card>
          <h5>Just a card</h5>
        </Card>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
