import "./global.css";
import { component$ } from "@builder.io/qwik";
import {
    QwikCityProvider,
    RouterOutlet,
    ServiceWorkerRegister,
} from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <QwikCityProvider>
            <head>
                <meta charSet="utf-8" />
            </head>
            <body lang="en" class="bg-black text-white">
                <RouterOutlet />
                <ServiceWorkerRegister />
            </body>
        </QwikCityProvider>
    );
});
