import path from "node:path";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import svelte from "eslint-plugin-svelte";
import { defineConfig, includeIgnoreFile } from "eslint/config";
import globals from "globals";
import ts from "typescript-eslint";

const rootDir = import.meta.dirname;

export default defineConfig(
    includeIgnoreFile(path.resolve(rootDir, ".gitignore")),
    js.configs.recommended,
    ts.configs.recommended,
    svelte.configs.recommended,

    // Plain TS packages
    {
        files: ["packages/**/*.ts"],
        languageOptions: { globals: globals.browser },
    },

    // SvelteKit app
    {
        files: ["app/web/**/*.{js,ts,svelte}"],
        languageOptions: { globals: { ...globals.browser, ...globals.node } },
    },
    {
        files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: rootDir,
                extraFileExtensions: [".svelte"],
                parser: ts.parser,
            },
        },
    },

    // typescript-eslint strongly recommend that you do not use the no-undef lint rule on TypeScript projects.
    // see: https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
    {
        files: ["**/*.{ts,svelte}"],
        rules: { "no-undef": "off" },
    },

    // Keep last so nothing re-enables formatting rules
    prettier,
    svelte.configs.prettier,
);
