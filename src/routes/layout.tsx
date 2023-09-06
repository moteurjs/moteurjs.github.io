import { Slot, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <div class="m-2">
            <Link href="/"><h1 class="font-black text-2xl">Moteur</h1></Link>
            <hr />
            <Slot />
        </div>
    );
});
