import { readFileSync } from "node:fs";
import adapter from "@sveltejs/adapter-auto";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

const pkg = JSON.parse(readFileSync("./package.json", "utf8"));

// Every dependency linked from ./extensions/*
const extensions = Object.entries(pkg.dependencies ?? {})
    .filter(([, spec]) => spec.startsWith("link:extensions/"))
    .map(([name]) => name);

export default defineConfig({
    optimizeDeps: {
        // Disable pre-bundling
        // https://vite.dev/guide/dep-pre-bundling.html
        exclude: extensions,
    },
    server: { fs: { allow: [".."] } },
    plugins: [
        sveltekit({
            compilerOptions: {
                // Force runes mode for the project, except for libraries. Can be removed in svelte 6.
                runes: ({ filename }) =>
                    filename.split(/[/\\]/).includes("node_modules")
                        ? undefined
                        : true,
            },

            // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
            // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
            // See https://svelte.dev/docs/kit/adapters for more information about adapters.
            adapter: adapter(),
        }),
    ],
});
