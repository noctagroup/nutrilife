import baseConfig, { restrictEnvAccess } from "@nutrilife/eslint-config/base";
import nextjsConfig from "@nutrilife/eslint-config/nextjs";
import reactConfig from "@nutrilife/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
