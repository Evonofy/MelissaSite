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
  title: "Trilogia - O Amor Está Doente",
  meta: [
    {
      name: "title",
      content: "Trilogia - O Amor Está Doente",
    },
    {
      name: "description",
      content:
        "Mergulhe em uma jornada de autoconhecimento e transformação com esta trilogia inovadora, onde os estudos contemporâneos da psiquê e os avanços em neurociências se encontram para desvelar os segredos de uma forma de amor que, nos dias atuais, parece ter se perdido.",
    },
    // Open Graph / Facebook
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://melissazieguer-oamordoente.netlify.app/",
    },
    {
      property: "og:title",
      content: "Trilogia - O Amor Está Doente",
    },
    {
      property: "og:description",
      content:
        "Mergulhe em uma jornada de autoconhecimento e transformação com esta trilogia inovadora, onde os estudos contemporâneos da psiquê e os avanços em neurociências se encontram para desvelar os segredos de uma forma de amor que, nos dias atuais, parece ter se perdido.",
    },
    {
      property: "og:image",
      content: "https://melissazieguer-oamordoente.netlify.app/Preview.png",
    },
    // Twitter
    {
      property: "twitter:card",
      content: "summary_large_image",
    },
    {
      property: "twitter:url",
      content: "https://melissazieguer-oamordoente.netlify.app/",
    },
    {
      property: "twitter:title",
      content: "Trilogia - O Amor Está Doente",
    },
    {
      property: "twitter:description",
      content:
        "Mergulhe em uma jornada de autoconhecimento e transformação com esta trilogia inovadora, onde os estudos contemporâneos da psiquê e os avanços em neurociências se encontram para desvelar os segredos de uma forma de amor que, nos dias atuais, parece ter se perdido.",
    },
    {
      property: "twitter:image",
      content: "https://melissazieguer-oamordoente.netlify.app/Preview.png",
    },
  ],
};
