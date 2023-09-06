import { Slot, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <div class="m-2">
            <Link href="/" class="transition-colors font-black text-2xl hover:text-red-500">Moteur</Link>
            <hr />
            <Slot />
        </div>
    );
});
