import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <div class="m-2">
            <h1 class="font-black text-2xl">Moteur</h1>
            <hr />
            <Slot />
        </div>
    );
});
