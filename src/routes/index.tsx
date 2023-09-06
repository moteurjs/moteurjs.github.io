import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <>
            <ul>
                <li>
                    <Link
                        href="./examples"
                        class="text-blue-500 hover:underline"
                    >
                        Examples
                    </Link>
                </li>
            </ul>
        </>
    );
});