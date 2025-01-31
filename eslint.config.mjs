import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import reactHooks from '@testing-library/react-hooks';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';

export default tseslint.config(
    {
        ignores: ['build/**/*'],
    },
    eslint.configs.recommended,
    tseslint.configs.recommended,
    prettierConfig,
    {
        files: ['src/**/*.ts', 'src/**/*.tsx'],
        plugins: {
            'react-hooks': reactHooks,
            'simple-import-sort': simpleImportSortPlugin,
        },
        rules: {
            semi: 'error',
            indent: ['error', 4, { SwitchCase: 1 }],
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error"
        }
    }
);
