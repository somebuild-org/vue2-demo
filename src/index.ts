import type { PluginObject } from "vue";

import * as components from "./components";
export default components;

export const VaguerComponents: PluginObject<{}> = {
    install(app) {
        Object.entries(components).forEach(([key, value]: [string, any]) => {
            app.component(key, value);
        });
    },
};

export { default as VaguerButton } from "./components/VaguerButton";
