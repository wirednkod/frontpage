/* @license Copyright 2024 @polkadot-cloud/frontpage authors & contributors
SPDX-License-Identifier: GPL-3.0-only */
/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */

import type { ThemeContextInterface } from "./types";

export const defaultThemeContext: ThemeContextInterface = {
  toggleMode: (mode) => {},
  mode: "light",
  setTheme: (theme) => {},
  theme: "polkadot-relay",
};
