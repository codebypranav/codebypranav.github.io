import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

// eslint-config-next 16 ships native flat configs, so they are spread directly
// rather than wrapped in FlatCompat.
const eslintConfig = [
  {
    // `next lint` used to scan only source dirs; linting the repo root means
    // build output and scratch worktrees have to be excluded explicitly.
    ignores: ["**/.next/**", "**/out/**", "**/node_modules/**", ".claude/**"],
  },
  ...coreWebVitals,
  ...typescript,
];

export default eslintConfig;
