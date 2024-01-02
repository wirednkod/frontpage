/* @license Copyright 2024 @polkadot-cloud/frontpage authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Button } from "@polkadot-cloud/react/buttons/Button";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { Demo } from "../../lib/Demo";

export const ButtonSubmit = () => {
  const code = `<Button type="submit" text="Button" marginRight />
<Button type="submit" text="Button" marginRight lg />
<Button
  type="submit"
  text="Button"
  iconLeft={faArrowAltCircleUp}
  marginRight
  colorSecondary
/>
<Button type="submit" text="Button" pulse marginRight />
<Button type="submit" text="Button" disabled />`;

  return (
    <>
      <Demo>
        <Button type="submit" text="Button" marginRight />
        <Button type="submit" text="Button" marginRight lg />
        <Button
          type="submit"
          text="Button"
          iconLeft={faArrowAltCircleUp}
          marginRight
          colorSecondary
        />
        <Button type="submit" text="Button" pulse marginRight />
        <Button type="submit" text="Button" disabled />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
