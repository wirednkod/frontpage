/* @license Copyright 2024 @polkadot-cloud/frontpage authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { AccountCard, IconProps } from "@polkadot-cloud/recipes/AccountCard";
import { Grid } from "@polkadot-cloud/react/base/structure/Grid";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Demo } from "../../lib/Demo";

export const AccountCardPageAdvancedEllipsis = () => {
  const codeB = `import { AccountCard, IconProps, } from "@polkadot-cloud/recipes/AccountCard";
...
const iconPropsLeft: IconProps = {
  // position defaults to "left"
  gridSize: 2,
  justify: "space-around",
};
...
return (
  <AccountCard style={{ padding: "1rem" }} icon={iconPropsLeft} title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }} ellipsis={{ active: true, amount:2, position: "center" }} />
)`;

  const iconPropsLeft: IconProps = {
    position: "left",
    gridSize: 2,
    justify: "space-around",
  };

  return (
    <>
      <Demo showThemes={false}>
        <Grid row>
          <Grid column sm={4}></Grid>
          <Grid column sm={4}>
            <AccountCard
              style={{ padding: "1rem" }}
              icon={iconPropsLeft}
              title={{
                address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73",
              }}
              ellipsis={{ active: true, amount: 2, position: "center" }}
            />
          </Grid>
          <Grid column sm={4}></Grid>
        </Grid>
      </Demo>
      <SimpleEditor code={codeB} />
    </>
  );
};
