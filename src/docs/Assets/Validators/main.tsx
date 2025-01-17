/* @license Copyright 2024 @polkadot-cloud/frontpage authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Note } from "../../lib/Note";
import { Edit } from "../../lib/Edit";
import { Header } from "../../lib/Header";
import { ValidatorOperator } from "./ValidatorOperator";
import { DocProps } from "../../lib/types";

export const Doc = ({ folder, npm }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />

      <Header
        title="Validator Operators"
        subtitle="A list of Polkadot validator operators with metadata and thumbnails."
        npm={npm}
        status="stable"
      />

      <p>
        A list of validator operators are available as a{" "}
        <a
          href="https://github.com/polkadot-cloud/library/blob/main/packages/assets/lib/validators/index.tsx"
          target="_blank"
          rel="noreferrer"
        >
          <code>ValidatorCommunity</code>
        </a>{" "}
        object, along with each operator's thumbnail icon in SVG format.
      </p>

      <p>Validators for Polkadot and Kusama are currently supported.</p>

      <ValidatorOperator />

      <Note>
        <p>
          To open a PR to add an additional validator operator to this list,
          refer to the instructions hosted in this package's{" "}
          <a
            href="https://github.com/polkadot-cloud/library/tree/main/packages/assets#adding-validator-operators"
            target="_blank"
            rel="noreferrer"
          >
            README file
          </a>
          .
        </p>
      </Note>
    </>
  );
};
