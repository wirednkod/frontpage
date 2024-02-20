/* @license Copyright 2024 @polkadot-cloud/frontpage authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconSVG from "./svg/icon.svg?react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Header = () => {
  return (
    <div className="app-header">
      <section>
        <div className="icon">
          <IconSVG />
        </div>
        <div className="title">
          <h3>Polkadot Cloud Docs</h3>
        </div>
      </section>
      <section>
        <a
          href="https://github.com/polkadot-cloud/library"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            transform="grow-12"
            style={{ marginLeft: "0.25rem" }}
          />
        </a>
      </section>
    </div>
  );
};
