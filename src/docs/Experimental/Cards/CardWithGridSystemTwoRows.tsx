/* @license Copyright 2024 @polkadot-cloud/frontpage authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Card } from "@polkadot-cloud/react/base/structure/Card";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Grid } from "@polkadot-cloud/react/base/structure/Grid";
import { Demo } from "../../lib/Demo";

export const CardWithGridSystemTwoRows = () => {
  const code = `const sampleAnimation1 = {
  whileHover: { scale: 1.02 },
  transition: { duration: 0.5, type: "spring", bounce: 0.4 }
};

...

<Card animations={sampleAnimation1}>
  <Grid row>
    <Grid column sm={12} md={4}><h5>Top Left Grid</h5></Grid>
    <Grid column sm={12} md={4}><h5>Top Center Grid</h5></Grid>
    <Grid column sm={12} md={4}><h5>Top Right Grid</h5></Grid>
  </Grid>
  <Grid row>
    <Grid column sm={12} md={4}><h5>Bottom Left Grid</h5></Grid>
    <Grid column sm={12} md={4}><h5>Bottom Center Grid</h5></Grid>
    <Grid column sm={12} md={4}><h5>Bottom Right Grid</h5></Grid>
  </Grid>
</Card>`;

  const sampleAnimation1 = {
    whileHover: { scale: 1.02 },
    transition: { duration: 0.5, type: "spring", bounce: 0.4 },
  };

  return (
    <>
      <Demo showThemes={false}>
        <Card animations={sampleAnimation1}>
          <Grid row>
            <Grid column sm={12} md={4}>
              <h5>Top Left Grid</h5>
            </Grid>
            <Grid column sm={12} md={4}>
              <h5>Top Center Grid</h5>
            </Grid>
            <Grid column sm={12} md={4}>
              <h5>Top Right Grid</h5>
            </Grid>
          </Grid>
          <Grid row>
            <Grid column sm={12} md={4}>
              <h5>Bottom Left Grid</h5>
            </Grid>
            <Grid column sm={12} md={4}>
              <h5>Bottom Center Grid</h5>
            </Grid>
            <Grid column sm={12} md={4}>
              <h5>Bottom Right Grid</h5>
            </Grid>
          </Grid>
        </Card>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
