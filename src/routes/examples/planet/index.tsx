import ExamplePage from "../../../components/pages/ExamplePage";
import { EXAMPLES } from "../../../data/examples";
import { component$ } from "@builder.io/qwik";

export default component$(() => <ExamplePage example={EXAMPLES.planet} />);
