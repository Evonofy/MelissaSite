import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { Hero } from "../components/hero/hero";
import { FirstSection } from "../components/sections/firstSection";
import { SecondSection } from "../components/sections/secondSection";
import { ThirdSection } from "../components/sections/thirdSection";
import { FourthSection } from "../components/sections/fourthSection";
import { heroData, firstSectionData, secondSectionData, thirdSectionData, fourthSectionData } from "../data/siteData";

export default component$(() => {
  return (
    <>
      <p>Happy coding.</p>
      <Hero {...heroData} />
      <FirstSection {...firstSectionData}/>
      <SecondSection {...secondSectionData}/>
      <ThirdSection {...thirdSectionData}/>
      <FourthSection {...fourthSectionData}/>
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
