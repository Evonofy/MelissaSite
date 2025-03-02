import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { FirstHero } from "../components/heroes/firstHero";
import { SecondHero } from "../components/heroes/secondHero";
import { FirstSection } from "../components/sections/firstSection";
import { SecondSection } from "../components/sections/secondSection";
import { ThirdSection } from "../components/sections/thirdSection";
import { FourthSection } from "../components/sections/fourthSection";
import {
  firstHeroData,
  secondHeroData,
  firstSectionData,
  secondSectionData,
  thirdSectionData,
  fourthSectionData,
} from "../data/siteData";

export default component$(() => {
  return (
    <>
      <FirstHero {...firstHeroData} />
      <main>
        <FirstSection {...firstSectionData} />
        <SecondSection {...secondSectionData} />
        <ThirdSection {...thirdSectionData} />
        <FourthSection {...fourthSectionData} />
        <SecondHero {...secondHeroData} />
      </main>
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
