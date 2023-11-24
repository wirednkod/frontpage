// Copyright 2023 @polkadot-cloud/app authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { AnyFunction } from "@polkadot-cloud/react/utils/types";
import { AnyObject } from "@polkadot-cloud/utils/types";
import { useEffect } from "react";

/*
 * A hook that alerts clicks outside of the passed ref.
 */
export const useOutsideAlerter = (
  ref: AnyObject,
  callback: AnyFunction,
  ignore = []
) => {
  useEffect(() => {
    const handleClickOutside = (event: AnyObject) => {
      if (ref.current && !ref.current.contains(event.target)) {
        const invalid = ignore.find((i) => event.target.classList.contains(i));
        if (invalid === undefined) {
          callback();
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};
