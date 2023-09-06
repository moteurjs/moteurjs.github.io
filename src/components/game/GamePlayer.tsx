import { component$ } from "@builder.io/qwik";

export interface GamePlayerProps {
    src: string;
    width: number;
    height: number;
}

export default component$((props: GamePlayerProps) => {
    return (
        <iframe
            src={props.src}
            width={props.width}
            height={props.height}
        ></iframe>
    );
});
