/* @license Copyright 2023 @polkadot-cloud/frontpage authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "../../lib/SimpleEditor";

export const OverlayBasic = () => {
  const code = `import { Overlay } from '@polkadot-cloud/react';
import { MyModal, AnotherModal } from './modals';
import { FallbackModal } from './fallback-modal';

export const Overlays = () => (
  <Overlay
    fallback={FallbackModal}
    modals={{
      MyModal,
      AnotherModal,
    }}
  />
);`;

  return <SimpleEditor code={code} standalone />;
};
