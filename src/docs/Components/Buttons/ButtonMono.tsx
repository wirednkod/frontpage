/* @license Copyright 2023 @polkadot-cloud/frontpage authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@polkadot-cloud/react/buttons/Button";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Demo } from "../../lib/Demo";

export const ButtonMono = () => {
  const code = `<Button type="mono" text="Button" marginRight />
<Button type="mono" text="Button" iconLeft={faUser} marginRight />
<Button type="mono" text="Button" iconRight={faUser} marginRight />
<Button type="mono" lg text="Button" disabled />`;

  return (
    <>
      <Demo showThemes={false}>
        <Button type="mono" text="Button" marginRight />
        <Button type="mono" text="Button" iconLeft={faUser} marginRight />
        <Button type="mono" text="Button" iconRight={faUser} marginRight />
        <Button type="mono" lg text="Button" disabled />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};