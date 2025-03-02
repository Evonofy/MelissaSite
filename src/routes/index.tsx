import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { Hero } from "../components/hero/hero";
import { FirstSection } from "../components/sections/firstSection";
import { heroData, firstSectionData } from "../data/siteData";

export default component$(() => {
  return (
    <>
      <p>Happy coding.</p>
      <Hero {...heroData} />
      <FirstSection {...firstSectionData}/>
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
