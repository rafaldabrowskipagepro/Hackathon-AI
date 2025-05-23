import nextPlugin from "@next/eslint-plugin-next";
import tseslint from "typescript-eslint";
import globals from "globals";

/** @type {import('eslint').Linter.FlatConfig[]} */
const eslintConfig = [
  {
    ignores: [".next/", "node_modules/"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  // Import Next.js plugin recommended and strict rules
  nextPlugin.configs.recommended,
  nextPlugin.configs.strict,
  // Custom rule adjustments can go here if needed
  // For example:
  // {
  //   rules: {
  //     "@next/next/no-img-element": "off",
  //   }
  // }
];

export default eslintConfig;
