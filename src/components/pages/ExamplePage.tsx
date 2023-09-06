import { Example } from "../../data/examples";
import GamePlayer from "../game/GamePlayer";
import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

export interface ExamplePageProps {
    example: Example;
}

export default component$((props: ExamplePageProps) => {
    const loc = useLocation();
    const gameName = loc.url.pathname.split("/").slice(-2, -1)[0];

    return (
        <div class="grid justify-center mt-4 text-center gap-4">
            <GamePlayer
                src={`/_examples/${gameName}/index.html`}
                width={props.example.width}
                height={props.example.height}
            />
            <div>
                <Link class="text-red-500 hover:underline" href={props.example.githubLink}>GitHub</Link>
            </div>
        </div>
    );
});
