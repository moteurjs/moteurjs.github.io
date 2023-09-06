import { EXAMPLES } from "../../data/examples";
import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <>
            <ul>
                {Object.values(EXAMPLES).map(({ name, path }) => (
                    <li>
                        <Link href={path} class="text-blue-500 hover:underline">
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
});
