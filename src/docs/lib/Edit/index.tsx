/* @license Copyright 2023 @polkadot-cloud/frontpage authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Edit = ({ folder }: { folder: string }) => {
  return (
    <div className="edit-on-github">
      <a
        href={`https://github.com/polkadot-cloud/frontpage/edit/main/src/docs/${folder}/main.tsx`}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
        &nbsp; Edit this page
      </a>
    </div>
  );
};
