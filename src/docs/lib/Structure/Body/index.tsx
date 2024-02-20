/* @license Copyright 2024 @polkadot-cloud/frontpage authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ComponentBase } from "@polkadot-cloud/react/types";

/**
 * @name Body
 * @summary An element that houses Side and Main.
 */
export const Body = ({ children, style }: ComponentBase) => (
  <div className="core-body" style={style}>
    {children}
  </div>
);
