import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { Hero } from "../components/hero/hero";
import heroData from "../data/siteData";

export default component$(() => {
  return (
    <>
      <p>Happy coding.</p>
      <Hero {...heroData} />
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
