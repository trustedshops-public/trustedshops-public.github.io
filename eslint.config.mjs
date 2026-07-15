import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import wc from 'eslint-plugin-wc';
import lit from 'eslint-plugin-lit';

export default defineConfig([
  {
    ignores: ['node_modules/**', 'docs/**', 'build/**', 'dist/**'],
  },
  ...tseslint.configs.recommended,
  wc.configs['flat/recommended'],
  lit.configs['flat/recommended'],
]);
