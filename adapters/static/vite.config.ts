import baseConfig from "../../vite.config";
import { staticAdapter } from "@builder.io/qwik-city/adapters/static/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";

export default extendConfig(baseConfig, () => {
    return {
        build: {
            ssr: true,
            rollupOptions: {
                input: ["@qwik-city-plan"],
            },
        },
        plugins: [
            staticAdapter({
                origin: "https://moteurjs.github.io",
            }),
        ],
    };
});
