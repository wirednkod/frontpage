/* @license Copyright 2024 @polkadot-cloud/frontpage authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { useTheme } from "../../../contexts/Theme";
import { valEmpty } from "@polkadot-cloud/react/utils";
// Import each supported theme here.
import "@polkadot-cloud/core/accent/polkadot-relay.css";
import "@polkadot-cloud/core/accent/kusama-relay.css";
import "@polkadot-cloud/core/accent/westend-relay.css";
import "@polkadot-cloud/core/theme/default/index.css";

import { DemoProps } from "./types";

export const Demo = ({
  children,
  className,
  centered,
  style,
  showThemes = true,
  standalone = false,
}: DemoProps) => {
  const { theme, mode, setTheme } = useTheme();

  const allThemes = [
    ["Polkadot", "polkadot-relay"],
    ["Kusama", "kusama-relay"],
    ["Westend", "westend-relay"],
  ];

  return (
    <>
      <div
        className={`demo theme-${theme} theme-${mode}${valEmpty(
          standalone,
          "standalone"
        )}${className ? ` ${className}` : ``}${valEmpty(centered, "centered")}`}
        style={style ? { ...style } : undefined}
      >
        {children}
      </div>
      {showThemes && (
        <div className="controls">
          {allThemes.map(([name, key]) => (
            <button
              key={`theme_${key}`}
              className={`${theme === key ? " active" : ``}`}
              onClick={() => setTheme(key)}
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </>
  );
};
