/* @license Copyright 2024 @polkadot-cloud/frontpage authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Edit } from "../../lib/Edit";
import { Header } from "../../lib/Header";
import { TextfieldSimple } from "./TextfieldSimple";
import { DocProps } from "../../lib/types";

export const Doc = ({ folder, npm }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />

      <Header
        title="Textfield"
        subtitle="Simple textfield component."
        npm={npm}
        status="experimental"
      />

      <h3>The Textfield</h3>

      <TextfieldSimple />
    </>
  );
};
