import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import reactHooks from '@testing-library/react-hooks';

export default tseslint.config(
    {
      ignores: ["build/**/*"],
    },
    eslint.configs.recommended,
    tseslint.configs.recommended,
    prettierConfig,
    {
      files: ["src/**/*.ts", "src/**/*.tsx"],
      plugins: {
        "react-hooks": reactHooks,
      },
      rules: {
        semi: "error",
        indent: "warn",
      }
    }
);
