/* @license Copyright 2023 @polkadot-cloud/app authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Loader } from "@polkadot-cloud/react/loaders/Loader";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Demo } from "../../lib/Demo";

export const LoaderCube = () => {
  const code = `<Loader type="cube" />`;

  return (
    <>
      <Demo>
        <div style={{ margin: "4rem 0 2rem 0" }}>
          <Loader type="cube" />
        </div>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
