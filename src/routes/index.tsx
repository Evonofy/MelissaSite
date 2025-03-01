import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { Button } from "../components/button/button"

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <Button text="Teste" link="Teste" webhook="Teste" />
      <div>
        <p>Can't wait to see what you build with qwik!</p>
        <br />
        Happy coding.
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "O Amor Está Doente",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
