import { defineRootConfig } from "somebuild";
import fs from "node:fs";

const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url), "utf8"));

const json = loadJSON("./package.json");

export default defineRootConfig({
    mode: "component-vue2",
    "component-vue2": {
        less27: true,
        outDir: "./dist",
        name: json.name,
        dtsEntryRoot: "src",
        entry: "src/index.ts",
        config: {
            vite: {
                resolve: {
                    alias: {
                        "@": "./src",
                        vue: "vue/dist/vue.esm.js",
                    },
                },
            },
        },
    },
});
