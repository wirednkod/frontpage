/* @license Copyright 2024 @polkadot-cloud/frontpage authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ReactElement } from "react";

export interface Props {
  title: string;
  description: string;
  params: string[];
  component: ReactElement;
}
