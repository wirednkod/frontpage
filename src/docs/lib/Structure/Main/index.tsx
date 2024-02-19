// Copyright 2024 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { ComponentBase } from "@polkadot-cloud/react/types";
import type { ForwardedRef } from "react";
import { forwardRef } from "react";

/**
 * @name Main
 * @summary A column flex wrapper that hosts the main page content.
 */
export const Main = forwardRef(
  ({ children, style }: ComponentBase, ref?: ForwardedRef<HTMLDivElement>) => (
    <div className="core-main" ref={ref} style={style}>
      {children}
    </div>
  )
);
Main.displayName = "Main";
