import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import vitestPlugin from '@vitest/eslint-plugin';
import tripleConfigReact from 'eslint-config-triple/react';
import jestDomPlugin from 'eslint-plugin-jest-dom';
import testingLibraryPlugin from 'eslint-plugin-testing-library';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...tripleConfigReact,
  ...compat.extends('plugin:@next/next/core-web-vitals'),
  {
    ignores: ['reports/**/*', 'test-results/**/*', '.vscode'],
  },
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
  {
    rules: {
      // Consistently import navigation APIs from `@/navigation`
      'no-restricted-imports': [
        'error',
        {
          name: 'next/link',
          message: 'Please import from `navigation` instead.',
        },
        {
          name: 'next/navigation',
          importNames: [
            'redirect',
            'permanentRedirect',
            'useRouter',
            'usePathname',
          ],
          message: 'Please import from `navigation` instead.',
        },
      ],
    },
  },

  // test file configuration
  {
    files: ['src/**/*.+(spec|test).[jt]s?(x)'],
    plugins: {
      vitest: vitestPlugin,
      ...jestDomPlugin.configs['flat/recommended'].plugins,
      ...testingLibraryPlugin.configs['flat/react'].plugins,
    },
    rules: {
      ...vitestPlugin.configs.recommended.rules,
      ...jestDomPlugin.configs['flat/recommended'].rules,
      ...testingLibraryPlugin.configs['flat/react'].rules,
    },
  },
];
