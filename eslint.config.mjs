import globals from 'globals';
import pluginJs from '@eslint/js';
import configPrettier from 'eslint-config-prettier';
export default [
    {
        files: ["index.js"],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node
            }
        }
    },
pluginJs.configs.recommended,
    {
        ignores: ["node_modules"]
    },

    {
      rules: {
          "no-unused-vars": "warn",
          "no-undef": "warn",
          "no-var": "warn",
          semi: ["warn", "always"],
          indent: "warn",
          "no-multi-spaces": "warn",
          "space-in-parens": "warn",
          "no-multiple-empty-lines": "warn",
          "prefer-const": "warn",
          "no-use-before-define": "warn",
          "no-debugger": "warn"
      }
    },
    configPrettier
]