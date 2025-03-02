import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { Hero } from "../components/hero/hero";

export default component$(() => {
  return (
    <>
      <p>Happy coding.</p>
      <Hero
        bgImage="/Hero/Hero.png"
        logoSrc="/Logo.svg"
        logoAlt="Um fundo em vermelho vinho com um sol no centro"
        title="O Amor Está Doente"
        firstDescription="Ajude-se a romper com padrões disfuncionais e restaurar sua capacidade de amar de forma saudável e autêntica."
        secondDescription="O amor, que deveria nutrir, tem se tornado um campo de frustrações e dores. Neste e-book, você descobrirá as raízes desse adoecimento emocional e aprenderá técnicas de cura para transformar suas relações e viver o amor em sua plenitude."
        videoSrc="https://www.youtube.com/embed/uk4wPrid9io?si=LKWNlEtAL1yZnQ7l"
        buttonText="Baixe e transforme sua forma de amar!"
        buttonLink=""
      />
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
