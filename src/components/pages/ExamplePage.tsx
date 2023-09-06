import { Example } from "../../data/examples";
import GamePlayer from "../game/GamePlayer";
import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export interface ExamplePageProps {
    example: Example;
}

export default component$((props: ExamplePageProps) => {
    const loc = useLocation();
    const gameName = loc.url.pathname.split("/").slice(-2, -1)[0];

    return (
        <GamePlayer
            src={`/_examples/${gameName}/index.html`}
            width={props.example.width}
            height={props.example.height}
        />
    );
});
